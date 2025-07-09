import React from 'react';

const lightbulbIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-2 align-middle">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25h4.5m-4.5 0a3 3 0 01-3-3c0-1.11.61-2.08 1.52-2.6A6.75 6.75 0 1119 14.25a3 3 0 01-3 3m-4.5 0v1.5a2.25 2.25 0 004.5 0v-1.5" />
  </svg>
);

const searchIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
  </svg>
);

const PortfolioSection: React.FC = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-blue-500 to-blue-400 py-20 min-h-[320px]">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">PORTFOLIO</h1>
          <p className="text-lg md:text-xl font-medium text-white mb-4">Building the future with AI.</p>
          <p className="text-base md:text-lg text-white max-w-4xl">
            We empower founders to take on complex challenges, from mental health and relationships, to speech translation and financial risk modeling. Our founders are creating solutions for maritime shipping, AI governance, retail, education and transforming software development with machine learning.
          </p>
        </div>
      </section>

      {/* Filter Tabs and Search Bar */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-row flex-nowrap items-center justify-between gap-8 overflow-x-auto">
          {/* Tabs */}
          <div className="flex flex-row flex-nowrap gap-8 items-center">
            <button className="flex items-center font-bold text-blue-900 text-base md:text-lg focus:outline-none whitespace-nowrap">
              {lightbulbIcon}
              <span className="uppercase tracking-wide">All Companies</span>
            </button>
            <button className="flex items-center font-bold text-gray-400 text-base md:text-lg focus:outline-none whitespace-nowrap">
              {lightbulbIcon}
              <span className="uppercase tracking-wide">Applications</span>
            </button>
            <button className="flex items-center font-bold text-gray-400 text-base md:text-lg focus:outline-none whitespace-nowrap">
              {lightbulbIcon}
              <span className="uppercase tracking-wide">Infrastructure & Developer Tools</span>
            </button>
          </div>
          {/* Search Bar */}
          <form className="w-full max-w-[400px] flex items-center relative ml-8">
            <input
              type="text"
              placeholder="Search Companies"
              className="w-full border border-gray-300 rounded-lg py-4 px-6 pr-12 text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              {searchIcon}
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection; 