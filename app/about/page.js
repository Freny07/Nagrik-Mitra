"use client";

import Link from "next/link";
import { ShieldCheck, Users, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white py-20 px-4 relative overflow-hidden shadow-lg border-b border-indigo-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Nagrik Mitra</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Bridging the gap between citizens, welfares, and municipal governance through inclusive, multi-lingual, state-of-the-art technology.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
        
        {/* Core Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Our Mission & Vision</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nagrik Mitra is designed to resolve the daily challenges faced by Indian citizens when dealing with public infrastructure, central schemes, and official applications. We believe that language, complexity, or digital literacy should never stand between a citizen and their rights.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              By combining AI-driven semantic queries, real-time indicator tracking, and multi-lingual voice guidance, we empower every individual to submit postable grievances, check exact eligibility metrics, and access official verified applications safely.
            </p>
          </div>
          <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-8 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 right-0 opacity-10 text-9xl">🏛️</div>
            <h3 className="font-extrabold text-lg text-indigo-900">Why Nagrik Mitra?</h3>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5 items-start text-xs font-semibold text-indigo-950">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>100% Anti-Scam verified links only</span>
              </li>
              <li className="flex gap-2.5 items-start text-xs font-semibold text-indigo-950">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>Available in all 22 official scheduled Indic languages</span>
              </li>
              <li className="flex gap-2.5 items-start text-xs font-semibold text-indigo-950">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>Instant voice-to-text dictation & playbacks</span>
              </li>
              <li className="flex gap-2.5 items-start text-xs font-semibold text-indigo-950">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>Automatic formatting of formal grievance letters</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Pillars / Values */}
        <section className="space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow text-center space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-950">Integrity & Security</h3>
              <p className="text-slate-500 text-xs leading-relaxed">We protect your profile data vault with premium encryption and never share data with third parties.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow text-center space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-950">Citizen-Centric Focus</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Every feature is optimized for simple, friction-free citizen interfaces in any native Indic script.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow text-center space-y-4">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-950">Inclusivity</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Providing high-quality voice narrations and virtual keyboards to assist every section of the population.</p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-indigo-600 text-white rounded-[2rem] p-8 md:p-12 text-center space-y-6 shadow-lg">
          <h2 className="text-2xl font-extrabold">Ready to explore?</h2>
          <p className="text-indigo-150 text-sm max-w-md mx-auto">
            Get started by checking your eligibility metrics on your dashboard, or search verified official forms list.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/dashboard"
              className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl text-xs hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              Go to Dashboard
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
