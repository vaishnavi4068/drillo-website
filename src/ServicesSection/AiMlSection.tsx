'use client';

import Image from 'next/image';

const AiMlSection = () => {
  return (
    <section className="bg-[#f7f7f7] w-full py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-[600px]">
          {/* Left: Fixed Content */}
          <div className="flex flex-col justify-center max-w-xl lg:pl-8">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
              AI<span className="text-gray-400">/</span>ML
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Stay cutting-edge with services tailored to support any stage
            </p>
          </div>
          
          {/* Right: Scrollable Content */}
          <div 
            className="overflow-y-auto max-h-[600px] lg:pr-8 space-y-12" 
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* First Card - Artificial Intelligence */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                  Drillo leads in AI and ML consulting, empowering developers, data scientists, and 
                  businesses with cutting-edge solutions. As pioneers in AI implementation, we accelerate 
                  your AI journey with seamless integration, enhancing personalization, security, and 
                  customer engagement.
                </p>
              </div>
              <div className="relative h-80 mx-8 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="/images/AI.jpg"
                  alt="Artificial Intelligence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second Card - Machine Learning */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Machine learning
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                  Drillo leads in AI and ML consulting, empowering developers, data scientists, and 
                  businesses with cutting-edge solutions. As pioneers in AI implementation, we accelerate 
                  your AI journey with seamless integration, enhancing personalization, security, and 
                  customer engagement.
                </p>
              </div>
              <div className="relative h-80 mx-8 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="/images/Machine_learning.jpg"
                  alt="Machine Learning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Third Card - MLOps */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  MLOps
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                  Drillo leads in AI and ML consulting, empowering developers, data scientists, and 
                  businesses with cutting-edge solutions. As pioneers in AI implementation, we accelerate 
                  your AI journey with seamless integration, enhancing personalization, security, and 
                  customer engagement.
                </p>
              </div>
              <div className="relative h-80 mx-8 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="/images/AIOps.jpg"
                  alt="MLOps"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiMlSection;