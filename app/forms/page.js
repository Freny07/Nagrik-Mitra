"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Globe, Shield, FileText, CheckCircle2, Volume2, HelpCircle, Sparkles, ChevronRight, Keyboard, Mic, MicOff, X, Eye, ArrowLeft } from "lucide-react";

// Regional Virtual Keyboard mapping
const regionalKeyboards = {
  "hi-IN": [
    ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
    ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ"],
    ["ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न"],
    ["प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "ह"],
    ["ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ", "्"]
  ],
  "mr-IN": [
    ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
    ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ"],
    ["ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न"],
    ["प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "ह"],
    ["ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ", "्"]
  ],
  "bn-IN": [
    ["অ", "আ", "ই", "ঈ", "উ", "ঊ", "এ", "ঐ", "ও", "ঔ", "ং", "ঃ"],
    ["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ"],
    ["ট", "ਠ", "ಡ", "ढ", "ਣ", "ত", "ਥ", "ದ", "ধ", "ন"],
    ["প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "ব", "হ"],
    ["া", "ি", "ী", "ু", "ূ", "ে", "ৈ", "ো", "ৌ", "্"]
  ],
  "te-IN": [
    ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ"],
    ["క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ", "జ", "ఝ", "ఞ"],
    ["ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ", "ద", "ధ", "న"],
    ["ప", "ఫ", "బ", "భ", "మ", "య", "ర", "ల", "వ", "హ"],
    ["ా", "ి", "ీ", "ు", "ూ", "ె", "ే", "ై", "ొ", "ో"]
  ],
  "ta-IN": [
    ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"],
    ["க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம"],
    ["ய", "ர", "ல", "வ", "ழ", "ள", "ற", "ன", "ஜ", "ஷ"],
    ["ஹ", "ஸ", "ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை"]
  ],
  "gu-IN": [
    ["અ", "આ", "ઇ", "ઈ", "ઉ", "ઊ", "એ", "ઐ", "ઓ", "ઔ", "અં", "અઃ"],
    ["ક", "ખ", "ગ", "ઘ", "જ", "ઝ", "ઞ", "ટ", "ઠ", "ડ"],
    ["ઢ", "ણ", "ત", "થ", "દ", "ધ", "ન", "પ", "ફ", "બ"],
    ["ભ", "મ", "ય", "ર", "લ", "વ", "હ", "ા", "િ", "ી"],
    ["ુ", "ૂ", "ે", "ઐ", "ઓ", "ૌ", "્"]
  ],
  "kn-IN": [
    ["అ", "ఆ", "ఇ", "ಈ", "ఉ", "ಊ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ"],
    ["ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಚ", "ಛ", "ಜ", "ಝ", "ಞ"],
    ["ట", "ಠ", "ಡ", "ಢ", "ಣ", "ತ", "ಥ", "ದ", "ಧ", "ನ"],
    ["ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಯ", "ರ", "ಲ", "ವ", "ಹ"],
    ["ా", "ಿ", "ೀ", "ು", "ೂ", "ೆ", "ೇ", "ೈ", "ೊ", "ೋ"]
  ],
  "ml-IN": [
    ["അ", "ആ", "ഇ", "ഈ", "ഉ", "ഊ", "എ", "ഏ", "ഐ", "ഒ", "ഓ", "ഔ"],
    ["ക", "ഖ", "ഗ", "ഘ", "ങ", "ച", "ഛ", "ජ", "ഝ", "ഞ"],
    ["ട", "ഠ", "ഡ", "ഢ", "ണ", "ത", "ഥ", "ദ", "ധ", "ന"],
    ["പ", "ഫ", "ബ", "ഭ", "മ", "യ", "ര", "ല", "വ", "ഹ"],
    ["ാ", "ി", "ീ", "ു", "ൂ", "െ", "േ", "ൈ", "ൊ", "ോ"]
  ],
  "pa-IN": [
    ["ੳ", "ਅ", "ੲ", "ਸ", "ਹ", "ਕ", "ਖ", "ਗ", "ਘ", "ਙ"],
    ["ਚ", "ਛ", "ਜ", "ਝ", "ਞ", "ਟ", "ਠ", "ਡ", "ਢ", "ਣ"],
    ["ਤ", "ਥ", "ਦ", "ਧ", "ਨ", "ਪ", "ਫ", "ਬ", "ਭ", "ਮ"],
    ["ਯ", "ਰ", "ਲ", "ਵ", "ੜ", "ਾ", "ਿ", "ੀ", "ੁ", "ੂ"]
  ],
  "or-IN": [
    ["ଅ", "ଆ", "ଇ", "ଈ", "ଉ", "ଊ", "ଏ", "ଐ", "ଓ", "ଔ", "ଂ", "ଃ"],
    ["କ", "ଖ", "ଗ", "ଘ", "ଙ", "ଚ", "ଛ", "ଜ", "ଝ", "ଞ"],
    ["ଟ", "ଠ", "ଡ", "ଢ", "ଣ", "ତ", "ଥ", "ଦ", "ଧ", "ନ"],
    ["ପ", "ଫ", "ବ", "ଭ", "ମ", "ଯ", "ର", "ଲ", "ଵ", "ହ"],
    ["ା", "ି", "ୀ", "ୁ", "ୂ", "େ", "ୈ", "ୋ", "ୌ", "୍"]
  ],
  "ur-IN": [
    ["ا", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح", "خ"],
    ["د", "ڈ", "ذ", "ر", "ڑ", "ز", "ژ", "س", "ش", "ص"],
    ["ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل"],
    ["م", "ن", "و", "ہ", "ھ", "ء", "ی", "ے", "ُ", "ِ"]
  ]
};

const languages = [
  { code: "en-IN", name: "English" },
  { code: "hi-IN", name: "Hindi (हिंदी)" },
  { code: "bn-IN", name: "Bengali (বাংলা)" },
  { code: "te-IN", name: "Telugu (తెలుగు)" },
  { code: "ta-IN", name: "Tamil (தமிழ்)" },
  { code: "mr-IN", name: "Marathi (मराठी)" },
  { code: "gu-IN", name: "Gujarati (ગુજરાતી)" },
  { code: "kn-IN", name: "Kannada (ಕನ್ನಡ)" },
  { code: "ml-IN", name: "Malayalam (മലയാളം)" },
  { code: "pa-IN", name: "Punjabi (ਪੰਜਾਬી)" },
  { code: "or-IN", name: "Odia (ଓଡ଼ିଆ)" },
  { code: "ur-IN", name: "Urdu (اردو)" }
];

const parentCategories = [
  {
    id: "identity",
    title: "Identity & Registry",
    icon: "👤",
    color: "from-blue-500 to-indigo-600",
    formList: [
      { id: "pan-card", name: "PAN Card Application" },
      { id: "aadhaar-update", name: "Aadhaar Card Update & Enrollment" },
      { id: "digilocker", name: "DigiLocker Vault Access" },
      { id: "voter-registration", name: "Voter ID Card Registration" },
      { id: "crs-registry", name: "Birth & Death Registration (CRS)" }
    ]
  },
  {
    id: "exams",
    title: "Education & Exams",
    icon: "🎓",
    color: "from-amber-500 to-orange-600",
    formList: [
      { id: "jee-main", name: "JEE Main Registration" },
      { id: "neet-ug", name: "NEET UG Entrance Exam" },
      { id: "cuet-ug", name: "CUET UG Admissions Portal" },
      { id: "gate-exam", name: "GATE Exam Portal" },
      { id: "national-scholarship", name: "National Scholarship Portal (NSP)" },
      { id: "ssc-recruitment", name: "SSC Job Recruitment Exams" },
      { id: "rrb-recruitment", name: "Railway Recruitment Board Exams" }
    ]
  },
  {
    id: "business",
    title: "Business, Taxes & GST",
    icon: "💼",
    color: "from-emerald-500 to-teal-600",
    formList: [
      { id: "itr-filing", name: "Income Tax Return (ITR) filing" },
      { id: "gst-portal", name: "GST Common Portal Services" },
      { id: "msme-udyam", name: "MSME Udyam Registration" },
      { id: "mca21-portal", name: "Company Incorporation (MCA21)" },
      { id: "epfo-portal", name: "EPFO Member Passbook & Claims" }
    ]
  },
  {
    id: "transport",
    title: "Transport & Travel",
    icon: "🚗",
    color: "from-cyan-500 to-blue-600",
    formList: [
      { id: "passport-seva", name: "Passport Application Seva" },
      { id: "driving-license", name: "Driving License / Learner DL" },
      { id: "vahan-seva", name: "Vehicle RC & Fitness (Vahan)" }
    ]
  },
  {
    id: "welfare",
    title: "Welfare & Essential Services",
    icon: "🌾",
    color: "from-rose-500 to-pink-600",
    formList: [
      { id: "rti-online", name: "RTI Online Request Submission" },
      { id: "ration-card", name: "NFSA Ration Card Portal" },
      { id: "pm-kisan", name: "PM Kisan Farmer Registry" },
      { id: "eshram-card", name: "e-Shram Labour Card Registry" },
      { id: "abha-health-card", "name": "ABHA Health Card (PM-JAY)" },
      { id: "ncs-jobseeker", name: "National Career Service Jobs" }
    ]
  },
  {
    id: "state",
    title: "State Citizen Portals",
    icon: "🏛️",
    color: "from-purple-500 to-violet-600",
    formList: [
      { id: "digital-gujarat", name: "Digital Gujarat Portal" },
      { id: "up-edistrict", name: "UP e-District Portal" },
      { id: "aaple-sarkar", name: "Aaple Sarkar Maharashtra" },
      { id: "seva-sindhu", name: "Karnataka Seva Sindhu" },
      { id: "serviceonline-bihar", name: "ServicePlus RTPS Bihar" }
    ]
  }
];

const detectLanguage = (text) => {
  if (/[\u0900-\u097F]/.test(text)) return "hi-IN";
  else if (/[\u0980-\u09FF]/.test(text)) return "bn-IN";
  else if (/[\u0B80-\u0BFF]/.test(text)) return "ta-IN";
  else if (/[\u0C00-\u0C7F]/.test(text)) return "te-IN";
  else if (/[\u0C80-\u0CFF]/.test(text)) return "kn-IN";
  else if (/[\u0A80-\u0AFF]/.test(text)) return "gu-IN";
  else if (/[\u0B00-\u0B7F]/.test(text)) return "or-IN";
  else if (/[\u0D00-\u0D7F]/.test(text)) return "ml-IN";
  return null;
};

export default function FormsSearchPage() {
  const [query, setQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-IN");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Voice Recording state
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Audio playback state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentAudioText, setCurrentAudioText] = useState("");
  const [ttsLoading, setTtsLoading] = useState(false);
  const audioPlayerRef = useRef(null);

  // Trigger search whenever language selection changes (but only if a query was active)
  useEffect(() => {
    if (hasSearched && query.trim() !== "") {
      fetchForms(query);
    }
  }, [selectedLanguage]);

  const fetchForms = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setHasSearched(true);
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: searchQuery,
          languageCode: selectedLanguage,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setForms(data.forms || []);
      }
    } catch (err) {
      console.error("Forms fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    fetchForms(query);
  };

  const selectFormFromCategory = (formName) => {
    setQuery(formName);
    setSelectedCategory(null);
    fetchForms(formName);
  };

  const clearSearch = () => {
    setQuery("");
    setForms([]);
    setHasSearched(false);
  };

  // Detect script from text input and auto-switch language selector
  const handleInputChange = (val) => {
    setQuery(val);
    const detected = detectLanguage(val);
    if (detected) {
      setSelectedLanguage(detected);
    }
  };

  // Speech to Text trigger handlers
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        await transcribeAudio(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const transcribeAudio = async (blob) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", blob, "audio.webm");

      const response = await fetch("/api/complaints/voice", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("STT API failed");
      const data = await response.json();

      if (data.success && data.transcript) {
        setQuery(data.transcript);
        
        // Auto detect script and update search
        const detected = detectLanguage(data.transcript);
        if (detected) {
          setSelectedLanguage(detected);
        } else {
          // If no script detected, search anyway
          fetchForms(data.transcript);
        }
      } else {
        alert("Could not transcribe audio.");
      }
    } catch (err) {
      console.error("Transcription error:", err);
      alert("Speech-to-Text translation failed.");
    } finally {
      setLoading(false);
    }
  };

  // Text-To-Speech playback wrapper
  const handleSpeakToggle = async (formItem) => {
    // Generate text explanation to read
    const textToRead = `${formItem.title}. Department: ${formItem.department}. Required Documents: ${formItem.required_documents.join(", ")}. Step-by-step Guidelines: ${formItem.guidelines.join(". ")}`;

    if (isSpeaking && currentAudioText === textToRead) {
      if (audioPlayerRef.current) {
        if (isPaused) {
          audioPlayerRef.current.play();
          setIsPaused(false);
        } else {
          audioPlayerRef.current.pause();
          setIsPaused(true);
        }
      }
      return;
    }

    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }

    setIsSpeaking(false);
    setIsPaused(false);
    setTtsLoading(true);
    setCurrentAudioText(textToRead);

    try {
      const response = await fetch("/api/complaints/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: textToRead,
          languageCode: selectedLanguage,
        }),
      });

      if (!response.ok) throw new Error("TTS failed");
      const data = await response.json();

      if (data.success && data.audio) {
        const audioSrc = `data:audio/wav;base64,${data.audio}`;
        if (audioPlayerRef.current) {
          audioPlayerRef.current.src = audioSrc;
          audioPlayerRef.current.play();
          setIsSpeaking(true);
          setIsPaused(false);
          audioPlayerRef.current.onended = () => {
            setIsSpeaking(false);
            setIsPaused(false);
            setCurrentAudioText("");
          };
        }
      } else {
        alert("Failed to synthesize speech.");
        setCurrentAudioText("");
      }
    } catch (err) {
      console.error("TTS error:", err);
      alert("Could not activate voice feedback.");
      setCurrentAudioText("");
    } finally {
      setTtsLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 pb-20">
      
      {/* Hidden audio player */}
      <audio ref={audioPlayerRef} className="hidden" />

      {/* Hero Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white py-16 px-4 relative overflow-hidden shadow-lg border-b border-indigo-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Anti-Scam Verified Portal Index</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Govt Forms Search Engine
          </h1>
          <p className="text-slate-350 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Avoid lookalike fraudulent portals. Search government forms and applications in any local script to retrieve verified official links, checklists, and instructions.
          </p>
        </div>
      </div>

      {/* Main Search Panel Area */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 space-y-8">
        
        {/* Glassmorphic Search Bar Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-xl transition-all hover:shadow-2xl">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-3">
            
            {/* Mic Recording Toggle */}
            <div className="flex gap-2">
              {isRecording ? (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-3.5 rounded-2xl flex items-center justify-center transition-colors shadow-md animate-pulse shrink-0 cursor-pointer"
                  title="Stop recording and search"
                >
                  <MicOff className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startRecording}
                  className="bg-indigo-50 border border-indigo-150 text-[#3525CD] hover:bg-indigo-100/70 px-4 py-3.5 rounded-2xl flex items-center justify-center transition-colors shadow-sm shrink-0 cursor-pointer"
                  title="Search using Voice"
                  disabled={loading}
                >
                  <Mic className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Input Box */}
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={isRecording ? "Listening... Speak form name now..." : "Type form name (e.g. 'pan card', 'પાન કાર્ડ', 'आधार कार्ड')..."}
                disabled={isRecording || loading}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#3525CD] transition-colors text-sm font-medium shadow-inner"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Language Selection / Keyboard Actions */}
            <div className="flex gap-2 items-center">
              
              {/* Keyboard Toggle */}
              {selectedLanguage !== "en-IN" && (
                <button
                  type="button"
                  onClick={() => setShowKeyboard(!showKeyboard)}
                  className={`p-3 rounded-2xl border transition-all shrink-0 cursor-pointer ${showKeyboard ? "bg-indigo-600 text-white border-indigo-600 shadow-md" : "bg-white border-slate-200 hover:bg-slate-50 text-[#3525CD]"}`}
                  title="Onscreen Regional Keyboard"
                >
                  <Keyboard className="h-5 w-5" />
                </button>
              )}

              {/* Language Dropdown */}
              <div className="relative flex items-center">
                <span className="absolute left-3 text-slate-400 pointer-events-none">
                  <Globe className="h-4 w-4" />
                </span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="pl-9 pr-8 py-3.5 bg-white border border-slate-200 text-xs font-semibold rounded-2xl focus:outline-none focus:border-[#3525CD] appearance-none cursor-pointer hover:bg-slate-50 transition-colors shadow-sm"
                >
                  {languages.map((l) => (
                    <option key={l.code} value={l.code}>{l.name}</option>
                  ))}
                </select>
              </div>

              {/* Submit Search */}
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-[#3525CD] hover:bg-[#2a1cb1] text-white font-bold px-6 py-3.5 rounded-2xl transition-colors shadow-md text-sm cursor-pointer disabled:opacity-50"
              >
                Search
              </button>

            </div>
          </form>

          {/* Onscreen Keyboard Component */}
          {showKeyboard && selectedLanguage !== "en-IN" && regionalKeyboards[selectedLanguage] && (
            <div className="mt-4 bg-slate-100 rounded-2xl p-4 border border-slate-200 shadow-inner flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
              {regionalKeyboards[selectedLanguage].map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-1 justify-center overflow-x-auto min-w-max pb-1">
                  {row.map((char) => (
                    <button
                      key={char}
                      type="button"
                      onClick={() => handleInputChange(query + char)}
                      className="bg-white hover:bg-slate-50 active:bg-slate-200 border border-slate-200 rounded-xl w-9 h-10 text-sm font-bold flex items-center justify-center transition-colors text-slate-800 shadow-sm"
                    >
                      {char}
                    </button>
                  ))}
                </div>
              ))}
              <div className="flex gap-2 justify-center mt-2">
                <button
                  type="button"
                  onClick={() => handleInputChange(query + " ")}
                  className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-12 h-10 text-xs font-bold transition-colors text-slate-800 shadow-sm uppercase"
                >
                  Space
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange(query.slice(0, -1))}
                  className="bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-xl px-6 h-10 text-xs font-bold transition-colors shadow-sm uppercase"
                >
                  Backspace
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange("")}
                  className="bg-slate-200 hover:bg-slate-350 border border-slate-300 rounded-xl px-6 h-10 text-xs font-bold transition-colors text-slate-700 shadow-sm uppercase"
                >
                  Clear
                </button>
              </div>
            </div>
          )}

          {isRecording && (
            <p className="text-xs text-rose-500 font-medium mt-3 flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              Recording audio. Speak clearly in any language...
            </p>
          )}
        </div>

        {/* Dashboard categories (Default state when no query has been searched) */}
        {!hasSearched && (
          <section className="space-y-6">
            <div className="text-center md:text-left space-y-1">
              <h2 className="text-xl font-extrabold text-slate-900">Browse Forms by Category</h2>
              <p className="text-xs text-slate-500">Select a category below to see index mappings</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parentCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-indigo-150 transition-all cursor-pointer flex flex-col justify-between h-40 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 text-5xl group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <div>
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="font-extrabold text-slate-950 text-base mt-3">{cat.title}</h3>
                  </div>
                  <p className="text-[11px] font-bold text-[#3525CD] flex items-center gap-1 hover:underline">
                    View Indexed Forms ({cat.formList.length}) &rarr;
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pop-up Modal showing Category Forms list */}
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{selectedCategory.icon}</span>
                  <h3 className="font-extrabold text-base">{selectedCategory.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form List */}
              <div className="flex-1 p-6 overflow-y-auto space-y-3.5">
                <p className="text-xs text-slate-500 font-medium">Select a form below to translate and search its official details:</p>
                <div className="divide-y divide-slate-100">
                  {selectedCategory.formList.map((form) => (
                    <div
                      key={form.id}
                      onClick={() => selectFormFromCategory(form.name)}
                      className="py-3 flex justify-between items-center group cursor-pointer hover:bg-slate-50 px-2 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-4 w-4 text-slate-400 group-hover:text-[#3525CD]" />
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-slate-950">{form.name}</span>
                      </div>
                      <span className="text-[10px] font-bold text-indigo-600 hover:underline flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        Select
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Results Display Area */}
        {hasSearched && (
          <div className="space-y-6">
            
            {/* Search Header Banner info */}
            <div className="flex justify-between items-center bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-3 text-xs text-slate-650 font-semibold shadow-sm">
              <span>Showing search results for "{query}"</span>
              <button
                onClick={clearSearch}
                className="text-[#3525CD] hover:underline flex items-center gap-1 font-bold"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Dashboard
              </button>
            </div>

            {loading ? (
              <div className="space-y-4">
                <div className="h-48 bg-white border border-slate-200 rounded-3xl animate-pulse"></div>
              </div>
            ) : forms.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-3xl mx-auto">
                  🔎
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-800">No official forms found</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Try typing basic keywords like "PAN", "Aadhaar", "Passport", "Voter", "Driving License", or select from categories.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                
                {/* Note: We show ONLY the searched/selected form to comply with user rules */}
                {forms.slice(0, 1).map((form) => (
                  <div
                    key={form.id}
                    className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-md hover:border-indigo-150 flex flex-col gap-6"
                  >
                    
                    {/* Top Block: Title & Category */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-lg font-bold text-slate-900">{form.title}</h3>
                          <span className="px-2.5 py-0.5 text-[10px] rounded-full font-bold uppercase tracking-wider bg-indigo-50 border border-indigo-100 text-[#3525CD]">
                            {form.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-semibold">{form.department}</p>
                      </div>

                      {/* Audio Synth Control Button */}
                      <button
                        onClick={() => handleSpeakToggle(form)}
                        disabled={ttsLoading && currentAudioText !== `${form.title}. Department: ${form.department}. Required Documents: ${form.required_documents.join(", ")}. Step-by-step Guidelines: ${form.guidelines.join(". ")}`}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-50 border border-indigo-200 text-[#3525CD] rounded-xl text-xs font-bold hover:bg-indigo-100/50 transition-colors cursor-pointer self-start"
                      >
                        <Volume2 className="h-4 w-4" />
                        <span>
                          {ttsLoading && currentAudioText === `${form.title}. Department: ${form.department}. Required Documents: ${form.required_documents.join(", ")}. Step-by-step Guidelines: ${form.guidelines.join(". ")}`
                            ? "Loading..."
                            : isSpeaking && currentAudioText === `${form.title}. Department: ${form.department}. Required Documents: ${form.required_documents.join(", ")}. Step-by-step Guidelines: ${form.guidelines.join(". ")}`
                            ? isPaused
                              ? "Resume Guide"
                              : "Pause Guide"
                            : "Listen to Guide"}
                        </span>
                      </button>
                    </div>

                    {/* Description Box */}
                    <p className="text-slate-650 text-sm leading-relaxed">
                      {form.description}
                    </p>

                    {/* Scam Warning banner & Official URL */}
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl mt-0.5">
                          <Shield className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Verified Official Govt Site</p>
                          </div>
                          <p className="text-xs font-mono text-emerald-700 mt-0.5 select-all underline break-all">
                            {form.official_url}
                          </p>
                        </div>
                      </div>
                      
                      <a
                        href={form.official_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-750 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow-sm hover:-translate-y-0.5 transition-all text-center"
                      >
                        Visit Official Portal
                        <ChevronRight className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    {/* 2-Column Details Block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
                      
                      {/* Left Column: Required Documents */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <FileText className="h-4 w-4 text-slate-400" />
                          Required Documents Checklist
                        </h4>
                        <ul className="space-y-2">
                          {form.required_documents.map((doc, idx) => (
                            <li key={idx} className="flex gap-2 bg-slate-50 border border-slate-150 rounded-xl p-3 text-xs leading-relaxed text-slate-650">
                              <CheckCircle2 className="h-4 w-4 text-[#3525CD] shrink-0 mt-0.5" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column: Step-by-Step Guidelines */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <HelpCircle className="h-4 w-4 text-slate-400" />
                          Guidelines to Apply / Fill Form
                        </h4>
                        <ol className="space-y-2">
                          {form.guidelines.map((step, idx) => (
                            <li key={idx} className="flex gap-3 bg-slate-50 border border-slate-150 rounded-xl p-3 text-xs leading-relaxed text-slate-650">
                              <span className="w-5 h-5 bg-[#3525CD]/10 text-[#3525CD] rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
