import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: "Business Professionals",
    desc: "Keep speaker notes and reminders private during high-stakes presentations.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Remote Educators",
    desc: "Maintain lesson prompts invisible to students while hosting live sessions.",
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Content Creators",
    desc: "Reference scripts during screen recordings without cluttering the final video.",
    img: "https://images.unsplash.com/photo-1492619334760-466d93425026?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Developers & Designers",
    desc: "Keep task lists and API keys private during live coding or pair programming.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  }
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[#8B7EFF] font-semibold uppercase tracking-widest text-sm mb-4"
            >
              <span>/04</span>
              <div className="w-12 h-[1px] bg-[#8B7EFF]" />
              <span>Use Cases</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              For Those Who Value <br /> Digital Privacy
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/50 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#8B7EFF] transition-colors">{item.title}</h3>
                <p className="text-white/80 group-hover:text-white transition-opacity">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;