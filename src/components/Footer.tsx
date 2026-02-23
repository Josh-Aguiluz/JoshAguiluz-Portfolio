import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Home, User, Briefcase, BookOpen, Send, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const DARK_BG = '#521D07';
    const LIGHT_TEXT = '#FDF5E7';
    const GOLD = '#A47A2D';

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    const onMove = (e: React.MouseEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
    };

    return (
        <>
            {/* Footer-specific styles — matches danonos.com CSS exactly */}
            <style>{`
        .pf-footer {
          background: linear-gradient(to right, #521D07, #5a2e22);
          color: white;
          padding: 80px 60px 30px;
          position: relative;
          overflow: hidden;
        }
        .pf-footer-content {
          max-width: 1200px;
          margin: 0 auto 50px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 50px;
        }
        .pf-footer-section h3 {
          color: #A47A2D;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 25px 0;
          font-weight: 700;
        }
        .pf-footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .pf-footer-section li {
          margin-bottom: 12px;
        }
        .pf-footer-section a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: 0.3s;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .pf-footer-section a:hover {
          color: #A47A2D;
          padding-left: 5px;
        }
        .pf-social-icons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }
        .pf-social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: 0.3s;
        }
        .pf-social-icon:hover {
          background: #A47A2D;
          transform: translateY(-3px);
        }
        .pf-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 30px;
          text-align: center;
          font-size: 13px;
          opacity: 0.7;
        }
        .pf-footer-about p {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          line-height: 1.7;
          margin: 0 0 0 0;
        }
        @media (max-width: 768px) {
          .pf-footer { padding: 50px 24px 24px; }
          .pf-footer-content { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
          .pf-social-icons { justify-content: center; }
          .pf-footer-section a { justify-content: center; }
        }
      `}</style>

            <footer
                className="pf-footer"
                onMouseMove={onMove}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                {/* Spotlight */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        opacity: hovering ? 1 : 0,
                        transition: 'opacity 0.3s',
                        background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(164,122,45,0.15), transparent 40%)`,
                    }}
                />
                {/* Cursor glow */}
                <div
                    className="pointer-events-none absolute rounded-full"
                    style={{
                        width: 32, height: 32,
                        left: mouse.x, top: mouse.y,
                        transform: 'translate(-50%, -50%)',
                        opacity: hovering ? 0.5 : 0,
                        transition: 'opacity 0.1s',
                        background: LIGHT_TEXT,
                        mixBlendMode: 'difference',
                        filter: 'blur(4px)',
                        zIndex: 50,
                    }}
                />

                {/* Main grid */}
                <div className="pf-footer-content" style={{ position: 'relative', zIndex: 20 }}>

                    {/* Col 1 — About */}
                    <div className="pf-footer-section pf-footer-about">
                        <a href="#home">
                            <img
                                src={logoImg}
                                alt="Josh Aguiluz"
                                style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '50%', marginBottom: 15 }}
                            />
                        </a>
                        <p>Backend Engineer & Full-Stack Developer from Angeles City, Pampanga. Crafting efficient, scalable systems with modern technologies.</p>
                        <div className="pf-social-icons">
                            <a href="https://github.com/Josh-Aguiluz" className="pf-social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/josh-aguiluz-0a150a350/" className="pf-social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:josh.dizon.aguiluz25@gmail.com" className="pf-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div className="pf-footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home"><Home size={14} /> Home</a></li>
                            <li><a href="#about"><User size={14} /> About</a></li>
                            <li><a href="#projects"><Briefcase size={14} /> Projects</a></li>
                            <li><a href="#resume"><BookOpen size={14} /> Resume</a></li>
                            <li><a href="#contact"><Send size={14} /> Contact</a></li>
                        </ul>
                    </div>

                    {/* Col 3 — Contact */}
                    <div className="pf-footer-section">
                        <h3>Contact Me</h3>
                        <ul>
                            <li>
                                <a href="mailto:josh.dizon.aguiluz25@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Mail size={14} /> josh.dizon.aguiluz25@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/" target="_blank" rel="noopener noreferrer">
                                    <MapPin size={14} /> Angeles City, Pampanga
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pf-footer-bottom" style={{ position: 'relative', zIndex: 20 }}>
                    <p>© 2026 Josh Andrei Aguiluz. All rights reserved. Built with React & TypeScript.</p>
                </div>

                {/* Back to top */}
                <button
                    onClick={scrollToTop}
                    aria-label="Back to Top"
                    style={{
                        position: 'fixed', bottom: 130, right: 24,
                        width: 44, height: 44, borderRadius: '50%',
                        backgroundColor: GOLD, color: LIGHT_TEXT,
                        border: `2px solid ${LIGHT_TEXT}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', zIndex: 999,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                    <ArrowUp size={20} strokeWidth={3} />
                </button>
            </footer>
        </>
    );
}
