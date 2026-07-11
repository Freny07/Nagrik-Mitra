"use client";

import { useEffect, useState } from 'react';
import { Newspaper, Loader2, UserCircle, MapPin, AlertCircle, X } from 'lucide-react';

export default function NewsDashboard() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeArticle, setActiveArticle] = useState(null);
  const [userData, setUserData] = useState({
    role: 'citizen',
    location: 'local',
    grievanceContext: 'general'
  });

  useEffect(() => {
    // Inject local-storage active user properties dynamically
    try {
      const storedRole = localStorage.getItem('user_role');
      const storedLocation = localStorage.getItem('user_location');
      const storedContext = localStorage.getItem('user_context');
      
      // Explicit validation guard checks for guest users
      const isGuest = !storedRole && !storedLocation;
      
      const newUserData = {
        role: storedRole || (isGuest ? '' : 'citizen'),
        location: storedLocation || (isGuest ? '' : 'local'),
        grievanceContext: storedContext || (isGuest ? 'General Bulletins' : 'general'),
        isGuest
      };

      const fetchNews = async () => {
        try {
          const params = new URLSearchParams({
            role: newUserData.role,
            location: newUserData.location,
            grievanceContext: newUserData.grievanceContext
          });
          
          const response = await fetch(`/api/news?${params.toString()}`);
          if (!response.ok) throw new Error('Failed to fetch news');
          const data = await response.json();
          setArticles(data.articles || []);
          setUserData(newUserData);
        } catch (error) {
          console.error("Error loading news:", error);
          setUserData(newUserData);
        } finally {
          setLoading(false);
        }
      };

      fetchNews();
    } catch (e) {
      console.error("Local storage error:", e);
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-6 md:p-8 font-sans">
      <div className="max-w-[1280px] mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Newspaper className="w-8 h-8 text-primary" />
            <h1 className="text-headline-lg text-on-surface">Live News & Updates</h1>
          </div>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Real-time Indian civic updates personalized to your current location and active requests.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-4">
             <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant text-label-md text-on-surface">
                <UserCircle className="w-4 h-4 text-primary" />
                <span className="capitalize">{userData.role || 'Guest'}</span>
             </div>
             <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant text-label-md text-on-surface">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="capitalize">{userData.location || 'India'}</span>
             </div>
             <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-label-md transition-colors ${userData.isGuest ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low border-outline-variant text-on-surface'}`}>
                <AlertCircle className={`w-4 h-4 ${userData.isGuest ? 'text-on-primary' : 'text-primary'}`} />
                <span className="capitalize">{userData.grievanceContext}</span>
             </div>
          </div>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
             <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {articles.map((article, index) => (
              <article 
                key={index} 
                className={`bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_8px_30px_rgba(15,23,42,0.03)] border border-surface-container transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0px_20px_40px_rgba(53,37,205,0.05)] hover:border-primary/20 flex flex-col h-full ${index === 0 ? 'lg:col-span-2 md:col-span-2' : ''}`}
              >
                <div className="flex-1">
                  <div className="bg-primary/5 text-primary px-3 py-1 rounded-full text-label-sm font-semibold tracking-normal normal-case inline-block mb-3">
                    {article.source?.name || 'Civic Update'}
                  </div>
                  <h2 className="text-body-lg font-bold text-on-surface mb-3 line-clamp-2 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-body-md text-on-surface-variant line-clamp-3 mb-6">
                    {article.description}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-container">
                  <span className="text-label-sm text-outline">
                    {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveArticle(article);
                    }}
                    className="text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                  >
                    Read more
                  </button>
                </div>
              </article>
            ))}
            
            {articles.length === 0 && (
              <div className="col-span-full text-center py-12 bg-surface-container-lowest rounded-2xl border border-surface-container">
                <p className="text-body-lg text-on-surface-variant">No relevant civic updates found for your current profile.</p>
              </div>
            )}
          </div>
        )}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
            <div className="bg-surface-container-lowest w-full max-w-2xl rounded-2xl p-8 shadow-2xl scale-in-animation relative max-h-[90vh] flex flex-col">
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="overflow-y-auto pr-2">
                <div className="bg-primary/5 text-primary px-3 py-1 rounded-full text-label-sm font-semibold tracking-normal normal-case inline-block mb-4">
                  {activeArticle.source?.name || 'Civic Update'}
                </div>
                
                <h2 className="text-headline-sm font-bold text-on-surface mb-4">
                  {activeArticle.title}
                </h2>
                
                <div className="text-label-sm text-outline mb-6">
                  {new Date(activeArticle.publishedAt).toLocaleDateString('en-IN', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </div>
                
                <p className="text-body-lg text-on-surface-variant leading-relaxed mb-8">
                  {activeArticle.description}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-surface-container">
                <a 
                  href={activeArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-[#3525CD] hover:bg-[#2d1fae] text-white text-center rounded-xl font-semibold transition-colors shadow-lg shadow-primary/20"
                >
                  For full details, visit original source ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
