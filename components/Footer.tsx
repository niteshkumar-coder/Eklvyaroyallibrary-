
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, BRAND } from '../constants';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <footer className={`py-20 px-6 border-t-4 border-[#D4AF37] transition-colors duration-500 ${isDark ? 'bg-[#000d1a] text-white/80' : 'bg-[#002366] text-white'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h3 className="font-cinzel text-3xl font-bold tracking-widest text-[#D4AF37]">EKLAVYA ROYAL</h3>
          <p className="font-lora opacity-60 max-w-sm leading-relaxed italic">
            "{BRAND.TAGLINE}" 
            <br />
            A premium digital ecosystem for the modern scholar.
          </p>
          <div className="pt-4 space-y-4">
            <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Our Sanctuaries in Patna</p>
            <div>
              <p className="text-xs font-cinzel text-[#D4AF37]/60 mb-1">KIDWAIPURI SANCTUARY</p>
              <p className="text-sm font-lora opacity-80">{CONTACT_INFO.CENTRE_1.ADDRESS}</p>
            </div>
            <div>
              <p className="text-xs font-cinzel text-[#D4AF37]/60 mb-1">ANANDPURI SANCTUARY</p>
              <p className="text-sm font-lora opacity-80">{CONTACT_INFO.CENTRE_2.ADDRESS}</p>
            </div>
            <p className="text-lg font-cinzel text-[#D4AF37] pt-2">{CONTACT_INFO.PHONE}</p>
          </div>
        </div>
        <div>
          <h4 className="font-cinzel font-bold mb-6 text-sm tracking-widest text-[#D4AF37]">OPERATING HOURS</h4>
          <ul className="space-y-2 text-[10px] font-semibold uppercase tracking-widest opacity-50">
            {Object.entries(CONTACT_INFO.FULL_HOURS).map(([day, hours]) => (
              <li key={day} className="flex justify-between border-b border-white/5 pb-1">
                <span>{day}</span>
                <span className="opacity-80">{hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-cinzel font-bold mb-6 text-sm tracking-widest text-[#D4AF37]">THE CHAMBERS</h4>
          <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
            <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Grand Hall</Link></li>
            <li><Link to="/catalog" className="hover:text-[#D4AF37] transition-colors">The Archive</Link></li>
            <li><Link to="/assistant" className="hover:text-[#D4AF37] transition-colors">Royal Sage Oracle</Link></li>
            <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Scholarly Circles</Link></li>
            <li><Link to="/story" className="hover:text-[#D4AF37] transition-colors">Hall of Mastery</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40">
          &copy; 2026 Eklavya Royal Library. All Sovereignty Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
