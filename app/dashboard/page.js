import { User, FileCheck2, AlertCircle, FileText, Newspaper, ArrowRight, Clock, Bot, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import QuickActionCard from "@/components/QuickActionCard";

export default function Dashboard() {
  const quickActions = [
    {
      title: "Check Scheme Eligibility",
      description: "Find schemes and scholarships you are eligible for based on your profile.",
      icon: FileCheck2,
      href: "/features",
      actionText: "Check Schemes",
    },
    {
      title: "File a Complaint",
      description: "Submit grievance complaints directly to local authorities and track updates.",
      icon: AlertCircle,
      href: "/features",
      actionText: "File Grievance",
    },
    {
      title: "Find Government Forms",
      description: "Search, view and pre-fill documents and official government forms.",
      icon: FileText,
      href: "/features",
      actionText: "Search Forms",
    },
    {
      title: "Read Latest News",
      description: "Stay informed on verified policy changes and national announcements.",
      icon: Newspaper,
      href: "/features",
      actionText: "Open Feed",
    },
  ];

  const recentActivity = [
    {
      title: "Profile updated",
      time: "2 hours ago",
      type: "success",
      description: "Conversational profile basic details saved.",
    },
    {
      title: "Complaint NAG-2026-001 submitted",
      time: "1 day ago",
      type: "info",
      description: "Grievance successfully filed and queued for review.",
    },
    {
      title: "You may be eligible for a scholarship",
      time: "3 days ago",
      type: "alert",
      description: "Matched with 'National Merit Scholarship' criteria.",
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 relative">
      {/* Background glow lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative">
        {/* Welcome Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
              Hello, Citizen
              <Sparkles className="h-6 w-6 text-amber-500 animate-pulse" />
            </h1>
            <p className="text-slate-400 mt-1">Welcome back to Nagrik. Let's get your profile set up to match with local schemes.</p>
          </div>
          <div className="flex items-center space-x-3 bg-slate-950/60 border border-slate-850 px-4 py-2.5 rounded-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">Live Citizen Session</span>
          </div>
        </div>

        {/* Profile Completion & Chat Preview Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <User className="h-5 w-5 text-indigo-400" />
                  Citizen Profile Completion
                </h2>
                <span className="text-sm font-bold text-indigo-400">40% Complete</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-950 rounded-full h-3 mb-6 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-indigo-650 h-full rounded-full transition-all duration-500"
                  style={{ width: "40%" }}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Conversational profile initiation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Basic contact details verification</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-4.5 w-4.5 rounded-full border border-slate-700 flex items-center justify-center flex-shrink-0" />
                  <span className="text-slate-500">Provide state of residence & age details</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-4.5 w-4.5 rounded-full border border-slate-700 flex items-center justify-center flex-shrink-0" />
                  <span className="text-slate-500">Verify documents / upload ID certificates</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60">
              <Link
                href="/assistant"
                className="inline-flex items-center text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Complete Profile with Assistant
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Assistant Chat Preview Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <div className="p-2 bg-indigo-950 text-indigo-400 rounded-lg">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white">Assistant Chat</h3>
              </div>

              <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 text-sm text-slate-300 leading-relaxed mb-6">
                “Hi! Tell me about yourself and I’ll help you find relevant government services.”
              </div>
            </div>

            <Link
              href="/assistant"
              className="w-full text-center py-2.5 rounded-lg bg-indigo-650 hover:bg-indigo-600 border border-indigo-500/20 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>Open Chat Assistant</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, idx) => (
              <QuickActionCard
                key={idx}
                title={action.title}
                description={action.description}
                icon={action.icon}
                href={action.href}
                actionText={action.actionText}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md space-y-4">
          <div className="flex items-center space-x-2.5 border-b border-slate-800/60 pb-4">
            <Clock className="h-5 w-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">Recent Activity Log</h2>
          </div>

          <div className="divide-y divide-slate-800/60">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-200 text-sm">{activity.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{activity.description}</p>
                </div>
                <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap bg-slate-950 px-2.5 py-1 rounded border border-slate-850">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
