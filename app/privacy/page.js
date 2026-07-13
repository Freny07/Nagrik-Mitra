"use client";

import Link from "next/link";
import { Shield, Eye, Lock, Server } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 pb-20">
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white py-16 px-4 text-center border-b border-indigo-900 shadow-md">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="text-slate-350 text-xs mt-2">Effective Date: July 13, 2026</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <Shield className="h-8 w-8 text-indigo-600" />
          <h2 className="text-xl font-extrabold text-slate-900">Your Privacy is Our Commitment</h2>
        </div>

        <p className="text-slate-650 text-sm leading-relaxed">
          At Nagrik Mitra, we value the trust you place in us when sharing your civic information. This Privacy Policy details how we handle, protect, and process your profile data vault, documents, and newsletter subscriptions.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Eye className="h-4.5 w-4.5 text-indigo-500" />
              1. Information We Collect
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed pl-6">
              We collect your basic profile indicators (such as name, date of birth, income range, and region/location) to compute schemes eligibility and format grievance letters. Scanned document arrays are saved securely inside your private profile vault.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Lock className="h-4.5 w-4.5 text-indigo-500" />
              2. Data Protection Vault
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed pl-6">
              All profile columns are stored inside encrypted Supabase databases. Access is governed strictly by PostgreSQL Row Level Security (RLS) policies, ensuring only you can read, update, or delete your data records.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Server className="h-4.5 w-4.5 text-indigo-500" />
              3. Third-Party API integrations
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed pl-6">
              We utilize Sarvam Indic API tools for query transcription and voice outputs. Text sent for translation/transcription is processed transiently and is never persisted on Sarvam's servers for target training.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-xs font-semibold text-indigo-950 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span>Need help or want to request account deletion?</span>
          <Link
            href="/dashboard"
            className="bg-indigo-600 hover:bg-indigo-750 text-white font-bold px-4 py-2.5 rounded-xl text-center shadow-sm"
          >
            Manage Your Vault
          </Link>
        </div>

      </div>
    </div>
  );
}
