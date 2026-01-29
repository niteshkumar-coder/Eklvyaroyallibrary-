
import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { SANCTUARY_CHAMBERS, STUDENT_REVIEWS, RATING_STATS, CONTACT_INFO } from '../constants';
import LegendModal from '../components/LegendModal';

interface HomeProps {
  theme?: ThemeMode;
}

const Home: React.FC<HomeProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLegendModalOpen, setIsLegendModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const scrollToPetition = () => {
    const element = document.getElementById('petition');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#002366]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000" 
            alt="Eklavya Royal Library Elite Sanctuary" 
            className={`w-full h-full object-cover scale-105 animate-subtle-zoom transition-all duration-1000 ${isDark ? 'brightness-50 grayscale-[0.2]' : ''}`}
          />
          <div className={`absolute inset-0 bg-[#002366]/40 backdrop-brightness-75 transition-colors duration-1000 ${isDark ? 'bg-black/60' : ''}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-b from-[#002366]/60 via-transparent to-transparent`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-transparent to-transparent transition-colors duration-1000 ${isDark ? 'from-[#000814]' : 'from-[#F5F5DC]'}`}></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mt-[-5vh]">
          <div className="mb-10 flex flex-col items-center">
            <span className="font-cinzel text-[#D4AF37] tracking-[0.8em] text-[10px] sm:text-xs font-bold uppercase mb-4 animate-pulse">Sovereignty of Mind</span>
            <div className="h-[1px] w-48 bg-[#D4AF37]/40"></div>
          </div>
          
          <h2 className="font-cinzel text-6xl md:text-8xl font-bold text-white mb-6 leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            EKLAVYA ROYAL <br/>
            <span className="text-[#D4AF37] italic font-playfair font-normal">LIBRARY</span>
          </h2>
          
          <h3 className="text-white font-lora text-xl md:text-3xl mb-14 tracking-widest font-light italic">
            "Dedicated to <span className="text-[#D4AF37] font-bold">Elite knowledge</span>"
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={scrollToPetition}
              className="group relative w-full sm:w-auto px-14 py-6 bg-[#D4AF37] text-[#002366] font-bold uppercase tracking-[0.3em] transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden text-center"
            >
              <span className="relative z-10">Request Admission</span>
            </button>
            <button 
              onClick={() => setIsLegendModalOpen(true)}
              className="w-full sm:w-auto px-14 py-6 border-2 border-white/40 text-white font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-[#002366] transition-all duration-700 backdrop-blur-md"
            >
              The Legend
            </button>
          </div>
        </div>
      </section>

      {/* Hall of Mastery Pillars - Small Technical HUD */}
      <section className={`py-16 transition-colors duration-1000 relative overflow-hidden ${isDark ? 'bg-[#000d1a]' : 'bg-[#001133]'}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#D4AF37]"></div>
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-[#D4AF37]"></div>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#D4AF37]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: '01', title: 'DEDICATION', mod: 'CORE', status: 'Syncing Intent', cap: '98.4%', desc: 'The self-taught path begins with unwavering focus in our hallowed halls.' },
              { id: '02', title: 'PRECISION', mod: 'LOGIC', status: 'Calibrating', cap: '0.002s', desc: 'Every study session is a calculated step towards absolute scholarly mastery.' },
              { id: '03', title: 'SOVEREIGNTY', mod: 'AUTH', status: 'Absolute', cap: 'KEY_ON', desc: 'Owning your journey within a digital and physical sanctuary of respect.' },
            ].map((pill, idx) => (
              <div key={pill.id} className="relative group p-6 bg-white/5 backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden">
                <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl group-hover:opacity-40 transition-all ${idx === 1 ? 'bg-[#800000]/20' : 'bg-[#D4AF37]/10'}`}></div>
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[#D4AF37]/60 tracking-[0.3em]">MOD_{pill.id} // {pill.mod}</span>
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] animate-pulse"></div>
                  </div>
                  <div className="text-4xl font-cinzel text-[#D4AF37] font-bold opacity-30 group-hover:opacity-100 transition-opacity">{pill.id}</div>
                  <div>
                    <h4 className="font-cinzel font-bold text-white tracking-[0.2em] text-base mb-2">{pill.title}</h4>
                    <div className="w-8 h-[1px] bg-[#D4AF37] mb-3"></div>
                    <p className="text-[11px] font-lora italic text-white/70 leading-relaxed">{pill.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[8px] font-mono text-white/40 uppercase">{pill.status}</span>
                    <span className="text-[8px] font-mono text-[#D4AF37]">{pill.cap}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMBERS GALLERY */}
      <section className={`py-24 px-6 transition-colors duration-1000 ${isDark ? 'bg-[#000814]' : 'bg-[#F5F5DC]'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className={`font-bold uppercase tracking-[0.5em] text-[10px] mb-4 transition-colors ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Elite Environment</p>
            <h2 className={`font-cinzel text-5xl font-bold mb-6 tracking-widest uppercase transition-colors ${isDark ? 'text-white' : 'text-[#002366]'}`}>The Royal Chambers</h2>
            <div className="w-32 h-[1px] bg-[#D4AF37] mx-auto mb-10"></div>
            <p className={`font-lora text-xl max-w-3xl mx-auto italic leading-relaxed transition-colors ${isDark ? 'text-white/60' : 'text-[#002366]/70'}`}>
              Explore our architectural masterpieces, designed specifically for the elite learner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SANCTUARY_CHAMBERS.map((chamber, idx) => (
              <div key={idx} className={`group relative flex flex-col border overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                isDark ? 'bg-white/5 border-[#D4AF37]/20 hover:border-[#D4AF37]/50' : 'bg-white border-[#D4AF37]/20'
              }`}>
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img 
                    src={chamber.img} 
                    alt={chamber.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 group-hover:bg-transparent transition-colors duration-700 ${isDark ? 'bg-black/40' : 'bg-[#002366]/20'}`}></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className={`font-cinzel text-xl font-bold mb-4 tracking-[0.2em] group-hover:text-[#D4AF37] transition-colors ${isDark ? 'text-white' : 'text-[#002366]'}`}>{chamber.title}</h3>
                  <p className={`font-lora italic text-sm leading-relaxed mb-6 transition-colors ${isDark ? 'text-white/60' : 'text-[#002366]/70'}`}>
                    "{chamber.desc}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOICES OF MASTERY */}
      <section className={`py-12 overflow-hidden border-t transition-colors duration-1000 ${isDark ? 'bg-[#000a1f] border-white/5' : 'bg-[#F5F5DC] border-[#D4AF37]/10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="lg:w-1/4 text-center lg:text-left">
              <p className={`font-bold uppercase tracking-[0.3em] text-[9px] mb-2 transition-colors ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Mastery Metrics</p>
              <h2 className={`font-cinzel text-2xl font-bold mb-4 tracking-wider transition-colors ${isDark ? 'text-white' : 'text-[#002366]'}`}>VOICES OF MASTERY</h2>
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="flex items-end space-x-1">
                  <span className={`font-cinzel text-6xl font-bold leading-none transition-colors ${isDark ? 'text-[#D4AF37]' : 'text-[#002366]'}`}>{RATING_STATS.SCORE}</span>
                  <span className="font-cinzel text-lg text-[#D4AF37] mb-1 font-bold">/ 5.0</span>
                </div>
                <div className="flex items-center space-x-1 text-lg text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => <span key={i}>✦</span>)}
                </div>
              </div>
            </div>
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {STUDENT_REVIEWS.map((review) => (
                <div key={review.id} className={`p-5 border-l-2 shadow-md hover:shadow-lg transition-all group ${
                  isDark ? 'bg-white/5 border-[#D4AF37] text-white/80' : 'bg-white border-[#800000] text-[#002366]/80'
                }`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#002366] text-[#D4AF37] flex items-center justify-center font-cinzel font-bold text-[10px] border border-[#D4AF37]/50">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className={`font-cinzel font-bold tracking-widest text-[10px] transition-colors ${isDark ? 'text-white' : 'text-[#002366]'}`}>{review.name}</h4>
                      <p className="text-[8px] text-[#D4AF37] font-bold uppercase tracking-widest">{review.status}</p>
                    </div>
                  </div>
                  <p className="font-lora italic text-[11px] leading-relaxed">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PETITION FORM SECTION */}
      <section id="petition" className="py-16 md:py-24 bg-[#800000] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <p className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[9px] mb-3">Admissions Sanctuary</p>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-4 tracking-widest uppercase">Petition for Elite Membership</h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-white/80 font-lora italic text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-4">
              Present your details for review by the Royal Sage.
            </p>
          </div>
          <div className={`p-8 md:p-10 shadow-2xl border-t-4 border-[#D4AF37] transition-colors duration-500 ${isDark ? 'bg-[#001122]' : 'bg-white'}`}>
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <h3 className={`font-cinzel text-xl font-bold mb-3 tracking-widest uppercase ${isDark ? 'text-[#D4AF37]' : 'text-[#002366]'}`}>Petition Received</h3>
                <p className={`font-lora italic text-sm ${isDark ? 'text-white/60' : 'text-[#002366]/70'}`}>"Your credentials are being reviewed by the archives."</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className={`block font-cinzel text-[9px] font-bold uppercase tracking-[0.1em] ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Legal Identity</label>
                    <input required type="text" placeholder="Your name" className={`w-full border-b border-[#D4AF37]/30 py-2 outline-none font-lora italic focus:border-[#D4AF37] transition-colors ${isDark ? 'bg-transparent text-white' : 'bg-white'}`} />
                  </div>
                  <div className="space-y-1">
                    <label className={`block font-cinzel text-[9px] font-bold uppercase tracking-[0.1em] ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Mobile Line</label>
                    <input required type="tel" placeholder="Mobile number" className={`w-full border-b border-[#D4AF37]/30 py-2 outline-none font-lora italic focus:border-[#D4AF37] transition-colors ${isDark ? 'bg-transparent text-white' : 'bg-white'}`} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className={`block font-cinzel text-[9px] font-bold uppercase tracking-[0.1em] ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Select Sanctuary</label>
                    <select required className={`w-full border-b border-[#D4AF37]/30 py-2 outline-none font-lora italic focus:border-[#D4AF37] transition-colors appearance-none ${isDark ? 'bg-transparent text-white' : 'bg-white'}`}>
                      <option value="" disabled selected>Choose a location</option>
                      <option value="Kidwaipuri">{CONTACT_INFO.CENTRE_1.NAME}</option>
                      <option value="Anandpuri">{CONTACT_INFO.CENTRE_2.NAME}</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className={`block font-cinzel text-[9px] font-bold uppercase tracking-[0.1em] ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Select Mastery Shift</label>
                    <select required className={`w-full border-b border-[#D4AF37]/30 py-2 outline-none font-lora italic focus:border-[#D4AF37] transition-colors appearance-none ${isDark ? 'bg-transparent text-white' : 'bg-white'}`}>
                      <option value="" disabled selected>Choose a shift</option>
                      <option value="Morning">Morning (7 AM - 2 PM)</option>
                      <option value="Evening">Evening (2 PM - 10 PM)</option>
                      <option value="Full Day">Full Day Mastery (7 AM - 10 PM)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className={`block font-cinzel text-[9px] font-bold uppercase tracking-[0.1em] ${isDark ? 'text-[#D4AF37]' : 'text-[#800000]'}`}>Gmail Correspondence</label>
                  <input required type="email" placeholder="example@gmail.com" className={`w-full border-b border-[#D4AF37]/30 py-2 outline-none font-lora italic focus:border-[#D4AF37] transition-colors ${isDark ? 'bg-transparent text-white' : 'bg-white'}`} />
                </div>
                <button type="submit" className="w-full py-4 bg-[#002366] text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-all shadow-lg border border-[#D4AF37]/20">Submit Petition</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAPS SECTION */}
      <section className={`py-24 relative overflow-hidden border-y-8 border-[#D4AF37] transition-colors duration-1000 ${isDark ? 'bg-[#00040d]' : 'bg-[#001a4d]'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 border border-[#D4AF37]/40 bg-[#D4AF37]/5 mb-4">
              <span className="font-cinzel text-[#D4AF37] tracking-[0.6em] uppercase text-[10px] font-bold">Live Node Cartography</span>
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl text-white font-bold tracking-[0.2em] uppercase drop-shadow-lg">
              Navigate <span className="text-[#D4AF37]">Sanctuaries</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {[CONTACT_INFO.CENTRE_1, CONTACT_INFO.CENTRE_2].map((centre, i) => (
              <div key={i} className="relative group">
                <div className={`absolute -top-2 ${i === 0 ? '-left-2' : '-right-2'} w-8 h-8 border-t-2 ${i === 0 ? 'border-l-2' : 'border-r-2'} border-[#D4AF37] z-20`}></div>
                <div className={`absolute -bottom-2 ${i === 0 ? '-right-2' : '-left-2'} w-8 h-8 border-b-2 ${i === 0 ? 'border-r-2' : 'border-l-2'} border-[#D4AF37] z-20`}></div>
                <div className="bg-[#002366]/40 backdrop-blur-xl border border-[#D4AF37]/30 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <div className="relative h-[400px] w-full bg-black overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none z-10">
                      <div className={`w-full h-[2px] bg-[#D4AF37]/50 shadow-[0_0_15px_#D4AF37] animate-scan-line ${i === 1 ? 'animate-scan-line-delayed' : ''}`}></div>
                    </div>
                    <iframe 
                      src={centre.MAP_LINK}
                      width="100%" height="100%" 
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }} 
                      allowFullScreen={true} loading="lazy" 
                      className="opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                    ></iframe>
                  </div>
                  <div className="p-8 bg-black/40">
                    <h5 className="font-cinzel text-xl text-white font-bold tracking-widest uppercase">{centre.NAME}</h5>
                    <p className="text-xs font-lora italic text-white/60 leading-relaxed border-t border-white/10 pt-4 mt-4">{centre.ADDRESS}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW LEGEND MODAL */}
      <LegendModal 
        isOpen={isLegendModalOpen} 
        onClose={() => setIsLegendModalOpen(false)} 
        theme={theme} 
      />
    </div>
  );
};

export default Home;
