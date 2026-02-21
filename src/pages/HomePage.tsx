import React from 'react';
import TiltCard from '../components/TiltCard';
import TypewriterTerminal from '../components/TypewriterTerminal';
import { motion } from 'framer-motion';
import { Layers, Award, TrendingUp, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center mesh-gradient-bg relative overflow-hidden bg-transparent pt-32 pb-20">

      {/* Decorative Elements */}
      <div className="hidden lg:block bracket-decoration top-40 left-10 text-9xl opacity-10 font-black text-[#521D07] absolute">{'{'}</div>
      <div className="hidden lg:block bracket-decoration bottom-40 right-10 text-9xl opacity-10 font-black text-[#521D07] absolute">{'}'}</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* --- HERO SECTION: SPLIT LAYOUT (Text Left, Image Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-32 lg:mb-[28rem]">

          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col items-start text-left space-y-8 z-10 order-2 lg:order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 bg-[#A47A2D] rounded-full"
            >
              <p className="font-mono text-xs md:text-sm font-bold text-white uppercase tracking-widest">
                // Portfolio 2024
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-4xl sm:text-6xl lg:text-8xl leading-tight font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                BACKEND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A47A2D] to-[#521D07]">DEVELOPER</span>
              </h1>
            </motion.div>

            {/* Subtext / Terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-xl"
            >
              <TypewriterTerminal />

              <p className="mt-6 text-lg md:text-2xl font-bold text-[#521D07]/80 dark:text-[#B8B0A6] leading-relaxed">
                Building <span className="text-[#A47A2D]">efficient</span>, <span className="text-[#A47A2D]">scalable systems</span> that solve real-world problems.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="pill-button px-8 py-4 bg-[#521D07] text-white text-lg md:text-xl font-bold hover:bg-[#FFA51F] hover:scale-105 transition-all shadow-[4px_4px_0px_#A47A2D] w-full sm:w-auto"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="pill-button px-8 py-4 border-4 border-[#521D07] text-[#521D07] dark:text-[#E2E8F0] dark:border-[#E2E8F0] text-lg md:text-xl font-bold hover:bg-[#521D07] hover:text-white transition-all w-full sm:w-auto"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image / Tilt Card */}
          <div className="flex justify-center lg:justify-end relative z-10 order-1 lg:order-2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              <TiltCard className="w-full">
                <div className="relative bg-white dark:bg-[#252220] p-3 border-4 border-[#521D07] dark:border-[#A47A2D] shadow-[12px_12px_0px_#521D07] rounded-[2rem] overflow-hidden group rotate-3 hover:rotate-0 transition-transform duration-500">

                  {/* Image */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                    alt="Josh Andrei Aguiluz"
                    className="w-full h-[300px] sm:h-[450px] object-cover rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-[#1A1715]/90 backdrop-blur-sm p-4 border-2 border-[#521D07] rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-black text-[#521D07] dark:text-[#E2E8F0] text-base md:text-lg">Josh Andrei</p>
                        <p className="font-mono text-[10px] md:text-xs text-[#A47A2D] font-bold">TOP 1% WEB DEV</p>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* --- QUICK STATS (Restored) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 lg:mt-64 mb-32 lg:mb-64">
          <div className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-8 center-content border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <Layers className="w-10 h-10 md:w-12 md:h-12 text-[#A47A2D] mb-4 mx-auto" />
            <div className="text-[40px] md:text-[56px] font-black text-[#A47A2D] dark:text-[#A47A2D] mb-2">15+</div>
            <div className="text-[18px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Projects</div>
          </div>
          <div className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-8 center-content border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <Award className="w-10 h-10 md:w-12 md:h-12 text-[#A47A2D] mb-4 mx-auto" />
            <div className="text-[40px] md:text-[56px] font-black text-[#A47A2D] dark:text-[#A47A2D] mb-2">6+</div>
            <div className="text-[18px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Certifications</div>
          </div>
          <div className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-8 center-content border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#A47A2D] mb-4 mx-auto" />
            <div className="text-[40px] md:text-[56px] font-black text-[#521D07] dark:text-[#E2E8F0] mb-2">Top 1%</div>
            <div className="text-[18px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Class Rank</div>
          </div>
        </div>

        {/* --- MARQUEE STRIP (Restored) --- */}
        <div className="marquee-divider w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] rounded-none overflow-hidden mb-32 mt-20">
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

        <br></br><br></br>
        {/* --- FEATURED PROJECT PREVIEW (Restored) --- */}
        <div className="max-w-4xl mx-auto mt-24 lg:mt-32">
          <div className="text-center mb-12">
            <span className="font-mono text-[16px] md:text-[20px] font-bold text-[#521D07] dark:text-[#B8B0A6] tracking-wider">
              // Featured Work
            </span>
            <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-4xl md:text-[56px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mt-4">
              Latest Project
            </h3>
          </div>

          <div className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-10 border-4 border-[#A47A2D] dark:border-[#A47A2D] relative overflow-hidden group">
            {/* Background Graphic */}
            <div className="absolute -right-10 -top-10 opacity-5 dark:opacity-10 transform rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              <TrendingUp className="w-48 h-48 md:w-64 md:h-64 text-[#521D07] dark:text-[#E2E8F0]" />
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
              <span className="mono-tag text-xs md:text-base">FLUTTER</span>
              <span className="mono-tag text-xs md:text-base">DART</span>
              <span className="mono-tag text-xs md:text-base">LOCAL STORAGE</span>
            </div>

            <h4 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-2xl md:text-[40px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-4">
              Mini Task Tracker
            </h4>

            <p className="text-lg md:text-[24px] font-bold text-[#521D07] dark:text-[#B8B0A6] mb-8 relative z-10">
              Cross-platform mobile app with persistent local storage, built with Flutter.
              Features task management, priority levels, and offline-first architecture.
            </p>

            <button
              onClick={() => scrollToSection('projects')}
              className="pill-button px-6 py-3 md:px-10 md:py-4 bg-[#A47A2D] dark:bg-[#A47A2D] text-white dark:text-[#1A1715] text-lg md:text-[24px] inline-flex items-center gap-2 md:gap-3 hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors relative z-10"
            >
              View All Projects <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}