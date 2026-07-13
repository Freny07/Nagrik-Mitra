import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: "Chat endpoint is online. Use POST to communicate."
  });
}

export async function POST(request) {
  try {
    const { message } = await request.json();
    const sarvamApiKey = process.env.SARVAM_API_KEY;

    if (!message) {
      return NextResponse.json({ success: false, reply: "Please enter a message." });
    }

    if (!sarvamApiKey || sarvamApiKey === "placeholder") {
      return NextResponse.json({
        success: true,
        reply: "Hello citizen! (The server is currently running in offline debug mode, please configure your SARVAM_API_KEY in .env.local)."
      });
    }

    const systemPrompt = `You are Nagrik Mitra, a helpful AI-powered civic assistant for citizens in India.
Your goal is to answer queries regarding government welfare schemes, official government forms (such as PAN, Aadhaar, Passport, driving licenses, etc.), public infrastructure complaints, and civic rights.
Keep your responses helpful, polite, concise, and structured. Answer in the same language or script used by the citizen.`;

    const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": sarvamApiKey,
      },
      body: JSON.stringify({
        model: "sarvam-30b",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.2,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      let reply = data.choices?.[0]?.message?.content?.trim() || "";
      
      // Strip reasoning thoughts if present
      if (reply.includes("</thought>")) {
        reply = reply.split("</thought>")[1].trim();
      }
      
      return NextResponse.json({
        success: true,
        reply: reply || "I am processing your query."
      });
    } else {
      console.warn("Sarvam chat completion failed with status:", response.status);
      return NextResponse.json({
        success: false,
        reply: "I am having trouble communicating with my AI brain right now. Please try again."
      });
    }
  } catch (error) {
    console.error("Error in AI chat route:", error);
    return NextResponse.json({ 
      success: false, 
      reply: "An error occurred while routing your message. Please verify your connection." 
    }, { status: 500 });
  }
}
