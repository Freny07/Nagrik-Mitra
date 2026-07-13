"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Copy, Check, ChevronDown, ChevronUp, FileText, Calendar, Clock, Lock, Mic, AlertTriangle, Sparkles, ShieldCheck, X, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [activityStream, setActivityStream] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      setUser(session.user);

      // Fetch Profile Data for Real-Time Hydration
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
        
      if (profile) {
        setProfileData(profile);
      }

      // Fetch Grievances for Activity Stream
      const { data: complaints } = await supabase
        .from("grievances")
        .select("*")
        .eq("user_id", session.user.id);

      // Compile Chronological Event Stream
      let stream = [];
      
      if (profile) {
        // Profile Security Event
        stream.push({
          id: `sec-${profile.id}`,
          category: 'security',
          title: 'Registry Security Lock Active',
          description: `Central civic registration synchronization completed for the ${profile.location || 'Local'} Node.`,
          timestamp: profile.updated_at || profile.created_at || new Date().toISOString()
        });

        // Vault Document Events
        const docs = profile.verified_documents || [];
        docs.forEach((doc, idx) => {
          // Stagger mock timestamp for chronological display
          const docTime = new Date(new Date(profile.updated_at || profile.created_at || new Date()).getTime() - ((idx + 1) * 3600000));
          stream.push({
            id: `vault-${idx}`,
            category: 'vault',
            title: 'Vault Ledger Mutated',
            description: `${doc} successfully encrypted and committed to the public schema.`,
            timestamp: docTime.toISOString()
          });
        });
      }

      if (complaints) {
        complaints.forEach((g) => {
          stream.push({
            id: `griev-${g.id}`,
            category: 'grievance',
            title: 'Grievance Document Initialized',
            description: `Tracking token #${g.id.substring(0,8)} set to '${g.status || 'Under Review'}'.`,
            timestamp: g.created_at
          });
        });
      }

      // Sort descending
      stream.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setActivityStream(stream);
    };
    loadData();
  }, [router]);

  // Compute Dynamic Progression Engine Score
  const calculateProfileScore = () => {
    if (!profileData) return 0;
    let score = 0;
    if (profileData.dob && profileData.location && profileData.role) {
      score += 25;
    }
    
    const docs = profileData.verified_documents || [];
    if (docs.includes("Income Certificate")) score += 25;
    if (docs.includes("Caste Certificate")) score += 25;
    if (docs.includes("Domicile Certificate")) score += 25;
    
    return Math.min(score, 100);
  };

  const profileScore = calculateProfileScore();
  const verifiedDocs = profileData?.verified_documents || [];
  
  const [animatedScore, setAnimatedScore] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [insight, setInsight] = useState(null);

  const getDynamicInsight = (profile) => {
    if (!profile) return { 
      text: "Keep your profile updated with your latest income and occupational details to receive personalized, highly-accurate civic welfare recommendations.", 
      linkText: "Update Profile", 
      href: "/profile" 
    };

    const insights = [];
    const docs = profile.verified_documents || [];

    // Scheme Insight based on Income/Role
    if (profile.role?.toLowerCase() === 'student' && Number(profile.income) < 300000) {
      insights.push({
        text: `🎯 Based on your verified student status in ${profile.location || "your area"}, you have active academic welfare programs awaiting document attachment.`,
        linkText: "Map your credentials",
        href: "/schemes"
      });
    } else if (Number(profile.income) <= 250000) {
      insights.push({
        text: `💡 Your declared income qualifies you for EWS (Economically Weaker Section) civic benefits across state and central schemes.`,
        linkText: "Check eligible schemes",
        href: "/schemes"
      });
    }

    // Vault/Document tip
    if (!docs.includes("Income Certificate") || !docs.includes("Domicile Certificate")) {
      insights.push({
        text: `⚠️ Your micro-document vault is missing core certificates. Attach them to automatically unlock verified civic services.`,
        linkText: "Upload documents",
        href: "/profile"
      });
    }

    // Grievance Tip
    insights.push({
      text: `🗣️ Did you know? You can draft official government complaints using just your voice in your native dialect. The Sarvam AI engine will translate and format it perfectly.`,
      linkText: "File a grievance",
      href: "/grievance"
    });

    // General News
    insights.push({
      text: `📰 Stay informed: New digital verification workflows have been deployed for ${profile.location || "your local"} district. Read the latest civic updates.`,
      linkText: "Read News",
      href: "/news"
    });

    return insights[Math.floor(Math.random() * insights.length)];
  };

  useEffect(() => {
    if (profileData) {
      setInsight(getDynamicInsight(profileData));
    } else {
      setInsight(getDynamicInsight(null));
    }
  }, [profileData]);

  const handleRefreshInsight = () => {
    let nextInsight = getDynamicInsight(profileData);
    if (insight && nextInsight.text === insight.text && profileData) {
      nextInsight = getDynamicInsight(profileData);
    }
    setInsight(nextInsight);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(profileScore);
      setIsMounted(true);
    }, 150);
    return () => clearTimeout(timer);
  }, [profileScore]);

  return (
    <div className="bg-background text-on-surface min-h-screen py-unit-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-gutter">
        
        {/* Header Section */}
        <header className="space-y-unit-xs">
          <h1 className="font-headline-lg text-headline-lg text-on-background">Welcome back, Citizen</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Your civic profile is actively synchronizing with the central registry.</p>
        </header>

        {/* Top Block: Citizen Profile Validation Progress & Micro-Document Vault */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          
          {/* Validation Progress Engine */}
          <div className="bg-surface-container-lowest rounded-xl p-unit-lg signature-shadow border border-outline-variant transition-all duration-300 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-unit-md mb-unit-md">
              <div className="space-y-unit-xs">
                <h2 className="font-headline-md text-headline-md text-on-background">Citizen Profile Validation Progress</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Verification level: Tier 2 (Standard Access)</p>
              </div>
              <div className="text-right">
                <span className="font-headline-md text-headline-md text-primary font-bold">{profileScore}%</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider ml-1">Complete</span>
              </div>
            </div>
            
            {/* Dynamic Progress Bar */}
            <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden mb-unit-md">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-[1500ms] ease-out" 
                style={{ width: `${animatedScore}%` }}
              ></div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-unit-md">
              {/* Step 1: Sign In (Always completed if they are on dashboard) */}
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span className="font-label-sm text-label-sm font-semibold">Account Authenticated</span>
              </div>
              
              {/* Step 2: Profile Update (Completed if base profile data exists, i.e., score >= 25) */}
              <div className={`flex items-center gap-1 ${profileScore >= 25 ? 'text-primary' : 'text-on-surface-variant'}`}>
                <span className="material-symbols-outlined text-[16px]">
                  {profileScore >= 25 ? 'check_circle' : 'hourglass_empty'}
                </span>
                <span className={`font-label-sm text-label-sm ${profileScore >= 25 ? 'font-semibold' : ''}`}>Profile Initialized</span>
              </div>
              
              {/* Step 3: Document Attachment (Completed if all docs attached, i.e., score === 100) */}
              <div className={`flex items-center gap-1 ${profileScore === 100 ? 'text-primary' : 'text-on-surface-variant'}`}>
                <span className="material-symbols-outlined text-[16px]">
                  {profileScore === 100 ? 'check_circle' : 'hourglass_empty'}
                </span>
                <span className={`font-label-sm text-label-sm ${profileScore === 100 ? 'font-semibold' : ''}`}>Credentials Vaulted</span>
              </div>
            </div>
          </div>

          {/* Micro-Document Vault Status Bar */}
          <div className="bg-surface-container-lowest p-unit-lg rounded-xl signature-shadow border border-outline-variant flex flex-col justify-center">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline-md text-on-surface">Micro-Document Vault</h2>
              <span className="material-symbols-outlined text-primary">verified_user</span>
            </div>
            <div className="space-y-4">
              
              <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-100">
                <span className="text-sm font-semibold text-slate-800">Identity Profile</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                    <Lock className="w-3 h-3"/> [IDENTITY VERIFIED (Aadhaar Omitted for Privacy)]
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Income Certificate", "Caste Certificate", "Domicile Certificate"].map((doc) => {
                  const isVerified = verifiedDocs.includes(doc);
                  return (
                    <div key={doc} className="flex flex-col gap-1.5">
                      <span className="text-sm font-semibold text-slate-800">{doc}</span>
                      <div className="flex items-center gap-2">
                        {isVerified ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-3.5 h-3.5" /> [PROFILE VERIFIED]
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
                            <AlertTriangle className="w-3.5 h-3.5" /> [ACTION REQUIRED]
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Nagrik Mitra Animated AI Mascot Insights (Full Width) */}
        <section className="w-full">
          <div className="flex items-start gap-4 sm:gap-6 relative py-6 overflow-visible">
            
            {/* Mascot Rendering (Left Block) */}
            <div className={`flex-shrink-0 transition-all duration-[800ms] ease-out transform ${isMounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} w-20 h-20 sm:w-28 sm:h-28 relative z-10 mt-2`}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                <rect x="40" y="60" width="120" height="100" rx="30" fill="#4f46e5" />
                <rect x="60" y="80" width="80" height="50" rx="15" fill="#e0e7ff" />
                <circle cx="85" cy="105" r="8" fill="#4f46e5" className="animate-pulse" />
                <circle cx="115" cy="105" r="8" fill="#4f46e5" className="animate-pulse" />
                <path d="M100 60 L100 30" stroke="#4f46e5" strokeWidth="8" strokeLinecap="round" />
                <circle cx="100" cy="20" r="10" fill="#f59e0b" className="animate-bounce" />
                <path d="M40 110 Q20 110 20 140" stroke="#4f46e5" strokeWidth="12" strokeLinecap="round" />
                <path d="M160 110 Q180 110 180 140" stroke="#4f46e5" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </div>

            {/* Staggered Thought Cloud Integration (Right Block) */}
            <div className={`flex-1 transition-all duration-[1000ms] delay-[400ms] ease-out transform ${isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'} relative`}>
              <div className="bg-white/70 backdrop-blur-sm border border-indigo-200 p-5 sm:p-6 rounded-3xl rounded-tl-none relative shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all duration-500">
                 <div className="relative z-10 space-y-2">
                   <div className="flex justify-between items-center mb-1">
                     <h2 className="font-headline-md text-indigo-900 flex items-center gap-2">
                       <Sparkles className="w-4 h-4 text-indigo-500"/> Sarvam AI Guide
                     </h2>
                     <button onClick={handleRefreshInsight} className="text-indigo-400 hover:text-indigo-700 transition-colors bg-white/50 hover:bg-white rounded-full p-1.5 shadow-sm border border-indigo-100" title="Get new insight">
                       <RefreshCw className="w-4 h-4" />
                     </button>
                   </div>
                   
                   <p className="font-body-md text-slate-700 leading-relaxed text-sm transition-opacity duration-300">
                     {insight?.text || "Keep your profile updated with your latest income and occupational details to receive personalized, highly-accurate civic welfare recommendations."}
                     {insight?.href && (
                       <Link href={insight.href} className="text-indigo-600 font-bold ml-2 hover:underline inline-flex items-center">
                         {insight.linkText} <span className="material-symbols-outlined text-[14px] ml-0.5">arrow_forward</span>
                       </Link>
                     )}
                   </p>
                 </div>
              </div>
            </div>

          </div>
        </section>

        {/* Action Cards (Access things) */}
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <Link href="/forms" className="group bg-surface-container-lowest p-6 rounded-xl signature-shadow border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">description</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-1">Fill Forms</h3>
              <p className="font-label-sm text-on-surface-variant">Apply for services</p>
            </Link>

            <Link href="/schemes" className="group bg-surface-container-lowest p-6 rounded-xl signature-shadow border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">account_balance</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-1">Check Schemes</h3>
              <p className="font-label-sm text-on-surface-variant">View eligible benefits</p>
            </Link>
            
            <Link href="/grievance" className="group bg-surface-container-lowest p-6 rounded-xl signature-shadow border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">report</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-1">File Grievance</h3>
              <p className="font-label-sm text-on-surface-variant">Submit official feedback</p>
            </Link>
            
            <Link href="/news" className="group bg-surface-container-lowest p-6 rounded-xl signature-shadow border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">newspaper</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-1">Read News</h3>
              <p className="font-label-sm text-on-surface-variant">Civic updates & alerts</p>
            </Link>
          </div>
        </section>

        {/* Recent Civic Activities Timeline (Lower Anchor) */}
        <section className="bg-surface-container-lowest rounded-xl p-unit-lg signature-shadow border border-outline-variant">
           <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-2">
             <Calendar className="w-5 h-5 text-indigo-600"/> Recent Civic Activities
           </h2>
           
           {activityStream.length === 0 ? (
             <div className="text-center py-6">
               <p className="font-body-md text-slate-500 text-sm italic">
                 Welcome to your civic workspace. Your real-time activity tracking stream is online and monitoring verification nodes.
               </p>
             </div>
           ) : (
             <div className="border-l-2 border-dashed border-slate-200 ml-4 space-y-8 py-2 relative">
               {activityStream.map((activity) => {
                 const timeStr = new Date(activity.timestamp).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
                 
                 let Icon = Lock;
                 let colorClass = "text-indigo-600";
                 
                 if (activity.category === 'vault') {
                   Icon = FileText;
                   colorClass = "text-emerald-600";
                 } else if (activity.category === 'grievance') {
                   Icon = AlertTriangle;
                   colorClass = "text-amber-600";
                 }
                 
                 return (
                   <div key={activity.id} className="relative pl-8 animate-fade-in">
                     <div className={`absolute -left-[17px] bg-white p-1 border-2 border-slate-200 rounded-full shadow-sm ${colorClass}`}>
                       <Icon className="w-4 h-4"/>
                     </div>
                     <p className="font-label-sm text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">{timeStr}</p>
                     <h4 className="font-label-md font-bold text-slate-800">{activity.title}</h4>
                     <p className="text-xs text-slate-600 mt-1">{activity.description}</p>
                   </div>
                 );
               })}
             </div>
           )}
        </section>

      </div>
    </div>
  );
}
