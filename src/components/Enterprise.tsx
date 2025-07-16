'use client';
import React from 'react';

const Enterprise = ({ imagePath = "/images/partner.jpg", imageAlt = "Hands placing puzzle pieces together", videoBackground = "/videos/enterprise-bg.mp4" }) => {
  return (
    <section id="enterprise" className="w-full bg-black text-white py-16 px-4 relative overflow-hidden">
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                It Always Starts With a Deck
              </span>
            </h1>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                An AI idea with a promising ROI. A slide titled "Next Steps." A plan to revolutionize a process, unlock a new product, or automate what's broken.
              </p>
              <div className="space-y-4 text-lg text-gray-300">
                <p>People nod. They like it. But then comes the usual:</p>
                <p className="italic text-gray-400">"Let's socialize it." "Let's bring it up in the next steering meeting." "Let's add it to the roadmap."</p>
                <p>You've seen this play out before. The momentum fades. Ownership gets blurry. The idea dies—slowly, quietly, and predictably.</p>
              </div>
            </div>

            {/* That's Where We Come In Section */}
            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-black text-white flex items-center gap-3">
                <span className="text-4xl">🏢</span>
                That's Where We Come In
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p><span className="font-bold text-white">Drillo Launch Studio</span> is built for the ideas that deserve more than another slide.</p>
                <p>We're not here to present. We're here to build.</p>
                <p>You bring the idea that's been circling in your org for months. We bring the engineers, product minds, and AI talent to bring it to life.</p>
                <p>No 40-page strategy decks. No waiting on internal approvals. Just a team that knows how to move—and moves with you.</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* We've Helped Enterprise Teams Section */}
            <div className="bg-gray-900 bg-opacity-80 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                We've Helped Enterprise Teams:
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Turn half-buried ideas into working pilots in 8–12 weeks</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Build internal AI tools that reduce real cost and time</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Deliver proof-of-concepts that earn buy-in through usage—not theory</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Ship products that internal teams didn't have capacity for</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-blue-900 bg-opacity-60 rounded-2xl p-8 backdrop-blur-sm border-l-4 border-blue-400">
              <blockquote className="text-xl font-bold text-white italic leading-relaxed">
                "It wasn't another pilot that sat in testing forever. Drillo shipped it—and now it's part of how we work."
              </blockquote>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-center">
              <p className="text-xl text-white mb-4">
                You don't need more pitch slides. You need the thing built.
              </p>
              <p className="text-2xl font-black text-white mb-6">
                Let's skip the ceremony and get to the code.
              </p>
              <button className="bg-white text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide hover:bg-gray-100">
                LET'S BUILD TOGETHER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;