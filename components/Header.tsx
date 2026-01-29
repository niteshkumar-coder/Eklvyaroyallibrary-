
import React from 'react';
import { Link } from 'react-router-dom';
import { User, ThemeMode } from '../types';

interface HeaderProps {
  user: User | null;
  onAuthClick: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onAuthClick, theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
      isDark ? 'bg-[#000814]/90 border-[#D4AF37]/20 shadow-none' : 'bg-[#F5F5DC]/95 border-[#D4AF37]/30 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <img 
              src="https://i.ibb.co/WvkzJYQG/logo.png" 
              alt="Eklavya Royal Logo" 
              className={`w-full h-full object-contain filter drop-shadow-sm transition-all duration-500 ${isDark ? 'brightness-125 saturate-150' : ''}`}
              onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/100/100"; }}
            />
          </div>
          <div className="flex flex-col">
            <h1 className={`font-cinzel text-xl md:text-2xl font-bold tracking-[0.2em] leading-none transition-colors duration-500 ${
              isDark ? 'text-[#D4AF37]' : 'text-[#002366]'
            }`}>EKLAVYA</h1>
            <p className={`text-[8px] uppercase tracking-[0.4em] font-bold mt-1 transition-colors duration-500 ${
              isDark ? 'text-white/60' : 'text-[#800000]'
            }`}>Royal Library</p>
          </div>
        </Link>
        
        <nav className={`hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
          isDark ? 'text-[#D4AF37]/80' : 'text-[#002366]/70'
        }`}>
          <Link to="/" className="hover:text-[#D4AF37] transition-colors border-b-2 border-transparent hover:border-[#D4AF37] pb-1">Grand Hall</Link>
          <Link to="/catalog" className="hover:text-[#D4AF37] transition-colors border-b-2 border-transparent hover:border-[#D4AF37] pb-1">The Archive</Link>
          <Link to="/story" className="hover:text-[#D4AF37] transition-colors border-b-2 border-transparent hover:border-[#D4AF37] pb-1">The Legend</Link>
          <Link to="/assistant" className={`hover:text-[#D4AF37] transition-colors border-b-2 border-transparent hover:border-[#D4AF37] pb-1 ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>The Royal Sage</Link>
        </nav>

        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-500 group relative overflow-hidden ${
              isDark ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-[#002366]/5 text-[#002366] border border-[#002366]/10'
            }`}
            title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
          >
            <div className={`transition-transform duration-700 ${isDark ? 'rotate-[360deg]' : 'rotate-0'}`}>
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </div>
          </button>

          <div className="hidden sm:flex flex-col items-end">
            <span className={`text-[10px] font-bold uppercase transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#002366]'}`}>{user ? user.name : 'Master Learner'}</span>
            <span className="text-[9px] text-[#D4AF37] uppercase">{user ? 'Elite Sovereign' : 'Elite Member'}</span>
          </div>

          <button 
            onClick={onAuthClick}
            className={`w-12 h-12 rounded-full border-2 overflow-hidden flex items-center justify-center group transition-all hover:shadow-lg shadow-md ${
              isDark ? 'border-[#D4AF37] bg-black' : 'border-[#D4AF37] bg-[#002366]'
            }`}
          >
            {user ? (
              <span className="font-cinzel text-xl font-bold text-[#D4AF37]">{user.name[0].toUpperCase()}</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
