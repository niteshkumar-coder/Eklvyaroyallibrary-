
import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface LegendModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

const LegendModal: React.FC<LegendModalProps> = ({ isOpen, onClose, theme }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-6 bg-[#001133]/95 backdrop-blur-xl animate-fade-in">
      <div className={`relative w-full max-w-lg p-10 border-t-8 border-[#D4AF37] shadow-[0_0_100px_rgba(212,175,55,0.2)] transition-all duration-500 overflow-hidden ${
        isDark ? 'bg-[#000814] text-white' : 'bg-[#F5F5DC] text-[#002366]'
      }`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#800000]/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <button onClick={onClose} className="absolute top-6 right-6 opacity-40 hover:opacity-100 transition-opacity z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 className="font-cinzel text-2xl font-bold mb-4 tracking-widest uppercase">Legacy Initiated</h2>
            <p className="font-lora italic opacity-70">"The Royal Sage will summon you via WhatsApp shortly."</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 border border-[#D4AF37]/40 mb-4 bg-[#D4AF37]/5">
                <span className="font-cinzel text-[#D4AF37] tracking-[0.5em] text-[10px] uppercase font-bold">The Hall of Heritage</span>
              </div>
              <h2 className="font-cinzel text-3xl font-bold tracking-widest uppercase mb-2">Unlock The Legend</h2>
              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-4"></div>
              <p className="font-lora italic text-sm opacity-60">
                Join the exclusive lineage of self-taught sovereigns. 
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-2">
                <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>
                  Full Scholarly Name
                </label>
                <input 
                  required 
                  type="text" 
                  placeholder="Your Noble Name" 
                  className={`w-full p-4 font-lora italic outline-none border-b transition-all ${
                    isDark ? 'bg-transparent border-[#D4AF37]/20 focus:border-[#D4AF37] text-white' : 'bg-transparent border-[#002366]/20 focus:border-[#002366] text-[#002366]'
                  }`} 
                />
              </div>

              <div className="space-y-2">
                <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>
                  WhatsApp Mastery Link
                </label>
                <div className="relative">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 font-lora opacity-40">+91</span>
                  <input 
                    required 
                    type="tel" 
                    placeholder="Enter WhatsApp Number" 
                    className={`w-full p-4 pl-10 font-lora italic outline-none border-b transition-all ${
                      isDark ? 'bg-transparent border-[#D4AF37]/20 focus:border-[#D4AF37] text-white' : 'bg-transparent border-[#002366]/20 focus:border-[#002366] text-[#002366]'
                    }`} 
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-5 bg-[#002366] text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#800000] transition-all shadow-xl mt-6 border border-[#D4AF37]/40 group overflow-hidden relative">
                <span className="relative z-10">Request Admission</span>
                <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              
              <p className="text-center text-[9px] uppercase tracking-widest opacity-40 font-bold">
                * Your credentials will be reviewed by the Royal Custodian.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LegendModal;
