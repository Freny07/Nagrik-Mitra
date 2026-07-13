"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { ShieldCheck, Eye, Lock, ArrowRight, Sparkles, CheckCircle2, ChevronRight, Layout, Languages, Shield, Activity, HelpCircle, AudioLines } from "lucide-react";

export default function Home() {
  const observerRef = useRef(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (err) {
        console.warn("Home auth check fail:", err);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    observerRef.current = observer;

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div suppressHydrationWarning className="w-full bg-[#FAFBFD] text-slate-800 relative overflow-hidden font-sans">
      
      {/* Inject custom drifting, floating, and geometric keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drift-one {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes drift-two {
          0%, 100% { transform: translate(0px, 0px) scale(1.05); }
          50% { transform: translate(-50px, 40px) scale(0.95); }
        }
        @keyframes float-badge-left {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-badge-right {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(12px) rotate(-1deg); }
        }
        @keyframes geom-float-one {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(20px, -30px) rotate(180deg) scale(1.05); }
        }
        @keyframes geom-float-two {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-30px, -20px) rotate(-90deg) scale(0.95); }
        }
        @keyframes geom-float-three {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(15px, 20px) rotate(45deg); }
        }
        .animate-drift-one {
          animation: drift-one 20s infinite ease-in-out;
        }
        .animate-drift-two {
          animation: drift-two 25s infinite ease-in-out;
        }
        .animate-float-left {
          animation: float-badge-left 6s infinite ease-in-out;
        }
        .animate-float-right {
          animation: float-badge-right 7s infinite ease-in-out;
        }
        .animate-geom-one {
          animation: geom-float-one 16s infinite ease-in-out;
        }
        .animate-geom-two {
          animation: geom-float-two 20s infinite ease-in-out;
        }
        .animate-geom-three {
          animation: geom-float-three 14s infinite ease-in-out;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative pt-28 pb-40 overflow-visible bg-gradient-to-b from-indigo-50/60 via-indigo-50/10 to-transparent">
        
        {/* Soft, Drifting Ambient Glow Blobs & Geometric Wireframes in the Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle Grid Backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.4) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          ></div>

          {/* Drifting Ambient Bubbles */}
          <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] bg-gradient-to-br from-indigo-300/30 to-purple-300/20 rounded-full blur-[110px] animate-drift-one"></div>
          <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-sky-200/45 to-indigo-200/30 rounded-full blur-[100px] animate-drift-two"></div>

          {/* Floating Light Geometric Elements (Squares, Hexagons, Pluses) */}
          {/* Hollow Square */}
          <div className="absolute top-[15%] left-[8%] w-12 h-12 border-2 border-indigo-500/15 rounded-xl rotate-12 animate-geom-one"></div>
          
          {/* Rotating Wireframe Hexagon */}
          <svg 
            className="absolute top-[8%] right-[25%] w-16 h-16 text-indigo-500/10 animate-geom-two" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
          </svg>

          {/* Dashed Circle Ring */}
          <div className="absolute bottom-[20%] right-[12%] w-20 h-20 border-3 border-dashed border-purple-500/15 rounded-full animate-geom-three"></div>

          {/* Plus Symbols */}
          <span className="absolute top-[35%] right-[8%] text-3xl font-light text-indigo-500/15 animate-geom-one select-none">+</span>
          <span className="absolute bottom-[40%] left-[15%] text-2xl font-light text-purple-500/15 animate-geom-two select-none">+</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 space-y-8 animate-on-scroll">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white border border-indigo-150 shadow-sm text-indigo-700 font-extrabold text-xs tracking-wider uppercase hover:scale-[1.01] transition-transform">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
              Empowering Citizens • Civic Governance Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900">
            Your Voice, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 drop-shadow-sm">
              Your Governance.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-slate-500 font-semibold leading-relaxed text-sm md:text-base">
            Navigate welfares schemes, track central applications, and draft postable municipal grievances in 23 Indic scripts. Simple, voice-assisted, and cryptographically secure.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
            {loading ? (
              <div className="h-13 w-full bg-slate-200 animate-pulse rounded-2xl"></div>
            ) : user ? (
              <Link 
                href="/dashboard" 
                className="w-full h-13 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <Layout className="h-5 w-5" />
                <span>Go to Your Dashboard</span>
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link 
                  href="/login" 
                  className="w-full h-13 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/login?mode=signup" 
                  className="w-full h-13 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] shadow-sm"
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>

          {/* Device Showcase (Overflow Visible to prevent badge clipping) */}
          <div className="relative w-full max-w-5xl mx-auto mt-20 px-4 overflow-visible">
            
            {/* Device frame shadow overlay */}
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[2.5rem] blur-[30px] -z-10"></div>
            
            {/* Centered Desktop Frame */}
            <div className="rounded-[2.5rem] border border-slate-200 shadow-2xl bg-white p-3.5 relative">
              <div className="aspect-video relative rounded-[1.8rem] overflow-hidden border border-slate-100">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Dashboard Preview"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABmLqhPI5pAkfXEMcX8V1XhO-L7MzXvTrfZR458wQ8M__ebmW97zXZ4jaCVJKkAjY0yxVf9e-dvOag-zOFJkaOeH3Zx2xBlE_yMsTuMhB5XKXK8H0q0VTN2vSdtoIJ0wukQtpnQtNxUqy-M5rp-wznuB97zUQPq6QBYuDXdyYqmpkXTMlFIIcWYIAuLoXcVfcft5T_8cARW5091iNo8jZSJjApcHfisjW7W6oU0cgk0h_aizSGgnvykQ86SIqjTQkQAbiIVi_RGOc" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Visual Badges */}
            <div className="absolute top-[20%] -left-6 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl backdrop-blur-md items-center gap-3 hidden lg:flex animate-float-left">
              <div className="w-8.5 h-8.5 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left pr-2">
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">RLS Encryption</p>
                <p className="text-xs text-slate-800 font-extrabold">Data Secured</p>
              </div>
            </div>

            <div className="absolute bottom-[25%] -right-6 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl backdrop-blur-md items-center gap-3 hidden lg:flex animate-float-right">
              <div className="w-8.5 h-8.5 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center border border-purple-100">
                <AudioLines className="h-5 w-5" />
              </div>
              <div className="text-left pr-2">
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Voice Dictation</p>
                <p className="text-xs text-slate-800 font-extrabold">STT Enabled</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-white border-b border-slate-200/60 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
            
            <div className="p-4 space-y-2 hover:scale-[1.01] transition-transform duration-300">
              <span className="text-slate-400 text-[10px] font-black tracking-widest uppercase block">Support</span>
              <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center gap-2">
                23+
              </div>
              <p className="text-slate-600 text-xs font-extrabold">Scheduled Indic Languages</p>
            </div>

            <div className="p-4 space-y-2 pt-8 md:pt-4 hover:scale-[1.01] transition-transform duration-300">
              <span className="text-slate-400 text-[10px] font-black tracking-widest uppercase block">Security</span>
              <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center gap-2">
                100%
              </div>
              <p className="text-slate-600 text-xs font-extrabold">RLS Encrypted Vaults</p>
            </div>

            <div className="p-4 space-y-2 pt-8 md:pt-4 hover:scale-[1.01] transition-transform duration-300">
              <span className="text-slate-400 text-[10px] font-black tracking-widest uppercase block">Latency</span>
              <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center gap-2">
                ~50ms
              </div>
              <p className="text-slate-600 text-xs font-extrabold">Cached Search Speeds</p>
            </div>

            <div className="p-4 space-y-2 pt-8 md:pt-4 hover:scale-[1.01] transition-transform duration-300">
              <span className="text-slate-400 text-[10px] font-black tracking-widest uppercase block">Availability</span>
              <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center gap-2">
                24/7
              </div>
              <p className="text-slate-600 text-xs font-extrabold">AI Civic Assistant Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid (Glassmorphism & Shadows) */}
      <section className="py-32 bg-gradient-to-b from-[#F3F5F9]/30 to-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className="text-center space-y-4 animate-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-150 text-indigo-750 text-[10px] font-black uppercase tracking-wider">
              <span>Platform Core Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Empowering Citizen Services</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto font-medium">Seamlessly manage your civic responsibilities and rights through our integrated digital platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Eligibility Check */}
            <Link href="/schemes" className="animate-on-scroll group bg-white border border-slate-200/80 rounded-[2.5rem] p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(99,102,241,0.06)] hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-tr from-indigo-50 to-indigo-100/50 text-indigo-600 rounded-[1.25rem] flex items-center justify-center mb-8 border border-indigo-150 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
              </div>
              <h3 className="font-extrabold text-lg mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">Eligibility Navigator</h3>
              <p className="text-slate-555 text-xs leading-relaxed mb-8">
                Discover central and state welfare benefits, subsidies, and scholarships customized to your profile details instantly.
              </p>
              <div className="mt-auto flex items-center gap-1 text-indigo-600 text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                <span>Navigate Benefits</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Grievance Redressal */}
            <Link href="/grievance" className="animate-on-scroll group bg-white border border-slate-200/80 rounded-[2.5rem] p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(99,102,241,0.06)] hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-tr from-indigo-50 to-indigo-100/50 text-indigo-600 rounded-[1.25rem] flex items-center justify-center mb-8 border border-indigo-150 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
              </div>
              <h3 className="font-extrabold text-lg mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">Grievance Clerk</h3>
              <p className="text-slate-555 text-xs leading-relaxed mb-8">
                File complaints, capture geolocations, attach proofs, and generate formally formatted print-ready grievance letters.
              </p>
              <div className="mt-auto flex items-center gap-1 text-indigo-600 text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                <span>File Grievance</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Knowledge Base */}
            <Link href="/forms" className="animate-on-scroll group bg-white border border-slate-200/80 rounded-[2.5rem] p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(99,102,241,0.06)] hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-tr from-indigo-50 to-indigo-100/50 text-indigo-600 rounded-[1.25rem] flex items-center justify-center mb-8 border border-indigo-150 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
              </div>
              <h3 className="font-extrabold text-lg mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">Forms Registry</h3>
              <p className="text-slate-550 text-xs leading-relaxed mb-8">
                Search our indexed national forms portal, check document requirements, and copy pre-filled official links instantly.
              </p>
              <div className="mt-auto flex items-center gap-1 text-indigo-600 text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                <span>Find Forms</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Privacy & Data Protection Commitments */}
      <section className="py-28 bg-[#FAFBFD] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
          <div className="text-center space-y-4 animate-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-150 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
              <span>Security Audited</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Privacy & Data Commitments</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto font-medium">We protect citizen profile records with top-tier security standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white/80 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-on-scroll">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-base mb-2 text-slate-900">Zero Data Monetization</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Your profile information, income indicators, and documents checklist values are never sold, monetized, or shared with third-party networks.
              </p>
            </div>

            <div className="bg-white/80 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-on-scroll">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-base mb-2 text-slate-900">Encrypted Database Vault</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                All uploaded data points are encrypted at rest inside enterprise-grade PostgreSQL schemas secured with strict Row Level Security (RLS) policies.
              </p>
            </div>

            <div className="bg-white/80 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-on-scroll">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-base mb-2 text-slate-900">Full Citizen Ownership</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                You retain complete rights over your profile indicators. You can modify, sync, or completely purge your records from your account dashboard instantly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!loading && !user && (
        <section className="py-28 bg-[#FAFBFD] animate-on-scroll">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 p-12 md:p-20 rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl border border-indigo-900">
              
              {/* Mesh decoration inside CTA */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-cta)"></path>
                  <defs>
                    <pattern height="10" id="grid-cta" patternUnits="userSpaceOnUse" width="10">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
                    </pattern>
                  </defs>
                </svg>
              </div>

              <div className="absolute top-[-50%] left-[-20%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[80px]"></div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 tracking-tight leading-tight">Start Your Digital Journey Today</h2>
              <p className="text-slate-350 max-w-xl mx-auto mb-12 relative z-10 opacity-90 text-xs md:text-sm leading-relaxed">
                Join thousands of citizens already using Nagrik Mitra to bridge the gap between their voice and active governance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 max-w-xs mx-auto">
                <Link 
                  href="/login?mode=signup" 
                  className="bg-white hover:bg-slate-50 text-indigo-950 px-8 py-4.5 rounded-[1.25rem] font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-[1.01]"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
