import Link from "next/link";

export default function QuickActionCard({ title, description, icon: Icon, href, actionText = "Launch" }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-slate-700 transition-all duration-200 flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2.5 bg-indigo-950 text-indigo-400 rounded-lg group-hover:bg-indigo-900 group-hover:text-indigo-300 transition-colors">
            {Icon && <Icon className="h-5 w-5" />}
          </div>
          <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors">{title}</h3>
        </div>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
      </div>
      <Link
        href={href}
        className="w-full text-center py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all"
      >
        {actionText}
      </Link>
    </div>
  );
}
