
import React, { useState } from 'react';
import { User, ThemeMode } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: User) => void;
  theme: ThemeMode;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthSuccess, theme }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ name: '', gmail: '', mobile: '' });
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess({
      name: formData.name || "Scholar",
      gmail: formData.gmail,
      mobile: formData.mobile
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#002366]/90 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-md p-8 border-t-8 border-[#D4AF37] shadow-2xl transition-colors duration-500 ${
        isDark ? 'bg-[#001122] text-white' : 'bg-[#F5F5DC] text-[#002366]'
      }`}>
        <button onClick={onClose} className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        
        <div className="text-center mb-8">
          <h2 className={`font-cinzel text-2xl font-bold tracking-widest ${isDark ? 'text-[#D4AF37]' : 'text-[#002366]'}`}>
            {isLogin ? 'RE-ENTER SANCTUARY' : 'INITIATE SOVEREIGNTY'}
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4 mb-2"></div>
          <p className="font-lora italic text-xs opacity-70">
            {isLogin ? 'Greetings once more, Elite Member.' : 'Establish your scholarly credentials.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-1">
              <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>
                Legal Identity
              </label>
              <input 
                required 
                type="text" 
                placeholder="Your Full Name" 
                className={`w-full p-3 font-lora italic outline-none border transition-colors ${
                  isDark ? 'bg-black/40 border-[#D4AF37]/20 focus:border-[#D4AF37] text-white' : 'bg-white border-[#D4AF37]/20 focus:border-[#D4AF37]'
                }`} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>
          )}
          <div className="space-y-1">
            <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>
              Gmail Correspondence
            </label>
            <input 
              required 
              type="email" 
              placeholder="example@gmail.com" 
              className={`w-full p-3 font-lora italic outline-none border transition-colors ${
                isDark ? 'bg-black/40 border-[#D4AF37]/20 focus:border-[#D4AF37] text-white' : 'bg-white border-[#D4AF37]/20 focus:border-[#D4AF37]'
              }`} 
              onChange={(e) => setFormData({...formData, gmail: e.target.value})} 
            />
          </div>
          <div className="space-y-1">
            <label className={`block font-cinzel text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>
              Mobile Line
            </label>
            <input 
              required 
              type="tel" 
              placeholder="Your Mobile Number" 
              className={`w-full p-3 font-lora italic outline-none border transition-colors ${
                isDark ? 'bg-black/40 border-[#D4AF37]/20 focus:border-[#D4AF37] text-white' : 'bg-white border-[#D4AF37]/20 focus:border-[#D4AF37]'
              }`} 
              onChange={(e) => setFormData({...formData, mobile: e.target.value})} 
            />
          </div>
          <button type="submit" className="w-full py-4 bg-[#002366] text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#800000] transition-all shadow-lg mt-4 border border-[#D4AF37]/30">
            {isLogin ? 'Login Now' : 'Create Sovereignty'}
          </button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-white/10">
          <button onClick={() => setIsLogin(!isLogin)} className="text-[10px] font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
            {isLogin ? 'Need to enroll? Initiate Signup' : 'Already an Elite Member? Re-enter Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
