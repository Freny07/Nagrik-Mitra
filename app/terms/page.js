"use client";

import Link from "next/link";
import { FileText, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 pb-20">
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white py-16 px-4 text-center border-b border-indigo-900 shadow-md">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <p className="text-slate-350 text-xs mt-2">Effective Date: July 13, 2026</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <FileText className="h-8 w-8 text-indigo-600" />
          <h2 className="text-xl font-extrabold text-slate-900">Platform Usage Agreement</h2>
        </div>

        <p className="text-slate-650 text-sm leading-relaxed">
          Welcome to Nagrik Mitra. By accessing our platform, search engines, and welfares checkers, you agree to comply with the terms and guidelines detailed below.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-slate-900">1. Citizen Responsibility</h3>
            <p className="text-slate-600 text-xs leading-relaxed pl-6">
              You agree to provide accurate and truthful information inside your profile vault. Creating profiles using duplicate identity cards or filing fraudulent grievances with municipal departments is strictly prohibited.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-slate-900">2. Disclaimers on Official Portals</h3>
            <p className="text-slate-600 text-xs leading-relaxed pl-6">
              Nagrik Mitra lists verified links to official government websites (e.g. UIDAI, Tin-NSDL). We are an independent facilitation platform and are not affiliated, associated, or endorsed by any municipal or central ministry department.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-slate-900">3. Termination of Access</h3>
            <p className="text-slate-600 text-xs leading-relaxed pl-6">
              We reserve the right to suspend or block access to accounts that violate fair usage terms or generate excessive spam requests.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/"
            className="bg-indigo-600 hover:bg-indigo-750 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-sm text-center"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
