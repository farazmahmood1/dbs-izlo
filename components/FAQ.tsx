import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How does the invisibility feature work?", a: "Ghosts Notes uses low-level window rendering APIs to mark its windows as 'protected content', which standard screen-sharing platforms like Zoom and Teams are instructed to exclude from their captures." },
  { q: "Which platforms are supported?", a: "We support Zoom, Google Meet, Microsoft Teams, Discord, OBS, and virtually any application that uses standard OS screen recording libraries." },
  { q: "Is my data private and secure?", a: "Absolutely. In the Free tier, data never leaves your computer. In the Premium tier, notes are end-to-end encrypted before being synced to our secure servers." },
  { q: "What operating systems are supported?", a: "Ghosts Notes is currently available for Windows 10/11, macOS (Intel & Apple Silicon), and major Linux distributions (Ubuntu, Fedora)." },
  { q: "Can physical viewers see my notes?", a: "The 'ghost' technology only applies to digital screen capture. Anyone standing behind you looking at your monitor can still see your notes!" }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[#8B7EFF] font-semibold uppercase tracking-widest text-sm mb-4"
          >
            <span>/06</span>
            <div className="w-12 h-[1px] bg-[#8B7EFF]" />
            <span>FAQ</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter"
          >
            Questions? <br /> We've got answers.
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/10 dark:border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-[#8B7EFF] transition-colors"
              >
                <span className="text-xl font-bold">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 opacity-60 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;