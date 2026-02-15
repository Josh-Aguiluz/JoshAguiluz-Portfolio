import React, { useState } from 'react';

// Sample data - You can add as many as you want here!
const ALL_BLOG_POSTS = [
  {
    id: 1,
    date: 'Jan 2024',
    readTime: '5 min read',
    title: 'MY JOURNEY TO TOP 1%',
    excerpt: 'How I achieved top rankings in web development through consistent learning, strategic goal-setting, and a growth mindset.',
    tags: ['CAREER', 'LEARNING', 'MOTIVATION']
  },
  {
    id: 2,
    date: 'Dec 2023',
    readTime: '8 min read',
    title: 'BUILDING WITH FLUTTER',
    excerpt: 'Lessons learned from developing cross-platform mobile applications. Performance optimization, state management, and best practices.',
    tags: ['FLUTTER', 'MOBILE', 'DART']
  },
  {
    id: 3,
    date: 'Nov 2023',
    readTime: '10 min read',
    title: 'BACKEND ARCHITECTURE',
    excerpt: 'Exploring scalable backend system design patterns, API optimization strategies, and database performance tuning.',
    tags: ['BACKEND', 'NODE.JS', 'ARCHITECTURE']
  },
  {
    id: 4,
    date: 'Oct 2023',
    readTime: '7 min read',
    title: 'SEO OPTIMIZATION',
    excerpt: 'A comprehensive guide to modern SEO strategies including technical SEO and performance improvements.',
    tags: ['SEO', 'WEB DEV', 'MARKETING']
  },
  {
    id: 5,
    date: 'Sep 2023',
    readTime: '6 min read',
    title: 'THE ART OF UI DESIGN',
    excerpt: 'Understanding color theory, typography, and spacing to create visually stunning and user-friendly interfaces.',
    tags: ['DESIGN', 'UI/UX', 'CREATIVE']
  },
  {
    id: 6,
    date: 'Aug 2023',
    readTime: '12 min read',
    title: 'TYPESCRIPT MASTERY',
    excerpt: 'Deep dive into advanced TypeScript features, generics, and utility types for safer codebases.',
    tags: ['TYPESCRIPT', 'CODING', 'GUIDE']
  }
];

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4;

  // Calculate which posts to show
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ALL_BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);

  // Handlers
  const totalPages = Math.ceil(ALL_BLOG_POSTS.length / postsPerPage);
  
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section className="py-20 bg-[#FDF5E7] dark:bg-[#1A1715]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[40px] md:text-[56px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-4">
            Latest Thoughts
          </h2>
          <p className="font-mono text-[18px] text-[#A47A2D] dark:text-[#B8B0A6]">
            // INSIGHTS & LEARNINGS
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 min-h-[600px]">
          {currentPosts.map((post) => (
            <div 
              key={post.id}
              className="sticker-card bg-white dark:bg-[#252220] p-8 border-4 border-[#A47A2D] dark:border-[#A47A2D] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 animate-in fade-in slide-in-from-bottom-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 font-mono text-sm text-[#A47A2D] dark:text-[#B8B0A6]">
                  <span>📅 {post.date}</span>
                  <span>•</span>
                  <span>☕ {post.readTime}</span>
                </div>
                
                <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[28px] leading-tight font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-4">
                  {post.title}
                </h3>
                
                <p className="text-[18px] font-bold text-[#521D07]/80 dark:text-[#B8B0A6] mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#F5EBD9] dark:bg-[#1A1715] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-lg text-xs font-black text-[#521D07] dark:text-[#E2E8F0]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-[#A47A2D] font-black hover:gap-4 transition-all">
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-8">
          <button 
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`pill-button px-8 py-3 bg-[#521D07] dark:bg-[#521D07] text-white text-[18px] 
              ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FFA51F] hover:scale-105'}`}
          >
            ← Previous
          </button>
          
          <span className="font-mono text-[18px] font-bold text-[#521D07] dark:text-[#E2E8F0]">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={`pill-button px-8 py-3 bg-[#521D07] dark:bg-[#521D07] text-white text-[18px]
              ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FFA51F] hover:scale-105'}`}
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
}