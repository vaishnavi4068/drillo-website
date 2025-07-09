import React from 'react';

const lightbulbIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-2 align-middle">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25h4.5m-4.5 0a3 3 0 01-3-3c0-1.11.61-2.08 1.52-2.6A6.75 6.75 0 1119 14.25a3 3 0 01-3 3m-4.5 0v1.5a2.25 2.25 0 004.5 0v-1.5" />
  </svg>
);

const BlogSection: React.FC = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-blue-500 to-blue-400 py-20 min-h-[220px]">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">BLOG</h1>
          <p className="text-lg md:text-xl font-medium text-white mb-4">
            Deep learning on startup building. Insights and news from the AI Fund ecosystem.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-row flex-nowrap items-center gap-8 overflow-x-auto">
          <button className="flex items-center font-bold text-blue-900 text-base md:text-lg focus:outline-none whitespace-nowrap">
            {lightbulbIcon}
            <span className="uppercase tracking-wide">All</span>
          </button>
          <button className="flex items-center font-bold text-gray-400 text-base md:text-lg focus:outline-none whitespace-nowrap">
            {lightbulbIcon}
            <span className="uppercase tracking-wide">Insights</span>
          </button>
          <button className="flex items-center font-bold text-gray-400 text-base md:text-lg focus:outline-none whitespace-nowrap">
            {lightbulbIcon}
            <span className="uppercase tracking-wide">Portfolio News</span>
          </button>
          <button className="flex items-center font-bold text-gray-400 text-base md:text-lg focus:outline-none whitespace-nowrap">
            {lightbulbIcon}
            <span className="uppercase tracking-wide">Fund News</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogSection; 