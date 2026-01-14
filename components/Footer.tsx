
import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 font-black text-2xl tracking-tighter mb-6">
              <Logo className="w-12 h-12" />
              <span>GHOSTS NOTES</span>
            </div>
            <p className="max-w-xs opacity-60 leading-relaxed mb-8">
              The world's first privacy-first sticky notes application designed for the modern remote professional.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full glass hover:text-[#8B7EFF] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Product</h4>
            <ul className="space-y-4 opacity-60 text-sm font-medium">
              <li><a href="#features" className="hover:text-[#8B7EFF] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#8B7EFF] transition-colors">Pricing</a></li>
              <li><a href="#download" className="hover:text-[#8B7EFF] transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Support</h4>
            <ul className="space-y-4 opacity-60 text-sm font-medium">
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Report a Bug</a></li>
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Feature Request</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Legal</h4>
            <ul className="space-y-4 opacity-60 text-sm font-medium">
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#8B7EFF] transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 opacity-40 text-sm">
          <p>© 2026 Ghosts Notes. All rights reserved.</p>
          <div className="flex items-center gap-8">
             <button onClick={toggleTheme} className="hover:text-[#8B7EFF] transition-colors">
               Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
             </button>
             <select className="bg-transparent border-none focus:ring-0 cursor-pointer">
               <option>English</option>
               <option>Spanish</option>
               <option>Japanese</option>
             </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
