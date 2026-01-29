
import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface ReaderProps {
  theme?: ThemeMode;
}

const Reader: React.FC<ReaderProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  const [isFocused, setIsFocused] = useState(false);
  const bgClass = isFocused 
    ? (isDark ? 'bg-[#00050a]' : 'bg-[#FDFCF0]') 
    : (isDark ? 'bg-[#000814]' : 'bg-white');

  return (
    <div className={`min-h-screen transition-all duration-1000 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className={`flex justify-between items-center mb-16 border-b pb-6 transition-colors duration-500 ${isDark ? 'border-[#D4AF37]/20' : 'border-[#002366]/10'}`}>
          <div className="flex items-center space-x-4">
            <button className={`transition-colors ${isDark ? 'text-[#D4AF37]/40 hover:text-[#D4AF37]' : 'text-[#002366]/40 hover:text-[#002366]'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <h1 className={`font-playfair text-xl font-bold italic transition-colors ${isDark ? 'text-white' : 'text-[#002366]'}`}>The Art of Archery and Dedication</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsFocused(!isFocused)}
              className={`text-xs font-bold uppercase tracking-widest px-4 py-2 border transition-all duration-500 ${
                isFocused 
                ? 'bg-[#D4AF37] text-[#002366] border-[#D4AF37]' 
                : `${isDark ? 'text-[#D4AF37] border-[#D4AF37]/50' : 'text-[#002366] border-[#002366]'}`
              }`}
            >
              {isFocused ? 'Distraction Off' : 'Reading Mode'}
            </button>
          </div>
        </div>

        <article className={`prose prose-lg max-w-none transition-colors duration-500 font-lora leading-relaxed ${isDark ? 'text-white/80' : 'text-[#002366]/90'}`}>
          <p className={`first-letter:text-5xl first-letter:font-cinzel first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37] mb-8`}>
            The story of Eklavya is often reduced to a cautionary tale about sacrifice, but in the realm of modern digital infrastructure, it stands as the ultimate blueprint for the "Self-Taught Sovereign." The clay idol was not a teacher in the physical sense, but a psychological catalyst — a focus point for a mind that refused to be bound by the gatekeeping of formal institutions.
          </p>
          
          <h2 className={`font-cinzel text-2xl font-bold mt-12 mb-6 transition-colors ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>I. The Architecture of Intent</h2>
          <p className="mb-6">
            In our royal library, intent is the only currency. When we design digital spaces, we often clutter them with "engagement" features. True luxury, however, is the subtraction of noise. By removing sidebars, notifications, and unnecessary visual density, we create a sanctuary that mirrors the deep forest where Eklavya practiced.
          </p>
          
          <blockquote className={`border-l-4 border-[#D4AF37] pl-8 italic my-12 text-2xl font-playfair transition-colors ${isDark ? 'text-white/50' : 'text-[#002366]/70'}`}>
            "Knowledge is common, but focus is rare. The library that provides only books provides nothing. The library that provides silence provides everything."
          </blockquote>

          <h2 className={`font-cinzel text-2xl font-bold mt-12 mb-6 transition-colors ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>II. Digital Gurus and AI Idols</h2>
          <p className="mb-6">
            Gemini 3 Pro and our "Royal Sage" AI are the modern manifestations of the clay idol. They do not dictate; they respond to your dedication. An analytical study of digital infrastructure suggests that the most successful learning platforms of 2026 will be those that transition from "Platforms of Information" to "Spaces of Transformation."
          </p>

          <div className={`my-16 p-8 border-r-8 border-[#D4AF37] transition-colors duration-500 ${isDark ? 'bg-white/5 text-white/90' : 'bg-[#002366] text-[#F5F5DC]'}`}>
            <h3 className="font-cinzel font-bold mb-4 tracking-widest text-[#D4AF37]">ANALYSIS NOTE</h3>
            <p className="text-sm font-lora opacity-80">
              The term "Royal" is not just an aesthetic; it is a commitment to performance. A 200ms delay in a search result is a friction that Eklavya would not have tolerated. Precision is the archery of the digital age.
            </p>
          </div>
        </article>

        <div className={`mt-20 pt-10 border-t text-center transition-colors ${isDark ? 'border-white/10' : 'border-[#002366]/10'}`}>
          <p className={`font-bold uppercase tracking-widest text-xs mb-8 ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Finish your session</p>
          <button className="px-10 py-4 bg-[#D4AF37] text-[#002366] font-bold uppercase tracking-[0.3em] hover:shadow-2xl transition-all hover:bg-white border border-[#D4AF37]/50">
            Archive Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reader;
