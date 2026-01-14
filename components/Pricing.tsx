
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-[#8B7EFF] font-semibold uppercase tracking-widest text-sm mb-4"
          >
            <span>/05</span>
            <span>Pricing</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Simple, Honest Pricing
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl glass relative overflow-hidden flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-muted-foreground opacity-70">Perfect for individual privacy.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-black">$0</span>
              <span className="text-muted-foreground ml-2">/forever</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {["Unlimited local notes", "Screen-share invisibility", "Color customization", "Basic hotkeys", "Always-on-top mode"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm opacity-80">
                  <Check size={18} className="text-[#8B7EFF]" /> {f}
                </li>
              ))}
            </ul>
            <MagneticButton className="w-full">Download Free</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-[#8B7EFF] text-white relative overflow-hidden flex flex-col shadow-2xl shadow-[#8B7EFF]/20"
          >
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-widest flex items-center gap-1">
              <Star size={12} fill="white" /> Best Value
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-white/70">For professionals across all devices.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-black">$4.99</span>
              <span className="text-white/70 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {["Everything in Free", "Cloud sync across devices", "Encrypted backup", "Advanced note templates", "Priority support", "Custom themes"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check size={18} /> {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-white text-[#8B7EFF] font-black text-lg shadow-xl shadow-black/10 transition-transform"
            >
              Start Free Trial
            </motion.button>
            <p className="text-center mt-4 text-xs font-medium opacity-60">30-day money-back guarantee</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
