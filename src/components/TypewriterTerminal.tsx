import React, { useState, useEffect } from 'react';

export default function TypewriterTerminal() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const phases = [
    '> Initializing System...',
    '> Loading Backend Architecture...',
    "> Josh_Aguiluz.exe Ready."
  ];

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentPhase >= phases.length) return;

    const currentText = phases[currentPhase];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Wait 1 second before moving to next phase
        setTimeout(() => {
          if (currentPhase < phases.length - 1) {
            setCurrentPhase(prev => prev + 1);
          }
        }, 1000);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentPhase]);

  return (
    <div className="font-mono text-[18px] md:text-[20px] text-[#521D07] dark:text-[#A47A2D] mt-6">
      <span>{displayText}</span>
      <span className={`inline-block w-2 h-5 bg-[#521D07] dark:bg-[#A47A2D] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        {showCursor ? '█' : ''}
      </span>
    </div>
  );
}
