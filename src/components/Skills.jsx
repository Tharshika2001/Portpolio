import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu, Terminal, Layout } from 'lucide-react';

const skills = [
  {
    id: 1,
    name: 'React.js & Frontend Architecture',
    width: '85%',
    icon: Globe,
    category: 'FRONTEND',
  },
  {
    id: 2,
    name: 'JavaScript & TypeScript',
    width: '80%',
    icon: Code2,
    category: 'LANGUAGES',
  },
  {
    id: 3,
    name: 'Node.js & Express REST APIs',
    width: '78%',
    icon: Terminal,
    category: 'BACKEND',
  },
  {
    id: 4,
    name: 'Relational Databases (SQL Server, MySQL)',
    width: '82%',
    icon: Database,
    category: 'DATA LAYER',
  },
  {
    id: 5,
    name: 'Python & Core Algorithms',
    width: '75%',
    icon: Cpu,
    category: 'CORE CS',
  },
  {
    id: 6,
    name: 'UI/UX Prototyping & Figma',
    width: '70%',
    icon: Layout,
    category: 'DESIGN',
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-4"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / TECHNICAL PROFICIENCY
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              TECHNICAL
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              CAPABILITIES.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Core tools, frameworks, and architecture patterns leveraged to construct resilient, production-ready software systems.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative rounded-xl border border-[#8C6D4F]/40 bg-[#0E0C0A] p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.85)] group hover:border-[#D4AF37] transition-all duration-500 overflow-hidden"
              >
                {/* Top Gold Flare Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Minimal Corner Brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 bg-[#16120E] rounded-lg border border-[#8C6D4F]/40 text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                      <SkillIcon size={20} />
                    </div>
                    <div>
                      <span className="text-[9.5px] font-mono tracking-[0.22em] uppercase text-[#8C6D4F] block">
                        {skill.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-medium tracking-wide text-[#EAD8C7] group-hover:text-white transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-[#D4AF37]">
                    {skill.width}
                  </span>
                </div>

                {/* Meter Container */}
                <div className="relative w-full h-1.5 bg-[#16120E] rounded-full overflow-hidden border border-[#8C6D4F]/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#8C6D4F] via-[#D4AF37] to-[#F7E7C4] shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;