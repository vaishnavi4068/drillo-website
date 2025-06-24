import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[#f7f7f7] w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockups */}
          <div className="flex gap-4 justify-center relative">
            <div className="relative">
              <Image
                src="/images/home.png"
                alt="Phone mockup 1"
                className="rounded-3xl shadow-2xl border-4 border-black -translate-y-5"
                width={240}
                height={520}
                priority
              />
            </div>
            <div className="relative">
              <Image
                src="/images/program_details.png"
                alt="Phone mockup 2"
                className="rounded-3xl shadow-2xl border-4 border-black translate-y-5"
                width={240}
                height={520}
                priority
              />
            </div>
          </div>
                             
          {/* Right: Text Content */}
          <div className="flex flex-col items-start max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Platform for influencers to find campaigns
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Drillo, we empower businesses with cutting-edge AI solutions that enhance operational efficiency, data security, and business intelligence. Our goal is to make data accessible and actionable without compromising privacy.
            </p>
            <div className="flex items-center text-lg font-medium text-gray-900 cursor-pointer group">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="group-hover:text-gray-700 transition-colors">View case studies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;