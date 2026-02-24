import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    live: string;
    image: string;
}

interface GlassCardDeckProps {
    projects: Project[];
}

export default function GlassCardDeck({ projects }: GlassCardDeckProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const n = projects.length;

    const prev = (activeIndex - 1 + n) % n;
    const next = (activeIndex + 1) % n;

    const goTo = useCallback(
        (index: number) => setActiveIndex(index),
        []
    );
    const goPrev = useCallback(
        () => setActiveIndex((i) => (i - 1 + n) % n),
        [n]
    );
    const goNext = useCallback(
        () => setActiveIndex((i) => (i + 1) % n),
        [n]
    );

    // Position config for each card role
    const getCardStyle = (index: number) => {
        if (index === activeIndex) {
            return {
                x: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
                zIndex: 30,
            };
        }
        if (index === prev) {
            return {
                x: '-40%',
                scale: 0.82,
                rotate: -6,
                opacity: 1,
                zIndex: 20,
            };
        }
        if (index === next) {
            return {
                x: '40%',
                scale: 0.82,
                rotate: 6,
                opacity: 1,
                zIndex: 20,
            };
        }
        // Hidden card
        return {
            x: 0,
            scale: 0.7,
            rotate: 0,
            opacity: 0,
            zIndex: 10,
        };
    };

    return (
        <div className="glass-deck-container">
            {/* Fanned cards area */}
            <div className="glass-deck-fan">
                {projects.map((project, index) => {
                    const style = getCardStyle(index);
                    const isActive = index === activeIndex;
                    const isPeeking = index === prev || index === next;

                    return (
                        <motion.div
                            key={index}
                            className={`glass-card ${isActive ? 'glass-card-active' : ''}`}
                            animate={{
                                x: style.x,
                                scale: style.scale,
                                rotate: style.rotate,
                                opacity: style.opacity,
                                zIndex: style.zIndex,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 26,
                                mass: 0.9,
                            }}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                margin: '0 auto',
                                top: 0,
                                transformOrigin: 'center bottom',
                                cursor: isPeeking ? 'pointer' : isActive ? 'grab' : 'default',
                                pointerEvents: isActive || isPeeking ? 'auto' : 'none',
                            }}
                            onClick={() => {
                                if (index === prev) goPrev();
                                if (index === next) goNext();
                            }}
                            drag={isActive ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.6}
                            onDragEnd={(_, info) => {
                                if (info.offset.x < -80) goNext();
                                else if (info.offset.x > 80) goPrev();
                            }}
                            whileDrag={isActive ? { scale: 1.03, cursor: 'grabbing' } : undefined}
                        >
                            {/* Card Image */}
                            <div className="glass-card-image">
                                <img src={project.image} alt={project.title} />
                                <div className="glass-card-image-overlay" />
                            </div>

                            {/* Card Content — only fully rendered on active card */}
                            <div className="glass-card-content">
                                <div className="glass-card-title">{project.title}</div>

                                {isActive && (
                                    <>
                                        <div className="glass-card-desc">{project.description}</div>
                                        <div className="glass-card-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="glass-card-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="glass-card-links">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="glass-card-link"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Code</span>
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="glass-card-link"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live</span>
                                            </a>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation controls */}
            <div className="glass-deck-nav">
                <button
                    className="glass-deck-arrow"
                    onClick={goPrev}
                    aria-label="Previous project"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="glass-deck-dots">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            className={`glass-deck-dot ${i === activeIndex ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    className="glass-deck-arrow"
                    onClick={goNext}
                    aria-label="Next project"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
