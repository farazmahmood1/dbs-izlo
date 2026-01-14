import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, Zap, Palette, Layers, Keyboard, Cloud } from 'lucide-react';

const featureList = [
  {
    icon: <EyeOff className="text-[#8B7EFF]" size={32} />,
    title: "Invisible Screen Sharing",
    description: "Notes automatically vanish from screen recordings and shared views on Zoom, Teams, and Meet."
  },
  {
    icon: <Zap className="text-[#8B7EFF]" size={32} />,
    title: "Lightweight & Fast",
    description: "Zero bloat. Boots instantly and stays out of your way until you need it."
  },
  {
    icon: <Palette className="text-[#8B7EFF]" size={32} />,
    title: "Customizable Notes",
    description: "Choose colors, fonts, and opacity to match your style or project themes."
  },
  {
    icon: <Layers className="text-[#8B7EFF]" size={32} />,
    title: "Always on Top",
    description: "Pin important prompts above your active windows without obstructing your focus."
  },
  {
    icon: <Keyboard className="text-[#8B7EFF]" size={32} />,
    title: "Quick Capture",
    description: "Global hotkeys let you jot down thoughts without ever leaving your current app."
  },
  {
    icon: <Cloud className="text-[#8B7EFF]" size={32} />,
    title: "Cloud Sync (Premium)",
    description: "Secure, end-to-end encrypted backup and sync across all your devices."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[#8B7EFF] font-semibold uppercase tracking-widest text-sm mb-4"
          >
            <span>/02</span>
            <div className="w-12 h-[1px] bg-[#8B7EFF]" />
            <span>Features</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Features That Keep <br /> You Private
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-[#8B7EFF]/30 transition-all duration-300 group relative overflow-hidden bg-white dark:bg-black/20 shadow-sm dark:shadow-none backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {f.icon}
              </div>
              <div className="mb-6 relative z-10">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;