import ChatInterface from "@/components/ChatInterface";
import { Sparkles, Languages, Mic, Bot } from "lucide-react";

export default function AssistantPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 text-xs font-bold border border-indigo-900 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Conversational Citizen Portal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Nagrik Assistant</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Fill out your profile details, discover relevant central and state schemes, submit grievances, or query government documents in your native language.
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="w-full">
          <ChatInterface />
        </div>

        {/* Feature quick info checklist */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-slate-400 text-xs leading-relaxed">
          <div className="flex items-center space-x-2.5 p-3.5 bg-slate-900 border border-slate-850 rounded-xl shadow-sm">
            <Bot className="h-5 w-5 text-indigo-400 flex-shrink-0" />
            <span>Unified NLP matching schemes and service APIs.</span>
          </div>
          <div className="flex items-center space-x-2.5 p-3.5 bg-slate-900 border border-slate-850 rounded-xl shadow-sm">
            <Languages className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <span>Support for 12+ Indian local languages planned.</span>
          </div>
          <div className="flex items-center space-x-2.5 p-3.5 bg-slate-900 border border-slate-850 rounded-xl shadow-sm">
            <Mic className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <span>Voice-to-Voice STT and TTS integrations ready.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
