
import React, { useState, useRef, useEffect } from 'react';
import { askLibrarian } from '../geminiService';
import { ThemeMode } from '../types';

interface AIAgentProps {
  theme?: ThemeMode;
}

const AIAgent: React.FC<AIAgentProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  const [messages, setMessages] = useState<{role: 'user' | 'sage', text: string}[]>([
    { role: 'sage', text: 'Greetings, Noble Learner. I am the Royal Sage of Eklavya. What wisdom do you seek within these hallowed digital halls today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    const response = await askLibrarian(userMsg);
    setMessages(prev => [...prev, { role: 'sage', text: response || 'I am speechless in the face of such a profound query.' }]);
    setIsLoading(false);
  };

  return (
    <div className={`max-w-5xl mx-auto px-6 py-12 flex flex-col h-[85vh] transition-colors duration-1000`}>
      <div className="text-center mb-10">
        <p className={`font-bold uppercase tracking-[0.4em] text-[10px] mb-2 transition-colors ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Oracle of Excellence</p>
        <h2 className={`font-cinzel text-3xl font-bold transition-colors ${isDark ? 'text-white' : 'text-[#002366]'}`}>THE ROYAL SAGE</h2>
        <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
      </div>

      <div 
        ref={scrollRef}
        className={`flex-1 border shadow-inner p-8 overflow-y-auto space-y-8 mb-6 transition-colors duration-500 ${
          isDark ? 'bg-black/40 border-[#D4AF37]/20 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]' : 'bg-white border-[#D4AF37]/20'
        }`}
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
            <div className={`max-w-[80%] p-6 transition-all duration-500 ${
              m.role === 'user' 
                ? `${isDark ? 'bg-[#002366]/80 text-[#D4AF37]' : 'bg-[#002366] text-white'} rounded-l-2xl rounded-tr-2xl shadow-lg border border-[#D4AF37]/10` 
                : `${isDark ? 'bg-[#D4AF37]/10 text-white border-l-4 border-[#D4AF37]' : 'bg-[#F5F5DC] text-[#002366] border-l-4 border-[#D4AF37]'} rounded-r-2xl rounded-tl-2xl`
            }`}>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${m.role === 'user' ? (isDark ? 'text-[#D4AF37]' : 'text-[#D4AF37]') : (isDark ? 'text-[#D4AF37]' : 'text-[#800000]')}`}>
                {m.role === 'user' ? 'The Learner' : 'Royal Sage'}
              </p>
              <p className="font-lora leading-relaxed italic whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className={`p-6 border-l-4 border-[#D4AF37] animate-pulse transition-colors ${isDark ? 'bg-white/5' : 'bg-[#F5F5DC]'}`}>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 transition-colors ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Consulting Scrolls...</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative group">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Noble Learner, what is your inquiry?"
          className={`w-full p-6 font-lora text-lg outline-none transition-all duration-500 border pr-20 ${
            isDark ? 'bg-black border-[#D4AF37]/40 text-white focus:border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'bg-white border-[#D4AF37] focus:ring-1 focus:ring-[#002366]'
          }`}
        />
        <button 
          onClick={handleSend}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 transition-colors duration-500 ${
            isDark ? 'bg-[#D4AF37] text-[#002366] hover:bg-white' : 'bg-[#002366] text-[#D4AF37] hover:bg-[#800000]'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  );
};

export default AIAgent;
