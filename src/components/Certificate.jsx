import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

const CertificateData = [
  {
    id: 1,
    number: '01',
    title: 'AZ-900 Microsoft Azure Fundamentals',
    issuer: 'Microsoft & LinkedIn',
    date: 'Feb 17, 2025',
    category: 'CLOUD INFRASTRUCTURE',
    description:
      'Validates foundational knowledge of cloud services and how those services are delivered with Microsoft Azure, covering security, privacy, compliance, and cloud computing principles.',
    pdfUrl: '/az-900-azure-fundamentals.pdf',
  },
  {
    id: 2,
    number: '02',
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft & LinkedIn',
    date: 'Dec 19, 2024',
    category: 'SOFTWARE ENGINEERING',
    description:
      'Rigorous software engineering foundation covering core programming logic, algorithms, data structures, debugging workflows, and industry-standard collaborative practices.',
    pdfUrl: '/career-essentials-software.pdf',
  },
  {
    id: 3,
    number: '03',
    title: 'Diploma in English',
    issuer: 'IBM',
    date: 'Oct 29, 2022',
    category: 'PROFESSIONAL COMMUNICATION',
    description:
      'Comprehensive coursework enhancing professional communication, technical documentation, and verbal skills tailored for high-standard engineering teams.',
    pdfUrl: '/english-certificate.pdf',
  },
];

export const Certificate = () => {
  return (
    <section
      id="certificates"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

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
            04 / VERIFIED CREDENTIALS
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
              HONORS &
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              CERTIFICATIONS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Recognized industry accreditations validating expertise across cloud infrastructure, engineering methodology, and technical excellence.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CertificateData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col justify-between rounded-xl border border-[#8C6D4F]/40 bg-[#0E0C0A] p-8 group shadow-[0_15px_40px_rgba(0,0,0,0.9)] hover:border-[#D4AF37] transition-all duration-500 overflow-hidden"
            >
              {/* Top Gold Highlight Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

              {/* Minimal Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

              {/* Big Watermark Index */}
              <span
                className="absolute -bottom-4 -right-1 text-8xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {cert.number}
              </span>

              {/* Top Meta Info */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-2.5 rounded-lg border border-[#8C6D4F]/40 bg-[#16120E] text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                    <Award size={22} />
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#D4AF37] bg-[#16120E] px-3 py-1 rounded-sm border border-[#8C6D4F]/30">
                    {cert.category}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#A8988B] mb-3">
                  <span className="flex items-center gap-1 text-[#E8D7C5]">
                    <ShieldCheck size={14} className="text-[#D4AF37]" />
                    {cert.issuer}
                  </span>
                  <span className="text-[#8C6D4F]">&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-[#8C6D4F]" />
                    {cert.date}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.95]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cert.title}
                </h3>

                <p
                  className="text-xs sm:text-[13px] font-light text-[#BDB0A4] leading-[1.75] mb-8"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.description}
                </p>
              </div>

              {/* Bottom Action CTA */}
              <div className="relative z-10 pt-4 border-t border-[#8C6D4F]/25">
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 border border-[#8C6D4F]/50 bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.08)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;