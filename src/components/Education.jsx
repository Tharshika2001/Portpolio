import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import educ from '../assets/profile5.png';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'NSBM Green University, Sri Lanka',
    duration: '2023 Nov - 2027 Nov',
    status: 'In Progress',
    description:
      'Pursuing specialized coursework in full-stack software architecture, scalable relational database designs, algorithms, and human-computer interaction principles.',
    highlights: [
      'Full-Stack Web Development',
      'Database Management Systems',
      'Software Architecture & Design',
    ],
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Background Glows */}
      <div className="absolute top-1/3 -left-20 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

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
            03 / ACADEMIC BACKGROUND
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
              LEARNING PATH.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ACADEMIC FOUNDATION.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Rigorous engineering curriculum centered around resilient web systems, backend architectures, and database modeling.
          </p>
        </motion.div>

        {/* Main Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Framed Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-sm">
              {/* Background Offset Glow Card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/15 to-[#8C6D4F]/20 rounded-2xl blur-xl transition-all duration-700 group-hover:scale-105 pointer-events-none" />

              {/* Offset Gold Border Frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-[#8C6D4F]/40 pointer-events-none transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-[#D4AF37]/60" />

              {/* Image Container */}
              <div className="relative z-10 w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#8C6D4F]/50 bg-[#0E0C0A] shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                <img
                  src={educ}
                  alt="Education Profile"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-transparent opacity-70" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/70" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/70" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]/70" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/70" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="relative rounded-2xl border border-[#8C6D4F]/40 bg-[#0E0C0A] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group hover:border-[#D4AF37] transition-all duration-500 overflow-hidden"
              >
                {/* Top Gold Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#8C6D4F]/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#16120E] rounded-xl border border-[#8C6D4F]/40 group-hover:border-[#D4AF37] transition-colors">
                      <GraduationCap className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-normal tracking-tight text-white group-hover:text-[#F7E7C4] transition-colors uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-xs tracking-[0.18em] uppercase text-[#A8988B] mt-0.5"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div
                    className="flex items-center gap-2 text-[10.5px] font-mono tracking-wider text-[#E8D7C5] bg-[#16120E] px-3.5 py-1.5 rounded-full border border-[#8C6D4F]/40 w-fit"
                  >
                    <Calendar size={13} className="text-[#D4AF37]" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm font-light text-[#BDB0A4] leading-[1.8] tracking-wide mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {edu.description}
                </p>

                {/* Key Course Focus Tags */}
                <div className="mb-6">
                  <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2.5">
                    // CORE SPECIALIZATIONS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#16120E] text-[#E8D7C5]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Standing Footer */}
                <div className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase font-semibold pt-4 border-t border-[#8C6D4F]/20">
                  <CheckCircle size={14} className="text-[#D4AF37]" />
                  <span>ACADEMIC EXCELLENCE &bull; UNDERGRADUATE</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;