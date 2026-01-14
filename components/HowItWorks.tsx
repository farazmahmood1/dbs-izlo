import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Edit3, ScreenShare, Eye, EyeOff } from 'lucide-react';

const steps = [
  { icon: <Download />, title: "Install & Launch", desc: "Download and install in seconds. It lives in your tray." },
  { icon: <Edit3 />, title: "Create Your Notes", desc: "Write private reminders, prompts, or confidential ideas." },
  { icon: <ScreenShare />, title: "Share Your Screen", desc: "Stay fully focused while your notes remain invisible to viewers." }
];

const HowItWorks: React.FC = () => {
  const [viewMode, setViewMode] = useState<'me' | 'viewers'>('me');

  return (
    <section id="how-it-works" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-[#8B7EFF] font-semibold uppercase tracking-widest text-sm mb-4"
          >
            <span>/03</span>
            <span>How It Works</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            Now You See It, <br /> Now They Don't
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#8B7EFF]/10 border border-[#8B7EFF]/20 flex items-center justify-center text-[#8B7EFF] group-hover:bg-[#8B7EFF] group-hover:text-white transition-all">
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-4">
                    <span className="text-[#8B7EFF] text-sm font-black border border-[#8B7EFF] rounded-full w-6 h-6 flex items-center justify-center">
                      {i + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-[#8B7EFF]/20 blur-[80px] rounded-full group-hover:opacity-100 opacity-60 transition-opacity" />
            <div className="relative bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md rounded-3xl p-4 md:p-8 aspect-video flex flex-col items-center justify-center shadow-2xl">
               <div className="flex gap-2 mb-8 p-1 rounded-full bg-black/10 dark:bg-black/20 backdrop-blur-md">
                 <button 
                   onClick={() => setViewMode('me')}
                   className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${viewMode === 'me' ? 'bg-[#8B7EFF] text-white' : 'text-black/60 dark:text-white/60 hover:text-[#8B7EFF]'}`}
                 >
                   <Eye size={16} /> Your View
                 </button>
                 <button 
                   onClick={() => setViewMode('viewers')}
                   className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${viewMode === 'viewers' ? 'bg-[#8B7EFF] text-white' : 'text-black/60 dark:text-white/60 hover:text-[#8B7EFF]'}`}
                 >
                   <EyeOff size={16} /> Viewers' View
                 </button>
               </div>

               <div className="w-full h-full border border-black/10 dark:border-white/10 rounded-xl relative overflow-hidden bg-white/40 dark:bg-white/5 p-4 flex flex-col gap-4 shadow-inner">
                  {/* Mock Desktop Content */}
                  <div className="flex items-center gap-2 border-b border-black/10 dark:border-white/5 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <div className="w-32 h-2 bg-black/10 dark:bg-white/10 rounded-full ml-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-black/5 dark:bg-white/5 rounded-lg animate-pulse" />
                    <div className="h-24 bg-black/5 dark:bg-white/5 rounded-lg animate-pulse" />
                  </div>
                  
                  {/* Sticky Notes */}
                  <AnimatePresence>
                    {viewMode === 'me' && (
                      <div className="absolute inset-0 pointer-events-none flex flex-wrap gap-4 p-12 items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="bg-yellow-200 text-black p-4 rounded-lg shadow-xl w-40 transform -rotate-3 border-l-4 border-yellow-400"
                        >
                          <p className="text-[10px] font-bold uppercase mb-1 opacity-50">Private</p>
                          <p className="text-xs font-medium">Don't forget to mention Q4 projections.</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, x: 20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.8, x: 20 }}
                          transition={{ delay: 0.1 }}
                          className="bg-purple-200 text-black p-4 rounded-lg shadow-xl w-40 transform rotate-6 border-l-4 border-purple-400"
                        >
                          <p className="text-[10px] font-bold uppercase mb-1 opacity-50">Speaker Notes</p>
                          <p className="text-xs font-medium">Pause for questions after this slide.</p>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                  
                  {viewMode === 'viewers' && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-[#8B7EFF]/5 pointer-events-none"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <ScreenShare size={48} className="opacity-20 text-black dark:text-white" />
                        <p className="text-sm font-medium opacity-20 uppercase tracking-widest text-black dark:text-white">Shared View</p>
                      </div>
                    </motion.div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;