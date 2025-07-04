'use client';
import React from 'react';

const Founders = ({ imagePath = "/images/block.avif", imageAlt = "Block illustration" }) => {
  return (
    <>
      <section id='services' className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-teal-700 mb-8 leading-tight">
                  Build With Us
                </h1>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-teal-800 mb-6 leading-relaxed">
                  We partner with entrepreneurs to create the great AI companies of tomorrow.
                </h2>
                
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
                  Building a startup is hard. From startup veterans and seasoned investors, to 
                  machine learning experts and talent leaders, our team is ready to fill in the gaps 
                  around your expertise. We are here to support you so your company succeeds.
                </p>
              </div>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm lg:text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
                LET'S BUILD TOGETHER
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-md">
                <img 
                  src={imagePath} 
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Proven Process Section - Redesigned to match Figma */}
      <section className="w-full bg-white py-16 px-4 mt-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Blue container with white background inside */}
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-16 text-center">
              A Proven Process For Building Companies
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12">
            
              {/* Stage Label */}
              <div className="text-center mb-12">
                <span className="text-lg font-semibold text-gray-600 bg-gray-100 px-6 py-3 rounded-full">
                  Stage
                </span>
              </div>
              
              {/* Process Flow */}
              <div className="relative max-w-4xl mx-auto">
                
                {/* Top Row - Steps 1-3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                  
                  {/* Step 1: Ideas */}
                  <div className="flex flex-col items-center relative">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
                        {/* Light bulb icon */}
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        {/* Blue quarter circle arc - top right */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-4 border-blue-500 border-l-transparent border-b-transparent rounded-full"></div>
                      </div>
                      
                      {/* Horizontal dotted line to next step */}
                      <div className="hidden md:block absolute top-10 left-20 w-16">
                        <div className="flex justify-between items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-600 text-sm tracking-wide text-center uppercase">
                      IDEAS
                    </div>
                  </div>

                  {/* Step 2: Validate */}
                  <div className="flex flex-col items-center relative">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
                        {/* Magnifying glass with chart icon */}
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        {/* Blue quarter circle arc */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-4 border-blue-500 border-l-transparent border-b-transparent rounded-full"></div>
                        {/* Step number */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                      </div>
                      
                      {/* Horizontal dotted line to next step */}
                      <div className="hidden md:block absolute top-10 left-20 w-16">
                        <div className="flex justify-between items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-600 text-sm tracking-wide text-center uppercase">
                      VALIDATE
                    </div>
                  </div>

                  {/* Step 3: Recruit */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
                        {/* People/handshake icon */}
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {/* Blue quarter circle arc */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-4 border-blue-500 border-l-transparent border-b-transparent rounded-full"></div>
                        {/* Step number */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-600 text-sm tracking-wide text-center uppercase">
                      RECRUIT FOUNDER<br/>& ADVISOR
                    </div>
                  </div>
                </div>

                {/* Vertical dotted connection */}
                <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>

                {/* Bottom Row - Steps 4-6 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  
                  {/* Step 4: Build */}
                  <div className="flex flex-col items-center relative">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
                        {/* Gear/tools icon */}
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {/* Blue quarter circle arc */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-4 border-blue-500 border-l-transparent border-b-transparent rounded-full"></div>
                        {/* Step number */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                      </div>
                      
                      {/* Horizontal dotted line to next step */}
                      <div className="hidden md:block absolute top-10 left-20 w-16">
                        <div className="flex justify-between items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-600 text-sm tracking-wide text-center uppercase">
                      BUILD WITH FOUNDER
                    </div>
                  </div>

                  {/* Step 5: Pre-seed */}
                  <div className="flex flex-col items-center relative">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
                        {/* Hand/growth icon */}
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                        {/* Blue quarter circle arc */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-4 border-blue-500 border-l-transparent border-b-transparent rounded-full"></div>
                        {/* Step number */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          4
                        </div>
                      </div>
                      
                      {/* Horizontal dotted line to next step */}
                      <div className="hidden md:block absolute top-10 left-20 w-16">
                        <div className="flex justify-between items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-600 text-sm tracking-wide text-center uppercase">
                      PRE-SEED GROWTH
                    </div>
                  </div>

                  {/* Step 6: Scale */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
                        {/* Plant/tree growth icon */}
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                        {/* Yellow quarter circle arc for final step */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-4 border-yellow-500 border-l-transparent border-b-transparent rounded-full"></div>
                        {/* Step number */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          5
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-600 text-sm tracking-wide text-center uppercase">
                      SEED, GROWTH, SCALE
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Details Section */}
              <div className="mt-16 space-y-8 text-left">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Business Idea Validation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team of startup builders performs market and technical validation on the idea.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    Recruit Future CEO (Founder in Residence) and Board Member (Venture Advisor)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Next, we bring on a seasoned entrepreneur with domain expertise as a Founder in Residence (they will be the CEO upon launch) and pair them with an AI Fund Builder and Venture Advisor (who will be a future board member after launch).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Build with Founder in Residence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Founders in Residence spend three months with us developing the idea and iterating rapidly to de-risk the new business through in-depth business analysis and customer research. Technical validation includes AI model selection and product prototyping. The Founder in Residence collaborates very closely on this with our in-house builders, the Venture Advisor, and our ML engineering team to structure a go-to-market strategy and product proof of concept.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Pre-Seed Launch</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If the Build stage is successful, we stand the company up with a pre-seed investment of up to $1 million.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Our recruiting team will help assemble your core team (including co-founder matchmaking if needed) and the building team will support you in getting early customer traction, building the product, and preparing for seed financing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founders;