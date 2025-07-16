import React from 'react';

const SupportForm: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/puzzle.jpg')" }}      
    >
      <div className="max-w-7xl w-full mx-auto px-8 py-16 flex flex-col md:flex-row gap-12">
        {/* Left Side: Heading and Description */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-pink-400 text-xl font-bold mb-2">Go further, faster — with the backing of people who've been there.</h2>
          <h1 className="text-white text-6xl md:text-7xl font-extrabold leading-tight mb-2">
            GO FURTHE<span className="text-pink-200">R</span>
          </h1>
          <h1 className="text-white text-6xl md:text-7xl font-extrabold italic mb-4">
            "<span className="text-pink-200">FASTER</span>"
          </h1>
          <p className="text-white text-base md:text-lg max-w-xl">
            We've scaled startups, raised investment, built tech, and earned our share of battle scars. We know how hard it is to build something from nothing, especially in AI. That's why we created the EHE Founder Programme: to give early-stage AI founders a faster route to growth, with the right support from day one.
          </p>
        </div>
        {/* Right Side: Form */}
        <div className="flex-1 bg-black bg-opacity-30 rounded-lg p-8 flex flex-col justify-center">
          <h2 className="text-pink-400 text-2xl font-bold mb-6 text-center md:text-left">SEEKING SUPPORT?</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-white text-sm font-semibold mb-1">FIRST NAME<span className="text-pink-400">*</span></label>
                <input type="text" className="w-full border border-white rounded-md py-3 px-4 text-white bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="flex-1">
                <label className="block text-white text-sm font-semibold mb-1">LAST NAME<span className="text-pink-400">*</span></label>
                <input type="text" className="w-full border border-white rounded-md py-3 px-4 text-white bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-1">JOB TITLE</label>
              <input type="text" className="w-full border border-white rounded-md py-3 px-4 text-white bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-1">EMAIL<span className="text-pink-400">*</span></label>
              <input type="email" className="w-full border border-white rounded-md py-3 px-4 text-white bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-1">MOBILE PHONE NUMBER</label>
              <div className="flex gap-2">
                <select className="border border-white rounded-md py-3 px-2 bg-white text-gray-700 focus:outline-none">
                  <option>GB</option>
                  <option>US</option>
                  <option>IN</option>
                  {/* Add more country codes as needed */}
                </select>
                <input type="tel" className="flex-1 border border-white rounded-md py-3 px-4 text-white bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="+44" />
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-6">
              <label className="block text-white text-sm font-semibold mb-2">25%</label>
              <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '25%' }}></div>
              </div>
            </div>
            {/* Next Button */}
            <div className="flex justify-end mt-6">
              <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-3 px-8 rounded-md shadow">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportForm;