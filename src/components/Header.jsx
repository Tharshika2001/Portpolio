import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = ({ onHover }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATES', href: '#certificates' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleMouseEnter = () => onHover?.(true);
  const handleMouseLeave = () => onHover?.(false);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    handleMouseLeave();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className="relative z-50 w-full px-6 sm:px-12 lg:px-16 py-6 bg-black/40 backdrop-blur-sm border-b border-[#8C6D4F]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          THARSHIKA.
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/60 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection('#contact')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-[#EAD8C7] hover:text-[#D4AF37] transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-md md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Off-Canvas Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0c0a08] border-l border-[#8C6D4F]/30 z-50 transition-transform duration-300 ease-in-out md:hidden p-8 flex flex-col justify-between ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-10">
            <span
              className="text-xs font-semibold tracking-[0.35em] uppercase text-[#EAD8C7]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              MENU
            </span>
            <button
              className="text-[#C4B5A5] hover:text-[#EAD8C7]"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-xs font-medium tracking-[0.28em] uppercase text-[#C4B5A5] hover:text-[#FFF5EB] transition-colors text-left"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => scrollToSection('#contact')}
          className="w-full flex items-center justify-center space-x-2 text-[11px] tracking-[0.24em] font-medium uppercase py-3 border border-[#8C6D4F] bg-[#1a1510] text-[#EAD8C7] hover:border-[#D4AF37] transition-all duration-300"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span>LET&apos;S TALK</span>
          <span className="text-xs">↗</span>
        </button>
      </div>
    </header>
  );
};

export default Header;