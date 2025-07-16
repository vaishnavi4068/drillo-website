'use client';
import React from 'react';

const VentureStudio = ({ videoThumbnail = "/images/venture-studio-video.jpg" }) => {
  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                WHAT IS DRILLO LAUNCH STUDIO?
              </span>
            </h1>
            
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400">
                Your AI co-builder—whether you're starting up or scaling out.
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A venture studio is not a fund. It's not an incubator. And it's not a consulting agency.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A <span className="text-white font-bold">venture studio is a company that builds companies</span>—from the ground up.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                At our AI tech venture studio, we don't just advise or invest. We <span className="text-white font-bold">roll up our sleeves and build</span>: AI products, MVPs, copilots, data infrastructure, and scalable platforms.
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">We partner with:</p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <span className="text-white font-bold">Startups</span>
                      <span className="text-gray-300"> that need a technical co-founder</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <span className="text-white font-bold">Enterprises</span>
                      <span className="text-gray-300"> looking to launch internal AI tools or spin-out ventures</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Unlike traditional VCs, we don't provide funding. We bring <span className="text-white font-bold">technical firepower</span>, product strategy, and execution.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">
                Our model is simple:
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                You bring the vision. We bring the AI tech to make it real.
              </div>
              <div className="text-lg text-cyan-400 font-semibold">
                This is venture building—for the AI era.
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
                FIND OUT MORE
              </button>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-black">
                <img 
                  src={videoThumbnail} 
                  alt="What Is Drillo Launch Studio?"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-xl">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                {/* Top Right Logo/Branding */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-600 p-3 rounded-full">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <div className="space-y-2">
                  <div className="text-sm text-gray-300 uppercase tracking-wider">
                    DRILLO LAUNCH STUDIO
                  </div>
                  <div className="text-lg font-bold text-white">
                    PRESENTS
                  </div>
                  <div className="text-2xl font-black text-white italic">
                    What Is Drillo Launch Studio?
                  </div>
                  <div className="text-lg font-bold text-orange-400">
                    Your AI Co-Builder for Startups & Enterprises
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VentureStudio;