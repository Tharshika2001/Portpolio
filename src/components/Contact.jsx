import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    icon: Mail,
    title: 'DIRECT EMAIL',
    value: 'pakirathantharshika@gmail.com',
    link: 'mailto:pakirathantharshika@gmail.com',
  },
  {
    id: 2,
    icon: GitBranch,
    title: 'SOURCE REPOSITORIES',
    value: 'github.com/Tharshika2001',
    link: 'https://github.com/Tharshika2001',
  },
  {
    id: 3,
    icon: Phone,
    title: 'MOBILE COMMUNICATIONS',
    value: '+94 75 66 56 379',
    link: 'tel:+94756656379',
  },
  {
    id: 4,
    icon: MapPin,
    title: 'BASE LOCATION',
    value: 'Colombo, Sri Lanka',
    link: 'https://maps.app.goo.gl/Nq9gYEwifnK7xA966',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-28 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow, Header, & Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
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
                  06 / GET IN TOUCH
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13.5px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Actively seeking Full-Stack Developer internship opportunities and ambitious engineering collaborations. Dispatch a direct inquiry or connect via direct channels.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.id}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center space-x-4 p-3.5 rounded-lg border border-[#8C6D4F]/30 bg-[#0E0C0A] hover:border-[#D4AF37] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    >
                      <div className="p-2.5 rounded-md border border-[#8C6D4F]/40 bg-[#16120E] text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[8.5px] font-mono tracking-[0.22em] uppercase text-[#8C6D4F]">
                          // {info.title}
                        </span>
                        <p className="text-xs font-mono text-[#E8D7C5] group-hover:text-white transition-colors truncate">
                          {info.value}
                        </p>
                      </div>
                      <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all">
                        ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Dispatch Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-xl border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Corner Crosshair Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-base shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  ✓
                </div>
                <h3 className="text-3xl sm:text-4xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PACKET DELIVERED
                </h3>
                <p className="text-xs text-[#A8988B] font-light max-w-sm mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your dispatch has been registered successfully. I will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // SENDER NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // TRANSMISSION CHANNEL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // PAYLOAD MESSAGE
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter message details or internship inquiry..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#E8DFD8] hover:text-black text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>EXECUTE DISPATCH</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            THARSHIKA // PORTFOLIO EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Contact;