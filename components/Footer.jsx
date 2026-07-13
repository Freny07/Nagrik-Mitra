"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "success" or "error"

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || submitting) return;

    setSubmitting(true);
    setMessage("");
    setStatus("");

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.trim().toLowerCase() });

      if (error) {
        if (error.code === "23505") { // Unique key constraint
          setMessage("You are already subscribed!");
          setStatus("success");
        } else {
          throw error;
        }
      } else {
        setMessage("Subscribed successfully!");
        setStatus("success");
        setEmail("");
      }
    } catch (err) {
      console.error("Newsletter error:", err);
      setMessage("Failed to subscribe. Please try again.");
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-unit-xl max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <span className="font-display text-headline-md font-bold text-on-surface mb-4 block">Nagrik Mitra</span>
          <p className="text-on-secondary-fixed-variant font-body-md text-body-md mb-6">Empowering citizens with seamless digital bridges to governance and infrastructure.</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-outline-variant/20 flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-outline-variant/20 flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-on-secondary-fixed-variant font-label-sm text-label-sm hover:text-on-background transition-colors">About Us</Link></li>
            <li><Link href="/features" className="text-on-secondary-fixed-variant font-label-sm text-label-sm hover:text-on-background transition-colors">Features List</Link></li>
            <li><Link href="/privacy" className="text-on-secondary-fixed-variant font-label-sm text-label-sm hover:text-on-background transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-on-secondary-fixed-variant font-label-sm text-label-sm hover:text-on-background transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-6">Platform</h4>
          <ul className="space-y-4">
            <li><Link href="/schemes" className="text-on-secondary-fixed-variant font-label-sm text-label-sm hover:text-on-background transition-colors">Schemes</Link></li>
            <li><Link href="/forms" className="text-on-secondary-fixed-variant font-label-sm text-label-sm hover:text-on-background transition-colors">Services</Link></li>
            <li><Link href="/grievance" className="text-on-secondary-fixed-variant font-label-sm text-label-sm hover:text-on-background transition-colors">Grievances</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-6">Stay Updated</h4>
          <p className="text-on-secondary-fixed-variant font-label-sm text-label-sm mb-4">Get the latest legislative updates directly in your inbox.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input 
                className="bg-white border border-outline-variant rounded-lg px-3 py-2 text-xs w-full focus:ring-1 focus:ring-primary focus:border-primary outline-none text-slate-800 font-semibold" 
                placeholder="email@gov.in" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                required
              />
              <button 
                type="submit"
                disabled={submitting}
                className="bg-primary hover:bg-primary-container text-white px-4 py-2 rounded-lg font-label-sm text-label-sm transition-colors cursor-pointer"
              >
                {submitting ? "..." : "Join"}
              </button>
            </div>
            {message && (
              <span className={`text-[10px] font-bold ${status === "error" ? "text-rose-500" : "text-emerald-600"}`}>
                {message}
              </span>
            )}
          </form>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-unit-md border-t border-outline-variant/50 flex flex-col md:flex-row justify-between items-center gap-4 text-on-secondary-fixed-variant font-label-sm text-label-sm opacity-80">
        <span>© 2024 Nagrik Mitra. Empowering Civic Infrastructure.</span>
        <div className="flex gap-8">
          <span>Accessibility Statement</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
