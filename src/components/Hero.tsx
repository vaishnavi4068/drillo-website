'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const cardData = [
  {
    title: 'For Partners',
    description:
      'We craft superior digital and AI-driven experiences to drive meaningful business impact.',
  },
  {
    title: 'For Founders',
    description:
      'We help founders rapidly build and scale with AI-driven digital experiences.',
  },
  {
    title: 'For Enterprise',
    description:
      'Tailored enterprise AI solutions that unlock efficiency and innovation.',
  },
];

const Hero = () => {
  return (
    <section className="w-full min-h-screen text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-7xl w-full text-center flex flex-col items-center space-y-12 gap-20 relative z-20">
        {/* Hero Content */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Unlock the Power of AI
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Empower your business with intelligent, scalable digital solutions.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition">
            Let's Discuss
          </button>
        </div>

        <div className="w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">How we Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white text-gray-900 border border-gray-200 shadow-md rounded-xl p-8 flex flex-col justify-between transition-all duration-500 ease-in-out cursor-pointer min-h-[250px] hover:min-h-[300px]"
                onClick={() => {
                  if (card.title === 'For Partners') {
                    const el = document.getElementById('partners');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.pageYOffset - 20; // 20px offset from top
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  } else if (card.title === 'For Founders') {
                    const el = document.getElementById('services');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.pageYOffset - 20; // 20px offset from top
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  } else if (card.title === 'For Enterprise') {
                    const el = document.getElementById('enterprise');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.pageYOffset - 20; // 20px offset from top
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }
                }}
              >
                <div>
                  <p className="text-lg font-medium mb-2">We work</p>
                  <h2 className="flex items-center justify-center mb-4 gap-4"><p className="text-2xl md:text-3xl font-bold">{card.title}</p> <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-7 group-hover:-rotate-45 border-2 border-black-500 rounded-full transition-all duration-500 ease-in-out" /></h2>
                  <p className="text-base">{card.description}</p>
                </div>

                <div className="mt-6 overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-6">
                  <div className="flex items-center font-semibold">
                    View more
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
