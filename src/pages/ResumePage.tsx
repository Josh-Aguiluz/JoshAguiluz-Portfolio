import React from 'react';
import { Award, Briefcase, GraduationCap, Download, CheckCircle2, Terminal, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import MagneticButton from '../components/MagneticButton';

export default function ResumePage() {
  const education = [
    {
      year: '2023 - 2027',
      school: 'Holy Angel University',
      degree: 'BS Information Technology',
      details: [
        'Major within Web Development Track',
        'Top 1% Ranking Academic Scholar',
        'Relevant Coursework: Database Systems, Data Structures & Algorithms, Networking',
      ]
    },
    {
      year: '2017 - 2022',
      school: 'Angeles City Science High School',
      degree: 'STEM Strand Badge',
      details: [
        'Graduated with High Honors',
        'Specialization in Advanced Mathematics & Research',
        'Consistent Academic Achiever'
      ]
    },
  ];

  const certifications = [
    'Introduction to PHP Basics - Simplilearn',
    'JavaScript Essentials 1 - Cisco',
    'CCNA: Introduction to Networks - Cisco',
    'CompTIA IT Fundamentals (ITF+) - CompTIA',
    'Digital Marketing - HubSpot Academy',
  ];

  const skills = [
    {
      category: 'Backend Architecture',
      icon: <Terminal className="w-5 h-5" />,
      items: ['Node.js', 'PHP', 'MySQL', 'Firebase', 'Express']
    },
    {
      category: 'Frontend Engineering',
      icon: <Globe className="w-5 h-5" />,
      items: ['React', 'Angular', 'Flutter', 'HTML5/CSS3', 'Tailwind']
    },
    {
      category: 'DevTools',
      icon: <Cpu className="w-5 h-5" />,
      items: ['Git/GitHub', 'VS Code', 'Postman', 'Figma']
    },
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-[#FDF5E7] dark:bg-[#1A1715]">
      <div className="max-w-7xl mx-auto">

        {/* Page Title & Download */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#A47A2D]/10 rounded-full mb-4 border border-[#A47A2D]/20">
              <p className="font-mono text-sm font-bold text-[#A47A2D] uppercase tracking-wider">
                // Professional Profile
              </p>
            </div>
            <h1 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-5xl md:text-7xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
              Resume
            </h1>
          </div>

          <MagneticButton className="px-8 py-4 bg-[#A47A2D] hover:bg-[#FFA51F] text-white rounded-[20px] font-black text-lg flex items-center gap-3 shadow-[8px_8px_0px_#521D07] dark:shadow-[8px_8px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#521D07] transition-all border-2 border-[#521D07] dark:border-[#E2E8F0]">
            <Download className="w-5 h-5" />
            Download PDF
          </MagneticButton>
        </div>

        {/* Hero Summary - Full Width for Impact */}
        <section className="mb-20">
          <SpotlightCard className="bg-white dark:bg-[#252220] p-8 md:p-12 border-4 border-[#A47A2D] dark:border-[#A47A2D] rounded-[32px] relative overflow-hidden">
            <div className="relative z-10">
              <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-3xl md:text-4xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-8">
                Professional <span className="text-[#A47A2D]">Summary</span>
              </h2>
              <p className="text-xl md:text-2xl font-medium text-[#521D07] dark:text-[#B8B0A6] leading-relaxed max-w-5xl">
                Motivated <span className="text-[#A47A2D] font-black underline decoration-4 decoration-[#A47A2D]/20">BS Information Technology</span> student and <span className="text-[#A47A2D] font-black">Top 1% Scholar</span> seeking a Backend Developer internship.
                I leverage Full-Stack capabilities in <span className="bg-[#A47A2D]/10 px-2 rounded font-bold text-[#A47A2D]">Node.js</span>, <span className="bg-[#A47A2D]/10 px-2 rounded font-bold text-[#A47A2D]">Angular</span>, and <span className="bg-[#A47A2D]/10 px-2 rounded font-bold text-[#A47A2D]">Flutter</span> to build efficient, scalable systems while driving rapid technical growth.
              </p>
            </div>
            {/* Watermark */}
            <Briefcase className="absolute -right-12 -bottom-12 w-64 h-64 text-[#A47A2D] opacity-5 rotate-12" />
          </SpotlightCard>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: Education (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#A47A2D] rounded-2xl flex items-center justify-center border-2 border-[#521D07] shadow-[4px_4px_0px_#521D07]">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-3xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                Education
              </h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white dark:bg-[#252220] p-8 md:p-10 rounded-[30px] border-4 border-[#A47A2D] dark:border-[#A47A2D] relative shadow-lg group-hover:shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-[#521D07] dark:text-[#E2E8F0] mb-1">
                          {edu.school}
                        </h3>
                        <p className="font-bold text-[#A47A2D] text-lg">{edu.degree}</p>
                      </div>
                      <div className="px-4 py-2 bg-[#F5EBD9] dark:bg-[#1A1715] rounded-xl border-2 border-[#A47A2D] text-[#521D07] dark:text-[#E2E8F0] font-mono font-bold text-sm whitespace-nowrap">
                        {edu.year}
                      </div>
                    </div>

                    <ul className="grid gap-3">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-lg text-[#521D07] dark:text-[#B8B0A6] font-medium leading-normal">
                          <CheckCircle2 className="w-6 h-6 text-[#A47A2D] flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Skills & Certs (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">

            {/* Skills */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#A47A2D] rounded-2xl flex items-center justify-center border-2 border-[#521D07] shadow-[4px_4px_0px_#521D07]">
                  <Terminal className="text-white w-6 h-6" />
                </div>
                <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-3xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                  Skills
                </h2>
              </div>

              <div className="grid gap-6">
                {skills.map((group, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-[#252220] p-6 rounded-[24px] border-4 border-[#A47A2D] dark:border-[#A47A2D] shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4 border-b-2 border-[#F5EBD9] dark:border-[#3E3632] pb-3">
                      <div className="text-[#A47A2D]">{group.icon}</div>
                      <h4 className="font-black text-[#521D07] dark:text-[#E2E8F0] uppercase text-lg">
                        {group.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, sIdx) => (
                        <span key={sIdx} className="px-4 py-2 bg-[#F5EBD9] dark:bg-[#1A1715] text-[#521D07] dark:text-[#B8B0A6] rounded-xl text-sm font-bold border-2 border-transparent hover:border-[#A47A2D] transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#A47A2D] rounded-2xl flex items-center justify-center border-2 border-[#521D07] shadow-[4px_4px_0px_#521D07]">
                  <Award className="text-white w-6 h-6" />
                </div>
                <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-3xl font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                  Certs
                </h2>
              </div>

              <div className="bg-[#A47A2D] dark:bg-[#252220] p-8 rounded-[30px] border-4 border-[#521D07] dark:border-[#A47A2D] shadow-[8px_8px_0px_#521D07] relative overflow-hidden">
                <ul className="space-y-4 relative z-10">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-white dark:bg-[#A47A2D] mt-2.5 flex-shrink-0" />
                      <span className="text-lg font-bold text-white dark:text-[#E2E8F0] leading-snug">
                        {cert}
                      </span>
                    </li>
                  ))}
                </ul>
                <Award className="absolute -right-4 -bottom-4 w-40 h-40 text-white dark:text-[#A47A2D] opacity-10 rotate-12" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}