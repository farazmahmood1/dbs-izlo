
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center"
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full ${isDarkMode ? 'glass' : 'glass-light shadow-sm'}`}>
        <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#8B7EFF]/20 blur-lg rounded-full" />
            // <Logo className="w-10 h-10" />
            // <img src="" />
          </div>
          <span className="hidden xs:block">GHOSTS NOTES</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-[#8B7EFF] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#8B7EFF] transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-[#8B7EFF] transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-[#8B7EFF] transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="#download" 
            className="hidden sm:block px-5 py-2 rounded-full bg-[#8B7EFF] text-white text-sm font-semibold hover:bg-[#7a6fff] transition-colors"
          >
            Download Free
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
