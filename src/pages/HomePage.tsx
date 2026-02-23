import React from 'react';
import TypewriterTerminal from '../components/TypewriterTerminal';
import { motion } from 'framer-motion';
import { Award, Code2, Globe, Sparkles, Terminal, FileText, Download, Layers, TrendingUp } from 'lucide-react';
import homeBGHD from '../assets/homeBGHD.png';
import resumePdf from '../assets/resume.pdf';

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Responsive background position — pushes image right on small screens
  const [bgPos, setBgPos] = React.useState('80% bottom');
  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setBgPos('right center');
      else if (w >= 640) setBgPos('75% center');
      else setBgPos('80% bottom');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent">

      {/* =====================================================
          HERO — Full-bleed background image
          Light mode: natural cream bg + dark text
          Dark mode: dark overlay + white text
          ===================================================== */}
      <div className="hero-bg-section relative min-h-screen flex items-center">

        {/* Background image layer — responsive positioning via bgPos state */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${homeBGHD})`,
            backgroundSize: 'cover',
            backgroundPosition: bgPos,
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* MOBILE / IPAD cream overlay for text readability — HIDDEN on desktop (lg:opacity-0) */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none lg:opacity-0 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(to right, rgba(253,245,231,0.92) 0%, rgba(253,245,231,0.85) 40%, rgba(253,245,231,0.5) 65%, transparent 90%)',
          }}
        />

        {/* DARK MODE overlay — hidden in light mode, shows in dark mode on ALL sizes */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300 dark-hero-overlay"
          style={{
            background:
              'linear-gradient(105deg, rgba(20,8,2,0.98) 0%, rgba(26,14,4,0.95) 35%, rgba(40,18,6,0.85) 55%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {/* Subtle animated accents */}
        <motion.div
          className="absolute top-[20%] left-[8%] w-2 h-2 rounded-full bg-[#A47A2D] dark:bg-[#D4AF37] z-[2]"
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[55%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#521D07] dark:bg-[#FFA51F] z-[2]"
          animate={{ y: [8, -8, 8], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Decorative code brackets */}
        <div className="hidden lg:block absolute top-32 left-8 text-8xl opacity-[0.06] font-black text-[#521D07] dark:text-[#FDF5E7] dark-bracket-code z-[2]" style={{ fontFamily: 'monospace' }}>{'{'}</div>
        <div className="hidden lg:block absolute bottom-32 left-[28%] text-8xl opacity-[0.06] font-black text-[#521D07] dark:text-[#FDF5E7] dark-bracket-code z-[2]" style={{ fontFamily: 'monospace' }}>{'}'}</div>

        {/* ---- Hero Content ---- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-32 lg:py-40">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 mb-8 rounded-full bg-[#521D07] dark:bg-[#1A1715]/80 border border-[#A47A2D]/40 dark:border-[#D4AF37]/50 backdrop-blur-md shadow-lg max-w-full"
            >
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
              <p className="font-mono text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-widest whitespace-nowrap">
                Available for Work
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-6"
            >
              <h1
                style={{ fontFamily: 'Michroma, sans-serif' }}
                className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] font-black uppercase tracking-tight text-[#521D07] dark:text-[#FDF5E7] dark-hero-title"
              >
                BACKEND{' '}
                <br className="hidden sm:block" />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #A47A2D, #D4AF37, #A47A2D)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    animation: 'gradientShift 4s ease infinite',
                  }}
                >
                  DEVELOPER
                </span>
              </h1>
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-6 max-w-lg"
            >
              <TypewriterTerminal />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl font-semibold leading-relaxed mb-20 max-w-lg text-[#521D07]/90 dark:text-[#E8DCC8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] dark-hero-desc"
            >
              Building{' '}
              <span className="text-[#A47A2D] dark:text-[#FFA51F] font-bold">efficient</span>,{' '}
              <span className="text-[#A47A2D] dark:text-[#FFA51F] font-bold">scalable systems</span>{' '}
              that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              {/* Primary Button */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#521D07] dark:bg-[#D4AF37] overflow-hidden rounded-full font-black text-lg md:text-xl text-white dark:text-[#1A0E05] hover:scale-105 shadow-[0_4px_20px_rgba(82,29,7,0.4)] dark:shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-300 w-full sm:w-auto dark-btn-primary"
              >
                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-14 group-hover:opacity-0">
                  View Projects
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#A47A2D] to-[#D4AF37] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white translate-y-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Projects
                </span>
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent overflow-hidden rounded-full font-black text-lg md:text-xl text-[#521D07] dark:text-[#D4AF37] border-2 border-[#A47A2D] dark:border-[#D4AF37] hover:scale-105 shadow-[0_4px_20px_rgba(164,122,45,0.15)] dark:shadow-[0_4px_20px_rgba(212,175,55,0.2)] transition-all duration-300 w-full sm:w-auto dark-btn-secondary"
              >
                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-14 group-hover:opacity-0">
                  Contact Me
                </span>
                <div className="absolute inset-0 z-0 bg-[#A47A2D] dark:bg-[#D4AF37] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white dark:text-[#1A0E05] translate-y-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Contact Me
                </span>
              </button>

              {/* Tertiary Button - Download Resume */}
              <a
                href={resumePdf}
                download="Josh_Aguiluz_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent overflow-hidden rounded-full font-black text-lg md:text-xl text-[#521D07] dark:text-[#D4AF37] border-2 border-[#A47A2D] dark:border-[#D4AF37] hover:scale-105 shadow-[0_4px_20px_rgba(164,122,45,0.15)] dark:shadow-[0_4px_20px_rgba(212,175,55,0.2)] transition-all duration-300 w-full sm:w-auto dark-btn-secondary"
              >
                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-14 group-hover:opacity-0">
                  <Download className="w-5 h-5" /> Resume
                </span>
                <div className="absolute inset-0 z-0 bg-[#A47A2D] dark:bg-[#D4AF37] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white dark:text-[#1A0E05] translate-y-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Download className="w-5 h-5" /> Resume
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[3] bg-gradient-to-t from-[#FDF5E7] dark:from-[#1A1715] to-transparent pointer-events-none" />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-mono text-[10px] text-[#521D07]/40 dark:text-white/40 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-[#521D07]/30 dark:border-white/30 flex items-start justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#A47A2D] dark:bg-[#D4AF37]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
      <br></br> <br></br> <br></br> <br></br>
      {/* =====================================================
          CONTENT BELOW HERO — normal themed background
          ===================================================== */}
      <div className="relative z-10 bg-[#FDF5E7] dark:bg-[#1A1715]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-8 center-content border-4 border-[#A47A2D]"
            >
              <Layers className="w-10 h-10 md:w-12 md:h-12 text-[#A47A2D] mb-4 mx-auto" />
              <div className="text-[40px] md:text-[56px] font-black text-[#A47A2D] mb-2">4</div>
              <div className="text-[18px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-8 center-content border-4 border-[#A47A2D]"
            >
              <Award className="w-10 h-10 md:w-12 md:h-12 text-[#A47A2D] mb-4 mx-auto" />
              <div className="text-[40px] md:text-[56px] font-black text-[#A47A2D] mb-2">6+</div>
              <div className="text-[18px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Certifications</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-8 center-content border-4 border-[#A47A2D]"
            >
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#A47A2D] mb-4 mx-auto" />
              <div className="text-[40px] md:text-[56px] font-black text-[#521D07] dark:text-[#E2E8F0] mb-2">Top 1%</div>
              <div className="text-[18px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Class Rank</div>
            </motion.div>
          </div>
          <br></br> <br></br> <br></br> <br></br>
          {/* Marquee Strip */}
          <div className="marquee-divider w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] rounded-none overflow-hidden mb-32">
            <div className="marquee-content">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="marquee-text" style={{ fontFamily: 'var(--font-mono)' }}>/// FULL STACK</span>
                  <span className="marquee-text" style={{ fontFamily: 'var(--font-mono)' }}>/// BACKEND</span>
                  <span className="marquee-text" style={{ fontFamily: 'var(--font-mono)' }}>/// CODE</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="max-w-5xl mx-auto mt-8 pb-32">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[16px] md:text-[20px] font-bold text-[#A47A2D] dark:text-[#D4AF37] tracking-wider"
              >
                {'// Core Technologies'}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ fontFamily: 'Michroma, sans-serif' }}
                className="text-4xl md:text-[56px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mt-4"
              >
                My Tech Stack
              </motion.h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  name: 'React',
                  desc: 'Frontend',
                  color: '#61DAFB',
                  bgLight: '#E8F4F0',
                  bgDark: '#1C2A2E',
                  borderLight: '#61DAFB',
                  borderDark: '#3A8BA3',
                  iconSimple: (
                    <svg viewBox="-11.5 -10.232 23 20.463" className="w-16 h-16 md:w-20 md:h-20">
                      <circle r="2.05" fill="#61DAFB" />
                      <g stroke="#61DAFB" fill="none" strokeWidth="1">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  ),
                },
                {
                  name: 'Node.js',
                  desc: 'Backend',
                  color: '#339933',
                  bgLight: '#EAF2E4',
                  bgDark: '#1E2A1C',
                  borderLight: '#339933',
                  borderDark: '#2D7A2D',
                  iconSimple: (
                    <svg viewBox="0 0 256 289" className="w-16 h-16 md:w-20 md:h-20">
                      <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.155.795-.53 1.855-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915L129.06 19.213c-1.06-.53-2.385-.53-3.18 0L20.14 80.165c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.635 7.95 25.44-1.325 25.44-10.6V93.15c0-1.59 1.325-3.18 3.18-3.18h13.515c1.59 0 3.18 1.325 3.18 3.18v121.11c0 20.936-11.395 33.126-31.27 33.126-6.095 0-10.865 0-24.38-6.625L11.13 224.33C4.24 220.355 0 212.935 0 205.25V83.08c0-7.685 4.24-15.105 11.13-19.08L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64c6.89 3.975 11.13 11.395 11.13 19.08v122.17c0 7.685-4.24 15.105-11.13 19.08l-105.74 61.22c-3.445 1.854-7.42 2.914-11.13 2.914zm32.595-84.009c-46.29 0-55.83-21.2-55.83-39.22 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.915 1.06 2.915 2.65 2.12 14.045 8.215 20.936 36.305 20.936 22.26 0 31.8-5.035 31.8-16.96 0-6.89-2.65-11.925-37.365-15.37-28.887-2.915-46.82-9.275-46.82-32.33 0-21.465 18.2-34.185 48.675-34.185 34.185 0 51.18 11.925 53.3 37.365 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.325 0-2.65-1.06-2.915-2.385-3.18-14.575-11.395-19.345-33.655-19.345-24.91 0-27.825 8.745-27.825 15.105 0 7.95 3.445 10.07 36.305 14.575 32.595 4.505 47.88 10.865 47.88 32.86-.265 23.175-19.345 36.57-52.77 36.57z" fill="#339933" />
                    </svg>
                  ),
                },
                {
                  name: 'Flutter',
                  desc: 'Mobile',
                  color: '#02569B',
                  bgLight: '#E4EEF6',
                  bgDark: '#1A2230',
                  borderLight: '#47C5FB',
                  borderDark: '#2A7AB5',
                  iconSimple: (
                    <svg viewBox="0 0 256 317" className="w-16 h-16 md:w-20 md:h-20">
                      <defs>
                        <linearGradient x1="4%" y1="27%" x2="75%" y2="52%" id="a">
                          <stop stopColor="#1A237E" stopOpacity=".4" offset="0%" />
                          <stop stopColor="#1A237E" stopOpacity="0" offset="100%" />
                        </linearGradient>
                      </defs>
                      <path d="M157.666.001L.001 157.666 48.8 206.465 255.268.001z" fill="#47C5FB" />
                      <path d="M156.567 145.396L72.15 229.828 120.947 278.625 169.745 229.828 255.268 145.396z" fill="#47C5FB" />
                      <path d="M120.947 278.625L169.745 316.025 255.268 278.625 169.745 229.828z" fill="#00569E" />
                      <path d="M120.947 278.625L158.348 266.177 153.115 235.06z" fill="url(#a)" />
                    </svg>
                  ),
                },
                {
                  name: 'MySQL',
                  desc: 'Database',
                  color: '#4479A1',
                  bgLight: '#E6ECF2',
                  bgDark: '#1C2430',
                  borderLight: '#4479A1',
                  borderDark: '#365F80',
                  iconSimple: (
                    <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20" fill="#4479A1">
                      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.72-1.01 1.08-1.583 1.08-.16 0-.36-.04-.6-.12v-.48c.104.013.22.02.35.02.265 0 .478-.07.64-.213.193-.17.29-.376.29-.628 0-.158-.062-.467-.186-.93L6.32 14.615h.85l.833 3.27c.18.71.264 1.17.254 1.376.39-.83.695-1.78.915-2.852l.21-1.793h.823zm14.267 4.08h-2.883v-5.53h.854v4.8h2.03v.73zm-3.834.073c-.322.106-.742.16-1.26.16-1.14 0-1.706-.47-1.706-1.417V14.62h.84v2.768c0 .534.262.8.784.8.203 0 .39-.025.563-.076v-3.492h.78v4.15zm-4.443-.074h-.841v-3.376c-.404.16-.807.247-1.21.26v-.7c.608-.022 1.16-.2 1.654-.53h.397v4.346zm-2.757-5.378c-.255-.147-.544-.22-.865-.22-.377 0-.673.11-.893.334-.22.223-.33.524-.33.9v.205c0 .4.11.717.333.95.22.234.528.35.924.35.12 0 .27-.014.45-.04v.665c-.17.04-.38.06-.63.06-.594 0-1.077-.19-1.45-.567-.372-.378-.558-.86-.558-1.452v-.29c0-.576.2-1.043.6-1.403.4-.36.906-.54 1.52-.54.29 0 .552.047.79.14l-.14.655zm-4.14.143c-.463-.18-.866-.37-1.207-.57v1.96c.403-.018.73-.147.98-.385.25-.238.375-.568.375-.99l-.148-.015z" />
                    </svg>
                  ),
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className={`tech - card - ${tech.name.replace('.', '')} group relative flex flex - col items - center text - center p - 6 md: p - 10 rounded - [28px] shadow - lg hover: shadow - 2xl transition - all duration - 500 cursor - pointer overflow - hidden`}
                  style={{
                    backgroundColor: `var(--tech - bg, ${tech.bgLight})`,
                    border: `3px solid ${tech.borderLight} `,
                    boxShadow: `inset 0 0 0 1px ${tech.borderLight} 33, 0 4px 20px - 4px ${tech.color} 20`,
                  }}
                >
                  {/* Dark mode background override */}
                  <style>{`
  .dark.tech - card - ${tech.name.replace('.', '')} {
  background - color: ${tech.bgDark} !important;
  border - color: ${tech.borderDark} !important;
  box - shadow: inset 0 0 0 1px ${tech.borderDark} 55, 0 4px 30px - 4px ${tech.color} 30!important;
}
                    .dark.tech - card - ${tech.name.replace('.', '')}:hover {
  box - shadow: inset 0 0 0 1px ${tech.borderDark} 88, 0 8px 40px - 4px ${tech.color} 40!important;
}
`}</style>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial - gradient(circle at 50 % 30 %, ${tech.color}20, transparent 65 %)`,
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-1/2 group-hover:w-full transition-all duration-500 rounded-b-full"
                    style={{ background: `linear - gradient(90deg, transparent, ${tech.color}, transparent)` }}
                  />

                  {/* Decorative corner accents */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-500"
                    style={{
                      background: `radial - gradient(circle at 100 % 0 %, ${tech.color}, transparent 70 %)`,
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-20 h-20 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
                    style={{
                      background: `radial - gradient(circle at 0 % 100 %, ${tech.color}, transparent 70 %)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative z-10 mb-5 md:mb-6 p-4 md:p-5 rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: `${tech.color} 15` }}
                  >
                    {tech.iconSimple}
                  </div>

                  {/* Name */}
                  <h4
                    style={{ fontFamily: 'Michroma, sans-serif' }}
                    className="relative z-10 text-lg md:text-2xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase tracking-tight mb-1"
                  >
                    {tech.name}
                  </h4>

                  {/* Category label */}
                  <span
                    className="relative z-10 font-mono text-xs md:text-sm font-bold uppercase tracking-widest"
                    style={{ color: tech.color }}
                  >
                    {tech.desc}
                  </span>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                    style={{ background: `linear - gradient(90deg, transparent, ${tech.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Gradient animation keyframes and manual dark mode styles */}
      <style>{`
@keyframes gradientShift {
  0 %, 100 % { background- position: 0 % center;
}
50 % { background- position: 200 % center; }
        }

        /* 
         * RAW CSS OVERRIDES FOR DARK MODE!
         * Because Tailwind CSS in this project is pre-compiled (static),
         * arbitrary dark classes were not taking effect. These styles ensure
         * the hero section flawlessly enters dark mode.
         */
        .dark .dark-hero-overlay { opacity: 1 !important; }
        .dark .dark-bracket-code { color: #FDF5E7 !important; }
        .dark .dark-hero-title { color: #FDF5E7 !important; }
        .dark .dark-hero-desc { color: #E8DCC8 !important; filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8)) !important; }
        .dark .dark-btn-primary {
          background-color: #D4AF37 !important;
          color: #1A0E05 !important;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4) !important;
        }
        .dark .dark-btn-primary:hover { background-color: #FFA51F !important; }
        .dark .dark-btn-secondary {
          background-color: transparent !important;
          color: #D4AF37 !important;
          box-shadow: inset 0 0 0 2px #D4AF37, 0 4px 20px rgba(212, 175, 55, 0.3) !important;
          border: none !important;
        }
        .dark .dark-btn-secondary:hover {
          background-color: #D4AF37 !important;
          color: #1A0E05 !important;
        }
      `}</style>
    </section>
  );
}