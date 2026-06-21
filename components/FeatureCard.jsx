import Link from "next/link";

export default function FeatureCard({ title, description, icon: Icon, status, href }) {
  const isComingSoon = status?.toLowerCase() === "coming soon";

  const CardContent = () => (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-indigo-950 text-indigo-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        {status && (
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
              isComingSoon
                ? "bg-slate-800 text-slate-400 border border-slate-700"
                : "bg-emerald-950 text-emerald-400 border border-emerald-800"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {!isComingSoon && href && (
        <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">
          <span>Get Started</span>
          <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </div>
      )}
    </div>
  );

  if (href && !isComingSoon) {
    return (
      <Link href={href} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="block h-full">
      <CardContent />
    </div>
  );
}
