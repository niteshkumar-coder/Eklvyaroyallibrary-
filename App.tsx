
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './views/Home';
import Reader from './views/Reader';
import AIAgent from './views/AIAgent';
import { User, ThemeMode } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedUser = localStorage.getItem('eklavya_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedTheme = localStorage.getItem('eklavya_theme') as ThemeMode;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    localStorage.setItem('eklavya_user', JSON.stringify(userData));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('eklavya_theme', newTheme);
  };

  return (
    <HashRouter>
      <div className={`flex flex-col min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#000814]' : 'bg-[#F5F5DC]'}`}>
        <Header user={user} onAuthClick={() => setIsAuthModalOpen(true)} theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/catalog" element={<Home theme={theme} />} />
            <Route path="/story" element={<Reader theme={theme} />} />
            <Route path="/assistant" element={<AIAgent theme={theme} />} />
          </Routes>
        </main>

        <Footer theme={theme} />

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
          onAuthSuccess={handleAuthSuccess}
          theme={theme}
        />
      </div>
    </HashRouter>
  );
};

export default App;
