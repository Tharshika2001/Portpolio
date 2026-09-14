import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-[#E8DFD8] border-t border-[#8C6D4F]/25 py-8 overflow-hidden">
      {/* Top Gold Horizon Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:text-white transition-colors"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          THARSHIKA<span className="text-[#D4AF37]">.</span>
        </a>

        {/* Center Tagline */}
        <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F]">
          ENGINEERED WITH PRECISION
        </p>

        {/* Copyright */}
        <p className="text-[10.5px] font-mono text-[#A8988B]/80">
          &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;