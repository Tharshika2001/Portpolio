import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Myprofile from '../assets/profile4.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative w-screen min-h-[calc(100vh-80px)] overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black">
      {/* ================= BACKGROUND AMBIENCE LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#8C6D4F]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#1f1b16_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      {/* ================= HERO CONTENT ROW ================= */}
      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-80px)] w-full px-6 sm:px-12 lg:px-16 py-12 pointer-events-none">
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-8">
          
          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-2xl pointer-events-auto z-20 text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div variants={fadeUpVariants} className="mb-2">
              <span
                className="text-[10px] sm:text-[11px] font-medium tracking-[0.32em] uppercase text-[#C4B29E]/90 inline-block"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SOFTWARE ENGINEERING UNDERGRADUATE
              </span>
            </motion.div>

            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-4 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.4rem] tracking-tight uppercase leading-[0.85]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I AM
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  THARSHIKA
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  DEVELOPER
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Roles */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.26em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FULL STACK WEB <span className="text-[#8C6D4F] mx-1">•</span> UI/UX DESIGN <span className="text-[#8C6D4F] mx-1">•</span> REST APIS
              </p>
            </motion.div>

            {/* Concise Bio */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-8 mx-auto lg:mx-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                I'm Pakirathan Tharshika a Full Stack Developer and Software Engineer Student Specializing in production-grade web applications across frontend, backend,
                and relational database systems. Engineering clean architectures with React, 
                TypeScript, Node.js, and SQL.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Hire Me CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>HIRE ME</span>
                <span className="text-xs">↗</span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/Tharshika_Resume.pdf"
                download="Tharshika_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2.5 px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <Download size={15} className="text-[#C99E5D]" />
                <span>DOWNLOAD RESUME</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile Display & Signature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center pointer-events-auto z-20"
          >
            <div className="relative group flex items-center justify-center">
              {/* Gold Glow Behind Profile */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-[#8C6D4F]/30 rounded-full blur-2xl transform scale-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden p-1.5 border border-[#8C6D4F]/60 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                <img
                  src={Myprofile}
                  alt="Tharshika"
                  className="w-full h-full object-cover object-[center_10%] rounded-full grayscale-[25%] contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Floating Quote Stamp */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 sm:left-0 bg-[#0F0D0B]/95 border border-[#8C6D4F]/50 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md hidden sm:block select-none"
              >
                <p
                  className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  FULL STACK &bull; UI/UX
                </p>
                <div className="w-12 h-[1px] bg-[#8C6D4F]/50 my-1" />
                <span
                  className="text-xl text-[#E8DFD8] leading-none block"
                  style={{ fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive" }}
                >
                  Tharshika
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;