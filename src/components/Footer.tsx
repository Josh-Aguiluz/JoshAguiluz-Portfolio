import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Colors for the new dark theme
    const DARK_BG = "#521D07"; // Deep Brown
    const LIGHT_TEXT = "#FDF5E7"; // Light Beige
    const GOLD_ACCENT = "#A47A2D"; // Gold

    // Mouse Tracking State for Spotlight Effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Icon Styles
    const iconContainerStyle = {
        width: '48px',
        height: '48px',
        minWidth: '48px',
        minHeight: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '9999px',
        transition: 'all 0.3s ease',
        backgroundColor: LIGHT_TEXT, // Light background for contrast
        color: DARK_BG, // Dark icon
        border: `2px solid ${GOLD_ACCENT}`
    };

    return (
        <footer
            className="w-full relative z-10 border-t-8 border-[#A47A2D] overflow-hidden group"
            style={{ backgroundColor: DARK_BG, cursor: 'none' }} // Hide default cursor to emphasize spotlight if desired, or keep auto. Keeping 'none' might be too aggressive if no custom cursor exists. Let's stick to 'default' or 'crosshair' but use the spotlight for visibility. Using 'default' for now but the spotlight is the key.
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Spotlight Gradient Overlay */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(164, 122, 45, 0.15), transparent 40%)`
                }}
            />

            {/* Hard Cursor Highlighter (Small glowing dot following mouse) */}
            <div
                className="pointer-events-none absolute w-8 h-8 rounded-full bg-[#FDF5E7] mix-blend-difference opacity-50 blur-sm transition-opacity duration-75 z-50 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    opacity: isHovering ? 1 : 0,
                }}
            />


            <div className="w-full py-20 px-6 lg:px-12 relative z-20"> {/* z-20 to sit above spotlight */}
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                    {/* 1. Logo / Name - Top */}
                    <div className="flex flex-col items-center z-10 mb-12">
                        <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-6">
                            <span style={{ color: LIGHT_TEXT }}>JOSH</span> <span style={{ color: GOLD_ACCENT }}>ANDREI</span>
                        </h2>
                        <div className="h-1 w-24 bg-[#A47A2D] rounded-full mb-8"></div>
                        <p className="font-mono text-sm md:text-base font-bold tracking-widest uppercase" style={{ color: LIGHT_TEXT, opacity: 0.8 }}>
                            Backend Engineer & Full-Stack Developer
                        </p>
                    </div>

                    {/* 2. Copyright - Middle */}
                    <div className="z-10 mb-12">
                        <p className="font-mono text-xs md:text-sm font-medium" style={{ color: LIGHT_TEXT, opacity: 0.6 }}>
                            © 2026 Josh Aguiluz. Built with React.
                        </p>
                    </div>

                    {/* 3. Social Icons - Bottom */}
                    <div className="flex items-center gap-10 z-10 pointer-events-auto"> {/* Ensure clickable */}
                        <a
                            href="https://github.com/Josh-Aguiluz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 shadow-lg hover:shadow-[#A47A2D]/50 relative z-30"
                            style={iconContainerStyle}
                            aria-label="GitHub"
                        >
                            <Github
                                size={24}
                                strokeWidth={2.5}
                                style={{ display: 'block' }}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/josh-aguiluz-0a150a350/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 shadow-lg hover:shadow-[#A47A2D]/50 relative z-30"
                            style={iconContainerStyle}
                            aria-label="LinkedIn"
                        >
                            <Linkedin
                                size={24}
                                strokeWidth={2.5}
                                style={{ display: 'block' }}
                            />
                        </a>
                        <a
                            href="mailto:josh.dizon.aguiluz25@gmail.com"
                            className="hover:scale-110 shadow-lg hover:shadow-[#A47A2D]/50 relative z-30"
                            style={iconContainerStyle}
                            aria-label="Email"
                        >
                            <Mail
                                size={24}
                                strokeWidth={2.5}
                                style={{ display: 'block' }}
                            />
                        </a>

                        {/* Back to Top Button - District Style */}
                        <button
                            onClick={scrollToTop}
                            className="hover:scale-110 shadow-lg hover:shadow-[#FDF5E7]/50 relative z-30"
                            style={{
                                ...iconContainerStyle,
                                backgroundColor: GOLD_ACCENT,
                                color: LIGHT_TEXT,
                                border: `2px solid ${LIGHT_TEXT}`
                            }}
                            aria-label="Back to Top"
                        >
                            <ArrowUp
                                size={24}
                                strokeWidth={3}
                                style={{ display: 'block' }}
                            />
                        </button>
                    </div>

                </div>
            </div>

            {/* Background Decoration (Static) */}
            <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden pointer-events-none opacity-10 z-0">
                <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#A47A2D] rounded-full blur-[100px]" />
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#A47A2D] rounded-full blur-[100px]" />
            </div>
        </footer>
    );
}
