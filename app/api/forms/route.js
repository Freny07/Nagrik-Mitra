import { NextResponse } from "next/server";
import { governmentForms } from "@/app/data/forms";
import { createClient } from "@/utils/supabase/server";

const languageNames = {
  "en-IN": "English",
  "hi-IN": "Hindi",
  "bn-IN": "Bengali",
  "te-IN": "Telugu",
  "ta-IN": "Tamil",
  "mr-IN": "Marathi",
  "gu-IN": "Gujarati",
  "kn-IN": "Kannada",
  "ml-IN": "Malayalam",
  "pa-IN": "Punjabi",
  "or-IN": "Odia",
  "ur-IN": "Urdu",
  "as-IN": "Assamese",
  "brx-IN": "Bodo",
  "doi-IN": "Dogri",
  "ks-IN": "Kashmiri",
  "kok-IN": "Konkani",
  "mai-IN": "Maithili",
  "mni-IN": "Manipuri",
  "ne-IN": "Nepali",
  "sa-IN": "Sanskrit",
  "sat-IN": "Santali",
  "sd-IN": "Sindhi"
};

// Helper function to call the dedicated Sarvam AI Translate API
async function translateText(text, targetLangCode, apiKey) {
  if (!text || !text.trim() || targetLangCode === "en-IN") return text;
  try {
    const response = await fetch("https://api.sarvam.ai/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": apiKey,
      },
      body: JSON.stringify({
        input: text,
        source_language_code: "en-IN",
        target_language_code: targetLangCode,
        model: "sarvam-translate:v1"
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.translated_text || text;
    } else {
      console.warn("Sarvam translate API response not OK:", response.status);
    }
  } catch (err) {
    console.error("Sarvam translate API error:", err);
  }
  return text;
}

export async function POST(request) {
  try {
    const { query, languageCode } = await request.json();
    const sarvamApiKey = process.env.SARVAM_API_KEY;
    const targetLangCode = languageCode || "en-IN";

    let matchedForms = [];
    const matchedFormIds = new Set();
    const lowercaseQuery = query ? query.toLowerCase().trim() : "";

    // 1. Try matching using cached translations in the Supabase database
    if (lowercaseQuery) {
      try {
        const supabase = await createClient();
        const searchPattern = `%${lowercaseQuery}%`;
        const { data: dbMatches } = await supabase
          .from("form_translations")
          .select("form_id")
          .or(`title.ilike.${searchPattern},description.ilike.${searchPattern}`);
        
        if (dbMatches && dbMatches.length > 0) {
          dbMatches.forEach((row) => matchedFormIds.add(row.form_id));
        }
      } catch (err) {
        console.warn("Could not query form_translations table (might not exist yet):", err.message);
      }
    }

    // 2. Perform local quick match on the static English/Hindi keywords catalog
    if (lowercaseQuery) {
      governmentForms.forEach((form) => {
        const matchTitle = form.title.toLowerCase().includes(lowercaseQuery);
        const matchDesc = form.description.toLowerCase().includes(lowercaseQuery);
        const matchKeywords = form.keywords.some((kw) => kw.toLowerCase().includes(lowercaseQuery));
        if (matchTitle || matchDesc || matchKeywords) {
          matchedFormIds.add(form.id);
        }
      });
    }

    // 3. Resolve matched forms lists
    if (matchedFormIds.size > 0) {
      matchedForms = governmentForms.filter((form) => matchedFormIds.has(form.id));
    } else if (lowercaseQuery) {
      // 4. Semantic check via Sarvam LLM classification if no direct matches
      if (sarvamApiKey && sarvamApiKey !== "placeholder") {
        try {
          const classificationPrompt = `You are a semantic translation assistant for Indian government forms.
Your job is to read a user query (which might be in a local Indian language like Hindi, Gujarati, Tamil, etc.) and translate it to a simple English form name.
Choose the closest matching term from this list:
- "pan-card" (if query is about PAN card, income tax card)
- "aadhaar-update" (if query is about Aadhaar, UIDAI, update, or enrolment)
- "passport-seva" (if query is about Passport, travel document, visa)
- "rti-online" (if query is about RTI, right to information, public query)
- "driving-license" (if query is about driving license, DL, parivahan, learner's license)
- "voter-registration" (if query is about Voter ID, election card, EPIC)
- "ration-card" (if query is about Ration Card, NFSA, food supplies)
- "epfo-portal" (if query is about EPFO, Provident Fund, PF, UAN)
- "digilocker" (if query is about DigiLocker, digital documents locker)
- "itr-filing" (if query is about ITR, Income Tax Return filing)
- "pm-kisan" (if query is about PM Kisan, farmer subsidy, agriculture)
- "vahan-seva" (if query is about Vahan, vehicle RC, road tax, transport details)
- "crs-registry" (if query is about CRS registry, birth certificate, death certificate)
- "abha-health-card" (if query is about ABHA card, health account, medical card)
- "eshram-card" (if query is about eShram card, unorganized labour registry)
- "national-scholarship" (if query is about NSP, scholarship grants for students)
- "jee-main" (if query is about JEE Main, NTA engineering entrance exam)
- "neet-ug" (if query is about NEET, medical admissions entrance exam)
- "upsc-online" (if query is about UPSC, IAS, IPS, Civil Services registrations)
- "gst-portal" (if query is about GST portal, tax invoice registration)
- "msme-udyam" (if query is about MSME, Udyam business certificate registration)
- "cuet-ug" (if query is about CUET, university admissions exam)
- "gate-exam" (if query is about GATE, engineering postgraduate test)
- "mca21-portal" (if query is about MCA21, company registry, SPICe+ form)
- "digital-gujarat" (if query is about Digital Gujarat, Gujarat state certificates)
- "up-edistrict" (if query is about UP e-District, Uttar Pradesh certificates)
- "aaple-sarkar" (if query is about Aaple Sarkar, Maharashtra certificates)
- "seva-sindhu" (if query is about Seva Sindhu, Karnataka certificates)
- "serviceonline-bihar" (if query is about ServicePlus Bihar, RTPS Bihar certificates)
- "ncs-jobseeker" (if query is about National Career Service, jobseeker registration)
- "ssc-recruitment" (if query is about Staff Selection Commission, central jobs)
- "rrb-recruitment" (if query is about Railway Recruitment Board, railways jobs)
- "unknown" (if it doesn't match any of these)

Reply with ONLY the matching term (or "unknown") in lowercase. Do not include any other text, punctuation, or formatting.`;

          const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-subscription-key": sarvamApiKey,
            },
            body: JSON.stringify({
              model: "sarvam-30b",
              messages: [
                { role: "system", content: classificationPrompt },
                { role: "user", content: query }
              ],
              temperature: 0.1,
              max_tokens: 50,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            const classification = data.choices?.[0]?.message?.content?.trim() || "unknown";
            
            if (classification !== "unknown") {
              const semanticMatch = governmentForms.find((form) => form.id === classification);
              if (semanticMatch) {
                matchedForms = [semanticMatch];
              }
            }
          }
        } catch (err) {
          console.error("Sarvam semantic search query failure:", err);
        }
      }
    } else {
      // Default: load all forms on empty query
      matchedForms = [...governmentForms];
    }

    // 5. Translate matched forms using the dedicated Translate API and update database cache
    if (targetLangCode !== "en-IN" && matchedForms.length > 0) {
      let supabase = null;
      try {
        supabase = await createClient();
      } catch (e) {
        console.warn("Could not initialize Supabase server client:", e.message);
      }
      
      const translatedItems = await Promise.all(
        matchedForms.map(async (form) => {
          // A. Try to fetch from Supabase translations cache table first
          if (supabase) {
            try {
              const { data: cached } = await supabase
                .from("form_translations")
                .select("*")
                .eq("form_id", form.id)
                .eq("language_code", targetLangCode)
                .maybeSingle();

              if (cached) {
                return {
                  ...form,
                  title: cached.title,
                  description: cached.description,
                  department: cached.department,
                  required_documents: cached.required_documents,
                  guidelines: cached.guidelines,
                };
              }
            } catch (err) {
              console.warn(`Translation cache fetch failed for form ${form.id}:`, err.message);
            }
          }

          // B. Fallback to Sarvam dedicated translate API if not cached
          if (sarvamApiKey && sarvamApiKey !== "placeholder") {
            try {
              // 1. Translate Title, Description, and Department
              const [translatedTitle, translatedDesc, translatedDept] = await Promise.all([
                translateText(form.title, targetLangCode, sarvamApiKey),
                translateText(form.description, targetLangCode, sarvamApiKey),
                translateText(form.department, targetLangCode, sarvamApiKey)
              ]);

              // 2. Translate Documents Checklist (joined by newline)
              const docsText = form.required_documents.join("\n");
              const translatedDocsText = await translateText(docsText, targetLangCode, sarvamApiKey);
              const translatedDocs = translatedDocsText.split("\n").map(d => d.trim()).filter(Boolean);

              // 3. Translate Guidelines (joined by newline)
              const guidelinesText = form.guidelines.join("\n");
              const translatedGuidelinesText = await translateText(guidelinesText, targetLangCode, sarvamApiKey);
              const translatedGuidelines = translatedGuidelinesText.split("\n").map(g => g.trim()).filter(Boolean);

              const translatedForm = {
                ...form,
                title: translatedTitle || form.title,
                description: translatedDesc || form.description,
                department: translatedDept || form.department,
                required_documents: translatedDocs.length > 0 ? translatedDocs : form.required_documents,
                guidelines: translatedGuidelines.length > 0 ? translatedGuidelines : form.guidelines,
              };

              // C. Save newly generated translation in database cache background
              if (supabase && translatedForm.title) {
                try {
                  await supabase
                    .from("form_translations")
                    .insert({
                      form_id: form.id,
                      language_code: targetLangCode,
                      title: translatedForm.title,
                      description: translatedForm.description,
                      department: translatedForm.department,
                      required_documents: translatedForm.required_documents,
                      guidelines: translatedForm.guidelines
                    });
                } catch (dbErr) {
                  console.warn(`Failed to cache translation for ${form.id}:`, dbErr.message);
                }
              }

              return translatedForm;
            } catch (err) {
              console.error(`Failed to translate form item ${form.id}:`, err);
            }
          }
          return form;
        })
      );
      
      matchedForms = translatedItems;
    }

    return NextResponse.json({
      success: true,
      forms: matchedForms,
    });
  } catch (error) {
    console.error("Error in forms search route:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
