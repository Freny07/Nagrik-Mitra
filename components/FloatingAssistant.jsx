"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Mic, MicOff, Volume2, Clock } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "assistant",
      text: "Namaste! I am Nagrik Mitra, your AI civic clerk. Ask me anything about government schemes, documents, or help drafting a grievance in your language!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Audio state
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: userText,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
      });

      if (!response.ok) throw new Error("API failed");
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: "assistant",
          text: data.reply || "Thank you. Let me look that up for you.",
          timestamp: new Date()
        }
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "assistant",
          text: "I am having trouble connecting right now. Please try again in a moment.",
          timestamp: new Date(),
          isError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Mic Transcription
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        await transcribeAudio(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Mic access error:", err);
      alert("Could not access microphone.");
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
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", blob, "audio.webm");

      const response = await fetch("/api/complaints/voice", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.transcript) {
          setInput(data.transcript);
        }
      }
    } catch (err) {
      console.error("STT error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Panel Popup */}
      {isOpen && (
        <div className="bg-white border border-slate-200 rounded-[2rem] w-[360px] sm:w-[380px] h-[500px] shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center border border-indigo-500/30">
                <Bot className="h-4.5 w-4.5 text-indigo-300 animate-bounce" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs">Nagrik Clerk Assistant</h3>
                <p className="text-[10px] text-slate-400 font-semibold">Online • AI Companion</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Conversation logs list */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.sender === "assistant";
              return (
                <div key={msg.id} className={`flex flex-col ${isAssistant ? "items-start" : "items-end"} gap-1`}>
                  <div className={`p-3 rounded-2xl text-xs max-w-[85%] leading-relaxed ${isAssistant ? "bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm" : "bg-indigo-600 text-white rounded-tr-none shadow-md"}`}>
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-400 font-semibold px-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              );
            })}
            
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping"></span>
                Typing response...
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* User Input Input Area */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 bg-white flex gap-2 items-center">
            {isRecording ? (
              <button
                type="button"
                onClick={stopRecording}
                className="bg-rose-500 hover:bg-rose-600 text-white p-2.5 rounded-xl shrink-0 cursor-pointer animate-pulse"
                title="Stop recording"
              >
                <MicOff className="h-4.5 w-4.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={startRecording}
                className="bg-indigo-50 border border-indigo-150 text-[#3525CD] hover:bg-indigo-100/50 p-2.5 rounded-xl shrink-0 cursor-pointer"
                title="Speak to Assistant"
                disabled={isLoading}
              >
                <Mic className="h-4.5 w-4.5" />
              </button>
            )}

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isRecording ? "Listening... Speak now..." : "Ask me anything..."}
              disabled={isRecording || isLoading}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-indigo-600 transition-colors shadow-inner"
            />

            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-indigo-600 hover:bg-indigo-750 text-white p-2.5 rounded-xl shrink-0 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Circle Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-indigo-600 to-indigo-750 hover:from-indigo-750 hover:to-indigo-900 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative group border border-indigo-500/20"
        title="Open AI Civic Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6 animate-pulse" />}
        
        {/* Floating Notification Indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-ping"></span>
        )}
      </button>

    </div>
  );
}
