import React from 'react';
import { Award, Briefcase, GraduationCap, Download, Terminal, Globe, Cpu, MapPin, CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import acsciImg from '../assets/ACSCI.jfif';
import resumePdf from '../assets/resume.pdf';

/* ================================================================
   SVG Donut Pie Chart — Labels OUTSIDE with leader lines
   ================================================================ */
function SkillsPieChart() {
  const size = 320;
  const strokeWidth = 60;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;

  const segments = [
    { label: 'Backend', pct: 50, color: '#A47A2D', darkColor: '#C9A232', items: ['Node.js', 'PHP', 'MySQL', 'Firebase', 'Express'] },
    { label: 'DevTools', pct: 30, color: '#D4AF37', darkColor: '#E8C94B', items: ['Git/GitHub', 'VS Code', 'Postman', 'Figma'] },
    { label: 'Frontend', pct: 20, color: '#521D07', darkColor: '#8B4513', items: ['React', 'Angular', 'Flutter', 'HTML5/CSS3', 'Tailwind'] },
  ];

  let offsetAngle = -Math.PI / 2;
  let dashOffset = 0;

  const segmentData = segments.map((seg) => {
    const dash = (seg.pct / 100) * circumference;
    const gap = circumference - dash;
    const startAngle = offsetAngle;
    const segAngle = (seg.pct / 100) * 2 * Math.PI;
    const endAngle = startAngle + segAngle;
    const midAngle = (startAngle + endAngle) / 2;
    const currentOffset = -dashOffset;
    dashOffset += dash;
    offsetAngle = endAngle;
    return { ...seg, dash, gap, currentOffset, midAngle };
  });

  // SVG canvas is bigger to fit labels outside — must be large enough to contain all labels
  const svgSize = 680;
  const svgCx = svgSize / 2;
  const svgCy = svgSize / 2;
  const outerLabelRadius = radius + strokeWidth / 2 + 55;
  const lineStartRadius = radius + strokeWidth / 2 + 5;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
      {/* Pie Chart with external labels — scales on mobile */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-full lg:w-auto" style={{ maxWidth: 500 }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${svgSize} ${svgSize}`}>
          {/* Donut segments */}
          <g transform={`rotate(-90 ${svgCx} ${svgCy})`}>
            {segmentData.map((seg, i) => (
              <motion.circle
                key={i}
                cx={svgCx}
                cy={svgCy}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${seg.dash} ${seg.gap}`}
                strokeDashoffset={seg.currentOffset}
                strokeLinecap="butt"
                initial={{ strokeDasharray: `0 ${circumference}` }}
                whileInView={{ strokeDasharray: `${seg.dash} ${seg.gap}` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.3, ease: 'easeOut' }}
              />
            ))}
          </g>

          {/* Leader lines + external labels */}
          {segmentData.map((seg, i) => {
            const lineX1 = svgCx + lineStartRadius * Math.cos(seg.midAngle);
            const lineY1 = svgCy + lineStartRadius * Math.sin(seg.midAngle);
            const labelX = svgCx + outerLabelRadius * Math.cos(seg.midAngle);
            const labelY = svgCy + outerLabelRadius * Math.sin(seg.midAngle);
            const isRight = Math.cos(seg.midAngle) >= 0;

            return (
              <g key={i}>
                {/* Leader line */}
                <line
                  x1={lineX1} y1={lineY1}
                  x2={labelX} y2={labelY}
                  stroke={seg.color}
                  strokeWidth={2}
                  strokeDasharray="4 3"
                  opacity={0.6}
                />
                {/* Dot at ring edge */}
                <circle cx={lineX1} cy={lineY1} r={4} fill={seg.color} />
                {/* Label text */}
                <text
                  x={labelX}
                  y={labelY - 6}
                  textAnchor={isRight ? 'start' : 'end'}
                  dominantBaseline="middle"
                  fill={seg.color}
                  fontWeight={900}
                  fontSize={16}
                  fontFamily="Michroma, sans-serif"
                  letterSpacing="0.05em"
                >
                  {seg.label.toUpperCase()}
                </text>
                <text
                  x={labelX}
                  y={labelY + 14}
                  textAnchor={isRight ? 'start' : 'end'}
                  dominantBaseline="middle"
                  fill={seg.color}
                  fontWeight={700}
                  fontSize={22}
                  fontFamily="Michroma, sans-serif"
                >
                  {seg.pct}%
                </text>
              </g>
            );
          })}

          {/* Center circle background */}
          {/* Center - using foreignObject for Tailwind dark mode support */}
          <foreignObject
            x={svgCx - (radius - strokeWidth / 2 - 5)}
            y={svgCy - (radius - strokeWidth / 2 - 5)}
            width={(radius - strokeWidth / 2 - 5) * 2}
            height={(radius - strokeWidth / 2 - 5) * 2}
          >
            <div
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              className="bg-[#FDF5E7] dark:bg-[#1A1715] flex flex-col items-center justify-center"
            >
              <span style={{ fontFamily: 'Michroma, sans-serif' }} className="text-4xl font-black text-[#521D07] dark:text-[#E2E8F0]">100%</span>
              <span style={{ fontFamily: 'Michroma, sans-serif', letterSpacing: '0.2em' }} className="text-xs font-bold text-[#A47A2D]">SKILLS</span>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* Legend + Tech Items */}
      <div className="flex-1 grid gap-8">
        {segments.map((seg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 rounded-full flex-shrink-0 shadow-md" style={{ backgroundColor: seg.color }} />
              <span style={{ fontFamily: 'Michroma, sans-serif' }} className="font-black text-[#521D07] dark:text-[#E2E8F0] uppercase text-lg tracking-wide">
                {seg.label}
              </span>
              <span className="text-[#A47A2D] font-black text-lg">— {seg.pct}%</span>
            </div>
            <div className="flex flex-wrap gap-2 ml-8">
              {seg.items.map((item, j) => (
                <motion.span
                  key={j}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 text-sm font-bold rounded-xl border-2 cursor-default transition-colors"
                  style={{
                    borderColor: seg.color,
                    color: seg.color,
                    backgroundColor: `${seg.color}12`,
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   Main Page
   ================================================================ */
export default function ResumePage() {
  const timeline = [
    {
      year: '2023 - 2027',
      title: 'BS Information Technology',
      org: 'Holy Angel University',
      desc: 'Major within Web Development Track. Top 1% ranking Academic Scholar.',
      image: 'https://www.hau.edu.ph/images/banner-3.jpg',
    },
    {
      year: '2017 - 2022',
      title: 'STEM Strand Badge',
      org: 'Angeles City Science High School',
      desc: 'Graduated with High Honors. Specialization in Advanced Mathematics & Research.',
      image: acsciImg,
    },
    {
      year: '2024',
      title: 'JavaScript Essentials 1',
      org: 'Cisco',
      desc: 'Certified in core JavaScript fundamentals including ES6+ syntax and DOM manipulation.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&q=80',
    },
    {
      year: '2024',
      title: 'CCNA: Intro to Networks',
      org: 'Cisco',
      desc: 'Certified in networking fundamentals, IP addressing, and network protocols.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
    },
    {
      year: '2023',
      title: 'PHP Basics',
      org: 'Simplilearn',
      desc: 'Certified in PHP fundamentals for server-side web development.',
      image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=400&q=80',
    },
    {
      year: '2023',
      title: 'CompTIA IT Fundamentals',
      org: 'CompTIA',
      desc: 'Certified in core IT concepts, security, and software development fundamentals.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
    },
    {
      year: '2023',
      title: 'Digital Marketing',
      org: 'HubSpot Academy',
      desc: 'Certified in digital marketing strategies, SEO, and content marketing.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80',
    },
  ];

  const quickStats = [
    { value: '15+', label: 'Projects' },
    { value: '6+', label: 'Certifications' },
    { value: 'Top 1%', label: 'Class Rank' },
    { value: '100%', label: 'Commitment' },
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-4 md:px-6 lg:px-12 bg-[#FDF5E7] dark:bg-[#1A1715] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ===== Page Title & Download ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 bg-[#A47A2D]/10 rounded-full mb-4 border border-[#A47A2D]/20"
            >
              <p className="font-mono text-sm font-bold text-[#A47A2D] uppercase tracking-wider">
                {'// Professional Profile'}
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontFamily: 'Michroma, sans-serif' }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase"
            >
              Resume
            </motion.h1>
          </div>

          <a href={resumePdf} download="Josh_Aguiluz_Resume.pdf">
            <MagneticButton className="px-6 py-3 md:px-8 md:py-4 bg-[#A47A2D] hover:bg-[#FFA51F] text-white rounded-[20px] font-black text-base md:text-lg flex items-center gap-3 shadow-[8px_8px_0px_#521D07] dark:shadow-[8px_8px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#521D07] transition-all border-2 border-[#521D07] dark:border-[#E2E8F0]">
              <Download className="w-5 h-5" />
              Download PDF
            </MagneticButton>
          </a>
        </div>

        {/* ===== SECTION 1: Unified Profile & Summary Container ===== */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-[#252220] rounded-[40px] border-4 border-[#A47A2D] p-8 lg:p-14 relative overflow-hidden shadow-2xl"
          >
            {/* Subtle background decoration */}
            <Briefcase className="absolute -right-12 -bottom-12 w-64 h-64 text-[#A47A2D] opacity-[0.03] rotate-12 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">

              {/* Left Column — About Me (Profile) */}
              <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Avatar */}
                <div className="relative mb-8 self-center lg:self-start">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[#A47A2D] via-[#D4AF37] to-[#A47A2D] p-1.5 shadow-xl">
                    <div className="w-full h-full rounded-full bg-[#FDF5E7] dark:bg-[#1A1715] flex items-center justify-center">
                      <span style={{ fontFamily: 'Michroma, sans-serif' }} className="text-4xl lg:text-5xl font-black text-[#A47A2D]">JA</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-white dark:border-[#252220] shadow-md animate-pulse" />
                </div>

                <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-3xl lg:text-4xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-2 leading-tight">
                  Josh Andrei<br />Aguiluz
                </h3>
                <p className="text-[#A47A2D] font-black text-lg mb-8 tracking-wide uppercase">Backend & Full-Stack Developer</p>

                <div className="w-full space-y-5 text-left mb-10 pb-10 border-b-2 lg:border-b-0 lg:pb-0 border-[#A47A2D]/20">
                  <div className="flex items-center gap-4 text-base lg:text-lg font-bold text-[#521D07] dark:text-[#B8B0A6]">
                    <div className="w-10 h-10 rounded-full bg-[#A47A2D]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#A47A2D]" />
                    </div>
                    Angeles City, Pampanga
                  </div>
                  <div className="flex items-center gap-4 text-base lg:text-lg font-bold text-[#521D07] dark:text-[#B8B0A6]">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    Available for Internships
                  </div>
                  <div className="flex items-center gap-4 text-base lg:text-lg font-bold text-[#521D07] dark:text-[#B8B0A6]">
                    <div className="w-10 h-10 rounded-full bg-[#A47A2D]/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-[#A47A2D]" />
                    </div>
                    Top 1% Scholar
                  </div>
                </div>

                <a
                  href="mailto:josh.dizon.aguiluz25@gmail.com"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#A47A2D] hover:bg-[#FFA51F] text-white rounded-2xl font-black text-lg transition-transform hover:-translate-y-1 shadow-lg mt-auto"
                >
                  <Mail className="w-5 h-5" /> Contact Me
                </a>
              </div>

              {/* Custom Desktop Divider */}
              <div className="hidden lg:block absolute left-[45%] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#A47A2D]/40 to-transparent" />

              {/* Right Column — Professional Summary */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                  <div className="w-14 h-14 bg-[#A47A2D] rounded-xl flex items-center justify-center shadow-lg rotate-3">
                    <Briefcase className="text-white w-7 h-7 -rotate-3" />
                  </div>
                  <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-2xl md:text-3xl lg:text-4xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                    Professional <span className="text-[#A47A2D]">Summary</span>
                  </h2>
                </div>

                <p className="text-lg lg:text-xl xl:text-2xl font-medium text-[#521D07]/90 dark:text-[#B8B0A6] leading-relaxed mb-12 text-center lg:text-left">
                  Motivated <span className="text-[#A47A2D] font-black">BS Information Technology</span> student and{' '}
                  <span className="text-[#A47A2D] font-black">Top 1% Scholar</span> seeking a Backend Developer internship.
                  I leverage Full-Stack capabilities in{' '}
                  <span className="bg-[#A47A2D]/10 px-2 py-1 rounded-md font-black text-[#A47A2D] border border-[#A47A2D]/20">Node.js</span>,{' '}
                  <span className="bg-[#A47A2D]/10 px-2 py-1 rounded-md font-black text-[#A47A2D] border border-[#A47A2D]/20">Angular</span>, and{' '}
                  <span className="bg-[#A47A2D]/10 px-2 py-1 rounded-md font-black text-[#A47A2D] border border-[#A47A2D]/20">Flutter</span>{' '}
                  to build efficient, scalable systems while driving rapid technical growth.
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-auto">
                  {quickStats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="bg-[#F5EBD9] dark:bg-[#1A1715] rounded-2xl p-6 text-center border border-[#A47A2D]/30 shadow-sm flex flex-col justify-center gap-1"
                    >
                      <div className="text-3xl lg:text-4xl font-black text-[#A47A2D]">{stat.value}</div>
                      <div className="text-sm font-black text-[#521D07] dark:text-[#E2E8F0] uppercase tracking-wide">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ===== SECTION 2: Technical Skills — Large Pie Chart ===== */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#A47A2D] rounded-2xl flex items-center justify-center border-2 border-[#521D07] shadow-[4px_4px_0px_#521D07]">
                <Terminal className="text-white w-7 h-7" />
              </div>
              <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-2xl md:text-4xl lg:text-5xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                Technical <span className="text-[#A47A2D]">Skills</span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#252220] rounded-[24px] md:rounded-[32px] border-4 border-[#A47A2D] p-4 md:p-8 lg:p-14"
          >
            <SkillsPieChart />
          </motion.div>
        </section>

        {/* ===== SECTION 3: Professional Journey — Zigzag Timeline with Images ===== */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#A47A2D] rounded-2xl flex items-center justify-center border-2 border-[#521D07] shadow-[4px_4px_0px_#521D07]">
                <GraduationCap className="text-white w-7 h-7" />
              </div>
              <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-2xl md:text-4xl lg:text-5xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                Professional <span className="text-[#A47A2D]">Journey</span>
              </h2>
            </div>
          </motion.div>

          {/* Custom responsive styles for timeline since Tailwind responsive classes not in build */}
          <style>{`
            .tl-mobile { display: block; }
            .tl-desktop { display: none; }
            .tl-line { position: absolute; top: 0; bottom: 0; left: 16px; transform: none; }
            .tl-entries { display: flex; flex-direction: column; gap: 40px; position: relative; z-index: 1; }
            @media (min-width: 768px) {
              .tl-mobile { display: none !important; }
              .tl-desktop { display: grid !important; }
              .tl-line { left: 50% !important; transform: translateX(-50%) !important; }
              .tl-entries { gap: 60px !important; }
            }
          `}</style>

          {/* Timeline — responsive: stacked on mobile, zigzag on md+ */}
          <div className="relative max-w-5xl mx-auto">

            {/* Center vertical line */}
            <div
              className="tl-line"
              style={{
                width: '4px',
                background: 'linear-gradient(to bottom, #A47A2D, #D4AF37, #A47A2D)',
                borderRadius: '4px',
                zIndex: 0,
              }}
            />

            <div className="tl-entries">
              {timeline.map((item, idx) => {
                const imageOnLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    {/* === MOBILE layout (< md): stacked card with image on top === */}
                    <div className="tl-mobile pl-10 relative">
                      {/* Dot on the left line */}
                      <div className="absolute left-2 top-6 z-10"
                        style={{
                          width: '16px', height: '16px', borderRadius: '50%',
                          backgroundColor: '#D4AF37',
                          border: '3px solid #FDF5E7',
                          boxShadow: '0 0 0 3px #A47A2D',
                        }}
                      />
                      <div className="bg-white dark:bg-[#252220] rounded-2xl border-4 border-[#A47A2D] overflow-hidden shadow-lg">
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                        <div className="p-5">
                          <span className="inline-block px-3 py-1 bg-[#A47A2D] rounded-lg font-mono text-xs font-black text-white uppercase tracking-wider mb-2">{item.year}</span>
                          <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-base font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-1 leading-tight">{item.title}</h3>
                          <p className="text-[#A47A2D] font-bold text-xs mb-2">{item.org}</p>
                          <p className="text-xs font-medium text-[#521D07]/80 dark:text-[#B8B0A6] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>

                    {/* === DESKTOP layout (md+): zigzag grid === */}
                    <div className="tl-desktop" style={{ gridTemplateColumns: 'minmax(0, 1fr) 60px minmax(0, 1fr)', alignItems: 'center' }}>
                      {/* LEFT COLUMN */}
                      <div style={{ gridColumn: '1 / 2' }}>
                        {imageOnLeft ? (
                          <motion.div
                            whileHover={{ scale: 1.04, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                            style={{ borderRadius: '24px', overflow: 'hidden', border: '4px solid #A47A2D', width: '100%' }}
                            className="shadow-xl"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                              className="hover:scale-110 transition-transform duration-700"
                            />
                          </motion.div>
                        ) : (
                          <div
                            className="bg-white dark:bg-[#252220] shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                            style={{ borderRadius: '24px', border: '4px solid #A47A2D', padding: '28px', position: 'relative', overflow: 'hidden', textAlign: 'left' }}
                          >
                            <span style={{ display: 'inline-block', padding: '4px 14px', backgroundColor: '#A47A2D', borderRadius: '10px', marginBottom: '12px' }}>
                              <span className="font-mono text-xs font-black text-white uppercase tracking-wider">{item.year}</span>
                            </span>
                            <h3 style={{ fontFamily: 'Michroma, sans-serif', fontSize: '18px', marginBottom: '4px', lineHeight: 1.3 }} className="font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                              {item.title}
                            </h3>
                            <p style={{ fontSize: '14px', marginBottom: '10px' }} className="text-[#A47A2D] font-bold">{item.org}</p>
                            <p style={{ fontSize: '14px', lineHeight: 1.6 }} className="font-medium text-[#521D07]/80 dark:text-[#B8B0A6]">{item.desc}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A47A2D] to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                          </div>
                        )}
                      </div>

                      {/* CENTER DOT */}
                      <div style={{ gridColumn: '2 / 3', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3, type: 'spring' }}
                          style={{
                            width: '20px', height: '20px', borderRadius: '50%',
                            backgroundColor: '#D4AF37',
                            border: '4px solid #FDF5E7',
                            boxShadow: '0 0 0 4px #A47A2D, 0 0 20px rgba(164,122,45,0.5)',
                          }}
                          className="dark:border-[#1A1715]"
                        />
                      </div>

                      {/* RIGHT COLUMN */}
                      <div style={{ gridColumn: '3 / 4' }}>
                        {imageOnLeft ? (
                          <div
                            className="bg-white dark:bg-[#252220] shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                            style={{ borderRadius: '24px', border: '4px solid #A47A2D', padding: '28px', position: 'relative', overflow: 'hidden', textAlign: 'left' }}
                          >
                            <span style={{ display: 'inline-block', padding: '4px 14px', backgroundColor: '#A47A2D', borderRadius: '10px', marginBottom: '12px' }}>
                              <span className="font-mono text-xs font-black text-white uppercase tracking-wider">{item.year}</span>
                            </span>
                            <h3 style={{ fontFamily: 'Michroma, sans-serif', fontSize: '18px', marginBottom: '4px', lineHeight: 1.3 }} className="font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                              {item.title}
                            </h3>
                            <p style={{ fontSize: '14px', marginBottom: '10px' }} className="text-[#A47A2D] font-bold">{item.org}</p>
                            <p style={{ fontSize: '14px', lineHeight: 1.6 }} className="font-medium text-[#521D07]/80 dark:text-[#B8B0A6]">{item.desc}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A47A2D] to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                          </div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.04, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                            style={{ borderRadius: '24px', overflow: 'hidden', border: '4px solid #A47A2D', width: '100%' }}
                            className="shadow-xl"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                              className="hover:scale-110 transition-transform duration-700"
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* End dot */}
            <div className="flex justify-center mt-8 relative z-[1]">
              <div style={{
                width: '16px', height: '16px', borderRadius: '50%',
                backgroundColor: '#A47A2D',
                boxShadow: '0 0 0 4px #D4AF37, 0 0 20px rgba(164,122,45,0.3)',
              }} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}