
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero isDarkMode={isDarkMode} />
        <Features />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>

      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#8B7EFF] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#6D9886] opacity-[0.05] blur-[100px]" />
      </div>
    </div>
  );
};

export default App;
