import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import MagneticButton from './components/MagneticButton';
import ScrollVelocityText from './components/ScrollVelocityText';
import Scene3D from './components/Scene3D';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollYValue(scrollY);
      setScrolled(scrollY > 50);

      // Calculate scroll progress
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollYProgressValue(progress);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'projects', 'resume', 'blog', 'contact'];
      const scrollPosition = scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="relative bg-[#FDF5E7] dark:bg-[#1A1715]">
      {/* 3D Bouncing Sphere */}
      <Scene3D scrollY={scrollYValue} scrollYProgress={scrollYProgressValue} />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Fixed Navigation - ALWAYS ON TOP */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#FDF5E7]/95 dark:bg-[#1A1715]/95 backdrop-blur-sm shadow-lg border-b-4 border-[#A47A2D] py-4'
          : 'bg-[#FDF5E7]/80 dark:bg-[#1A1715]/80 backdrop-blur-sm border-b-4 border-[#A47A2D] py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo with Magnetic Effect */}
            <MagneticButton
              onClick={() => scrollToSection('home')}
              className="flex items-center transition-transform hover:scale-105 bg-transparent border-none text-[18px] md:text-[24px] font-black"
              style={{ fontFamily: 'Michroma, sans-serif' }}
            >
              <span className="text-[#A47A2D]">JA</span>
            </MagneticButton>

            {/* Desktop Navigation with Magnetic Buttons */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <MagneticButton
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{ fontFamily: 'Michroma, sans-serif' }}
                  className={`px-4 py-2 text-[14px] md:text-[16px] font-black uppercase transition-all rounded-full border-none ${activeSection === link.id
                    ? 'bg-[#A47A2D] dark:bg-[#A47A2D] text-white dark:text-[#1A1715]'
                    : 'bg-transparent text-[#521D07] dark:text-[#E2E8F0] hover:bg-[#A47A2D]/20 hover:text-[#FFA51F]'
                    }`}
                >
                  {link.name}
                </MagneticButton>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-[16px] bg-[#A47A2D] dark:bg-[#A47A2D] text-white dark:text-[#1A1715] z-50"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: {
            clipPath: "circle(150% at calc(100% - 40px) 40px)",
            transition: { type: "spring", stiffness: 20, restDelta: 2 }
          },
          closed: {
            clipPath: "circle(0% at calc(100% - 40px) 40px)",
            transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 }
          }
        }}
        className="fixed inset-0 z-40 md:hidden bg-[#FDF5E7] dark:bg-[#1A1715]"
      >
        <div className="h-full flex flex-col justify-center items-center p-6 space-y-6">
          <div className="px-4 sm:px-6 py-8 space-y-3">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                variants={{
                  open: { y: 0, opacity: 1, transition: { delay: 0.2 + index * 0.1 } },
                  closed: { y: 50, opacity: 0 }
                }}
                onClick={() => scrollToSection(link.id)}
                style={{ fontFamily: 'Michroma, sans-serif' }}
                className={`block w-full text-center px-6 py-4 text-[24px] sm:text-[32px] font-black uppercase rounded-[20px] transition-all ${activeSection === link.id
                  ? 'text-[#A47A2D]'
                  : 'text-[#521D07] dark:text-[#E2E8F0]'
                  }`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* STANDARD VERTICAL LAYOUT - SMOOTH SCROLLING */}

      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative w-full min-h-screen py-20 bg-transparent"
      >
        <HomePage />
      </section>

      {/* 2. ABOUT SECTION */}
      <section
        id="about"
        className="relative w-full min-h-screen py-20 bg-transparent"
      >
        <AboutPage />
      </section>

      {/* SCROLL VELOCITY PARALLAX STRIP */}
      <ScrollVelocityText text="BACKEND • FRONTEND • SCALABLE • SECURE" baseVelocity={1} />

      {/* 3. PROJECTS SECTION */}
      <section
        id="projects"
        className="relative w-full min-h-screen py-20 bg-transparent"
      >
        <ProjectsPage />
      </section>

      {/* 4. RESUME SECTION */}
      <section
        id="resume"
        className="relative w-full min-h-screen bg-transparent"
      >
        <ResumePage />
      </section>

      {/* 5. BLOG SECTION */}
      <section
        id="blog"
        className="relative w-full min-h-screen py-20 bg-transparent"
      >
        <BlogPage />
      </section>

      {/* 6. CONTACT SECTION */}
      <section
        id="contact"
        className="relative w-full min-h-screen py-20 bg-transparent"
      >
        <ContactPage />
      </section>

      <Footer />

      {/* Global Scroll Progress Bar */}
      <ScrollProgress />
    </div>
  );
}