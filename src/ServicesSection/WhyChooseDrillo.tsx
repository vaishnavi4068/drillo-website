import React from 'react';

const WhyChooseDrillo = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Drillo
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer active:scale-95">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="12" rx="1" />
                  <path d="M7 4v4" />
                  <path d="M17 4v4" />
                  <path d="M3 10h18" />
                  <circle cx="12" cy="16" r="2" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Comprehensive Project Assessment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In-depth evaluation to ensure strategic alignment and success.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer active:scale-95">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6" />
                  <path d="m21 12-6-3-6 3-6-3" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Process-Driven Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Streamlined methodologies for efficiency and scalability.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-lg hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer active:scale-95">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Expert Team & Resources
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A skilled and dedicated workforce driving innovation and excellence.
            </p>
          </div>
        </div>

        {/* Our Work Samples Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Work Samples
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDrillo;