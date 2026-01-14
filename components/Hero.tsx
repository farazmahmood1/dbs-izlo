
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Logo from './Logo';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    "Invisible During Screen Sharing",
    "Lightweight Desktop App",
    "Secure & Private",
    "Cross-Platform Support"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#120D3D] via-[#0A0E27] to-[#0A0E27]" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: Math.random() }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${!isDarkMode ? 'opacity-100' : 'opacity-0'} bg-gradient-to-bl from-[#8B7EFF]/20 via-[#6D9886]/10 to-[#F6F6F6]`} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[#8B7EFF] font-semibold uppercase tracking-widest text-sm"
          >
            <span>/01</span>
            <div className="w-12 h-[1px] bg-[#8B7EFF]" />
            <span>Privacy in Every Note</span>
          </motion.div>

          <div className="relative">
            <motion.h1 
              style={{ y: y1, scale }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-[14vw] sm:text-[12vw] font-black leading-[0.85] tracking-tighter drop-shadow-2xl"
            >
              GHOSTS <br /> NOTES
            </motion.h1>
            
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 md:left-20 w-48 h-48 sm:w-96 sm:h-96 pointer-events-none select-none flex items-center justify-center z-20"
            >
              <div className="absolute w-full h-full bg-[#8B7EFF] rounded-full blur-[120px] opacity-30" />
              <Logo className="w-full h-full" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl mt-8 max-w-xl opacity-80"
          >
            Your private desktop companion. Secure reminders that vanish when you share your screen.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-10">
            <MagneticButton primary onClick={() => {
                const el = document.getElementById('download');
                el?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Download Free <ArrowRight size={20} />
            </MagneticButton>
            <MagneticButton onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
            }}>
              See How It Works
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 border-t border-white/10 pt-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                className="group cursor-pointer flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full border border-[#8B7EFF] flex items-center justify-center text-[#8B7EFF] group-hover:bg-[#8B7EFF] group-hover:text-white transition-all">
                  <Check size={14} />
                </div>
                <span className="text-sm font-medium group-hover:text-[#8B7EFF] transition-colors">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          style={{ opacity: opacityText }}
          className="hidden xl:block absolute right-0 bottom-40 max-w-sm"
        >
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'glass' : 'glass-light shadow-xl'} border-l-4 border-l-[#8B7EFF]`}>
            <p className="text-lg leading-relaxed mb-6">
              "Keep your private notes, reminders, and ideas completely hidden when sharing your screen. Perfect for meetings, presentations, and content creation."
            </p>
            <div className="flex gap-2">
              {['Windows', 'macOS', 'Linux'].map(os => (
                <span key={os} className="px-3 py-1 rounded-full text-xs font-bold border border-[#8B7EFF]/30 text-[#8B7EFF]">
                  {os}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
