import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Apple, Terminal } from 'lucide-react';
import MagneticButton from './MagneticButton';

const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-32 px-6 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[#8B7EFF]/5 dark:bg-[#8B7EFF]/10 -z-10" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B7EFF]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
        >
          Ready to Keep Your <br /> Notes Private?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl opacity-60 mb-12 max-w-2xl mx-auto"
        >
          Join 10,000+ professionals protecting their privacy. Download Ghosts Notes today and experience true peace of mind during your next presentation.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          <MagneticButton primary className="h-16 px-10">
            <Monitor size={24} /> Download for Windows
          </MagneticButton>
          <MagneticButton className="h-16 px-10">
            <Apple size={24} /> Download for macOS
          </MagneticButton>
          <MagneticButton className="h-16 px-10">
            <Terminal size={24} /> Download for Linux
          </MagneticButton>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-2 opacity-40 text-sm font-medium"
        >
          <span>v1.0.2 • Updated Jan 2026</span>
          <span>Safe & Verified • No Ads • Open Source (Soon)</span>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;