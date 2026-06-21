"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Mic, User, Bot, Loader2 } from "lucide-react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hello! I’m Nagrik. You can tell me about yourself, ask about schemes, file a complaint, or find a government form.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    setInput("");

    // Add user message to state
    const userMessageId = `user-${Date.now()}`;
    const userMessage = {
      id: userMessageId,
      sender: "user",
      text: userMessageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Call backend API placeholder
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();

      // Add assistant response to state
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: "assistant",
          text: data.reply || "Thanks. AI integration will be connected soon.",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          sender: "assistant",
          text: "Sorry, I am having trouble connecting to the service. Please try again later.",
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl flex flex-col h-[600px] overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center space-x-3">
        <div className="relative">
          <div className="bg-indigo-600 p-2 rounded-full text-white">
            <Bot className="h-5 w-5" />
          </div>
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
        </div>
        <div>
          <h2 className="font-bold text-white leading-tight">Nagrik Assistant</h2>
          <span className="text-xs text-emerald-400 font-medium">Online • Indian Language Support Ready</span>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-900/50">
        {messages.map((msg) => {
          const isAssistant = msg.sender === "assistant";
          return (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${!isAssistant ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              {/* Avatar */}
              <div
                className={`p-2 rounded-full flex-shrink-0 text-white ${
                  isAssistant
                    ? msg.isError
                      ? "bg-rose-950 text-rose-400 border border-rose-800"
                      : "bg-indigo-950 text-indigo-400 border border-indigo-900"
                    : "bg-emerald-950 text-emerald-400 border border-emerald-900"
                }`}
              >
                {isAssistant ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>

              {/* Bubble */}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  isAssistant
                    ? msg.isError
                      ? "bg-rose-950/40 border border-rose-900/50 text-rose-200"
                      : "bg-slate-950 border border-slate-800 text-slate-100"
                    : "bg-indigo-600 text-white"
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                <span
                  className={`text-[10px] mt-1.5 block text-right font-medium ${
                    isAssistant ? "text-slate-500" : "text-indigo-200"
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-900">
              <Bot className="h-4 w-4" />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 flex items-center space-x-2">
              <Loader2 className="h-4 w-4 text-indigo-400 animate-spin" />
              <span className="text-xs text-slate-400">Nagrik is thinking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-4 bg-slate-950 border-t border-slate-800 flex items-center space-x-2">
        <button
          type="button"
          className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition-colors focus:outline-none"
          title="Voice input (Not integrated yet)"
          onClick={() => alert("Voice integration is planned for the next phase.")}
        >
          <Mic className="h-5 w-5 text-amber-500" />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nagrik anything (e.g. Find scholarship schemes)..."
          className="flex-grow bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl transition-colors focus:outline-none shadow-md shadow-indigo-600/10"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
