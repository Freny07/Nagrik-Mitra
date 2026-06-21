import Link from "next/link";
import { UserCheck, FileCheck2, AlertCircle, FileText, Newspaper, Languages, Bot, ArrowRight, Sparkles } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const features = [
    {
      title: "Citizen Profile",
      description: "Build your unified, conversational profile to easily access services.",
      icon: UserCheck,
      status: "Core",
      href: "/dashboard",
    },
    {
      title: "Scheme Eligibility",
      description: "Discover state and national schemes tailored to your profile automatically.",
      icon: FileCheck2,
      status: "Coming Soon",
    },
    {
      title: "Grievance Tracking",
      description: "Submit, track, and escalate official grievances and complaints seamlessly.",
      icon: AlertCircle,
      status: "Coming Soon",
    },
    {
      title: "Government Forms",
      description: "Search and pre-fill official forms directly from our centralized database.",
      icon: FileText,
      status: "Coming Soon",
    },
    {
      title: "News Feed",
      description: "Stay updated with verified news, notifications, and press releases.",
      icon: Newspaper,
      status: "Coming Soon",
    },
    {
      title: "Voice & Local Languages",
      description: "Speak and interact with the assistant in your mother tongue with zero hassle.",
      icon: Languages,
      status: "Coming Soon",
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        {/* Glow Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Saffron/Gold Accent Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-800/40 text-amber-400 text-xs font-semibold shadow-inner">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Smart Governance for Every Citizen</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]">
            Nagrik
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-indigo-200 to-amber-300 bg-clip-text text-transparent">
              “One assistant for every citizen.”
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Find schemes, file complaints, access government forms, and stay informed — in your own language.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-bold transition-all duration-200"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Visual Assistant Mockup Preview */}
        <div className="mt-20 max-w-5xl mx-auto border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-2xl p-2 shadow-2xl relative">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <div className="border border-slate-800/80 bg-slate-950/80 rounded-xl overflow-hidden">
            {/* Window bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800" />
              </div>
              <div className="text-xs font-semibold text-slate-500">Nagrik Citizen Assistant Preview</div>
              <div className="w-12" />
            </div>

            {/* Content mockup */}
            <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-950 text-indigo-400 rounded-full">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-slate-900 border border-slate-850 rounded-2xl px-4 py-3 text-sm text-slate-200">
                    Hello! I’m Nagrik. How can I help you today?
                  </div>
                </div>
                <div className="flex items-center space-x-3 flex-row-reverse space-x-reverse">
                  <div className="bg-indigo-650 rounded-2xl px-4 py-3 text-sm text-white">
                    What educational scholarship schemes am I eligible for?
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-950 text-indigo-400 rounded-full">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-slate-900 border border-slate-850 rounded-2xl px-4 py-3 text-sm text-slate-200">
                    I can scan active scholarships. Let's start by updating your profile.
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Language Assistant</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Say "Hello" in Hindi, Tamil, Telugu, Kannada, Bengali, or Marathi.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-900">English</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">हिन्दी</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">தமிழ்</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">తెలుగు</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="border-t border-slate-900 bg-slate-950/50 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              All Citizen Services in One Place
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Explore the core modules of the Nagrik assistant designed to streamline your daily governance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                status={feature.status}
                href={feature.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
