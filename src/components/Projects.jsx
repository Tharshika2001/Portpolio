import React from 'react';
import { motion } from 'framer-motion';

import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';

const projects = [
  {
    number: '01',
    title: 'E-Commerce Website',
    category: 'FULL-STACK / MULTI-VENDOR MARKETPLACE',
    image: Project1,
    description:
      'Architected a scalable full-stack multi-vendor marketplace streamlining secure operations between buyers, vendors, and platform administrators. Built with a normalized relational database, responsive component architecture, and enterprise-grade security.',
    githubUrl: 'https://github.com/Tharshika2001/Multivendor-E-commerce-Website',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MS SQL Server',
      'REST APIs',
      'JWT',
    ],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Multi-Vendor' },
      { label: 'DATABASE', value: 'MS SQL Server' },
      { label: 'AUTH', value: 'JWT Security' },
    ],
  },
  {
    number: '02',
    title: 'Zentryx Mini-ERP',
    category: 'PRODUCTIVITY / WORKFLOW ENGINE',
    image: Project2,
    description:
      'Full-stack task and productivity management platform engineered with an end-to-end TypeScript architecture. Securely handles workflows, tracks task lifecycles through custom status pipelines, and monitors productivity metrics via a real-time analytics dashboard.',
    githubUrl: 'https://github.com/Tharshika2001/zentryx-mini-erp',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'REST APIs',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'STACK', value: 'End-to-End TS' },
      { label: 'DATABASE', value: 'PostgreSQL' },
      { label: 'METRICS', value: 'Live Analytics' },
    ],
  },
  {
    number: '03',
    title: 'MediCare HMS',
    category: 'HEALTHCARE / HOSPITAL MANAGEMENT',
    image: Project3,
    description:
      'Full-stack hospital management platform replacing manual clinical records. Manages centralized digital patient charts, conflict-free doctor scheduling, automated billing, and live inventory tracking for pharmacy stock, blood bank units, and ambulance logs.',
    githubUrl: 'https://github.com/Tharshika2001/MediCare-HMS',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'SQL Server',
      'Inventory System',
      'REST APIs',
    ],
    metrics: [
      { label: 'DOMAINS', value: 'Clinical & Ops' },
      { label: 'INVENTORY', value: 'Real-Time Sync' },
      { label: 'DATABASE', value: 'Relational SQL' },
    ],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 px-6 sm:px-12 lg:px-20"
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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Headline */}
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
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED SYSTEMS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Production-grade systems engineered with clean architectures across frontend, backend, and relational database layers.
          </p>
        </motion.div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id || project.title}
              className="relative flex flex-col justify-between rounded-xl border border-[#8C6D4F]/40 bg-[#0E0C0A] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:border-[#D4AF37] transition-colors duration-500"
            >
              {/* Gold Top Highlight Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

              {/* Minimal Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

              {/* Project Image */}
              <div className="relative w-full h-52 overflow-hidden border-b border-[#8C6D4F]/25 bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent opacity-70" />
                <span className="absolute top-4 right-4 text-xs font-mono font-bold text-[#D4AF37] bg-black/60 px-2.5 py-1 border border-[#8C6D4F]/40 rounded-sm backdrop-blur-sm">
                  {project.number}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#A8988B] block mb-2">
                    {project.category}
                  </span>

                  <h3
                    className="text-3xl font-normal tracking-tight text-white mb-3 group-hover:text-[#F7E7C4] transition-colors uppercase"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-xs font-light text-[#BDB0A4] leading-[1.7] mb-6 line-clamp-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Architecture Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-[#8C6D4F]/20">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2 rounded-sm border border-[#8C6D4F]/20 bg-[#050403] flex flex-col"
                      >
                        <span className="text-[8.5px] font-mono text-[#8C6D4F] uppercase">
                          {m.label}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-[#F7E7C4] truncate mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[9.5px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#16120E] text-[#E8D7C5]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Action Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2.5 py-3 border border-[#8C6D4F]/60 bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.08)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>VIEW ON GITHUB</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;