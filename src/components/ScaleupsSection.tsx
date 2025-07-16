'use client';
import React from 'react';

const ScaleupsSection = ({ videoBackground = "/videos/scaleups-bg.mp4" }) => {
  return (
    <section id="scaleups" className="w-full bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-30"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                We Invest in What We Build
              </span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                Your product's working. The team's shipping. Revenue's coming in. But there's this <em className="text-pink-400">one idea</em> you keep circling back to.
              </p>
              
              <div className="space-y-4 text-lg text-gray-300">
                <p>Maybe it's an AI-powered feature. Maybe it's a new product line. Maybe it's something your team keeps saying "after the next release."</p>
                <p>The truth? You don't have the bandwidth. You don't have the AI depth. And no one's got time to derail the roadmap.</p>
                <p className="text-xl font-bold text-white">That's where we come in.</p>
              </div>
            </div>

            {/* We're Not Here to Pitch Section */}
            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-black text-white flex items-center gap-3">
                <span className="text-4xl">🧠</span>
                We're Not Here to Pitch. We're Here to Build.
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  <span className="font-bold text-white">Drillo Launch Studio</span> slots into your team like a covert build squad. We don't need babysitting. We don't need to present 50 slides. We just need a clear idea, access to your data, and a green light.
                </p>
                <p className="text-xl font-bold text-white">
                  We'll scope it, build it, and put it in front of real users—fast. No bloat. No excuses. Just working software.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* What This Looks Like Section */}
            <div className="bg-gray-900 bg-opacity-80 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🚧</span>
                What This Looks Like in Real Life
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">
                    That internal AI tool your ops lead's been dreaming of? <span className="text-white font-bold">We'll build the first version.</span>
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">
                    That experimental product your board loves but no one owns? <span className="text-white font-bold">We'll get it live.</span>
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">
                    That ML-powered engine your engineers don't have time for? <span className="text-white font-bold">We'll train it and test it.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-blue-900 bg-opacity-60 rounded-2xl p-8 backdrop-blur-sm border-l-4 border-blue-400">
              <blockquote className="text-xl font-bold text-white italic leading-relaxed">
                "They built the thing our team kept postponing for a year. It went live in ten weeks."
              </blockquote>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center">
              <p className="text-xl text-white mb-4">
                If there's something you know you should be building—but can't get to—
              </p>
              <p className="text-2xl font-black text-white mb-6">
                Hand it to us.
              </p>
              <button className="bg-white text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide hover:bg-gray-100">
                LET'S SHIP IT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleupsSection;