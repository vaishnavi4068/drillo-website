'use client';
import React from 'react';

const Founders = ({ imagePath = "/images/block.avif", imageAlt = "Block illustration" }) => {
  return (
    <>
      <section id='services' className="w-full bg-black text-white py-16 pt-24 relative overflow-hidden">
        {/* Overlay for consistency with ScaleupsSection */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-center min-h-[400px] lg:gap-24 gap-8">
          {/* Left Content - With More Left Padding */}
          <div className="pl-16 lg:pl-32 xl:pl-48 space-y-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Not Just a Head Start — A Smart Start
              </h1>
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  We've built AI products from scratch, scaled early-stage teams, and taken startups from napkin sketches to working systems and working systems to smarter systems. We know what it really takes to turn vision into velocity — especially when you're building with AI.
                </p>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  That's why we created <span className="font-bold text-white">Drillo Launch Studio</span> — to give early-stage founders the strategy, speed, structure, and execution power they need to launch smarter.
                </p>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  This isn't theory. It's traction. <span className="font-bold text-white">You bring the ambition. We bring the build.</span>
                </p>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  Drillo Launch Studio helps founders go from first idea to fully working AI product, fast. We bring the strategy, structure, and deep execution it takes to build what matters — not just ship demos. <span className="font-bold text-white">Because in this game, speed is survival — but smart speed wins.</span>
                </p>
              </div>
            </div>
            <button className="bg-white text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide hover:bg-gray-100">
              LET'S BUILD TOGETHER
            </button>
          </div>
          {/* Right Image - Edge to Edge */}
          <div className="w-full h-full lg:pr-0 overflow-hidden col-start-1 lg:col-start-2 row-start-2 lg:row-start-1 lg:justify-self-end">
            <img 
              src={imagePath} 
              alt={imageAlt}
              className="w-full h-[150px] lg:h-[500px] object-cover rounded-none m-0 p-0 lg:rounded-l-2xl"
              style={{ maxWidth: '100vw', objectPosition: 'center right' }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Founders;