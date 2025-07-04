'use client';
import React from 'react';

const Enterprise = ({ imagePath = "/images/partner.jpg", imageAlt = "Hands placing puzzle pieces together" }) => {
  return (
    <section className="w-full bg-white py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px] lg:gap-24 gap-8">
        
        {/* Left Content - With More Left Padding */}
        <div className="pl-16 lg:pl-32 xl:pl-48 space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8 leading-tight">
              You Have An Idea. We Help You Launch It As A New Company.
            </h1>
            
            <div className="space-y-6">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Our AI expertise plus your industry knowledge. You know the pain points of your industry. Let's build a company to solve them.
              </p>
              
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                We partner with leading VCs and corporations to solve complex industry challenges. By combining specialized market insights with advanced AI capabilities, we create companies that address real-world problems.
              </p>
            </div>
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm lg:text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
            LET'S BUILD TOGETHER
          </button>
        </div>

        {/* Right Image - Edge to Edge */}
        <div className="w-full h-full lg:pr-0 overflow-hidden">
          <img 
            src={imagePath}
            alt={imageAlt}
            className="w-full h-[150px] lg:h-[500px] object-cover rounded-none m-0 p-0"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Enterprise;