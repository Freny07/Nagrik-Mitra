import Link from "next/link";
import { Landmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Landmark className="h-6 w-6 text-amber-500" />
            <span className="font-extrabold text-lg tracking-wider text-white">NAGRIK</span>
          </div>

          {/* Tagline & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-300 font-medium">Built for citizens, powered by technology.</p>
            <p className="text-sm text-slate-500 mt-1">
              &copy; {new Date().getFullYear()} Nagrik Platform. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/features" className="hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/assistant" className="hover:text-white transition-colors">
              Assistant
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
