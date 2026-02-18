import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 pill-button px-6 py-4 bg-[#5A6B7A] dark:bg-[#7A8A9D] text-[#FFFCF9] dark:text-[#1A1F2E] text-[24px] flex items-center gap-3 hover:scale-110 transition-transform shadow-2xl"
      aria-label="Toggle theme"
    >
      <div className="w-8 h-8 rounded-full bg-[#E8C547] dark:bg-[#4A5568]"></div>
      <span className="hidden sm:inline font-black uppercase">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
}