'use client';

import { useState } from 'react';

const SpecializedDomainSection = () => {
  const [activeTab, setActiveTab] = useState('AI/ML');

  const domains = [
    {
      id: 'AI/ML',
      name: 'AI/ML',
      content: {
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Stay cutting-edge with AI/ML services tailored to support any stage of your journey. From intelligent automation to predictive analytics, we help you harness the power of artificial intelligence.',
        features: [
          'Custom AI model development',
          'Machine learning pipeline optimization',
          'Natural language processing',
          'Computer vision solutions',
          'MLOps implementation'
        ]
      }
    },
    {
      id: 'Data Engineering',
      name: 'Data Engineering',
      content: {
        title: 'Data Engineering Solutions',
        description: 'Build robust data infrastructure that scales with your business. Our data engineering services ensure your data is clean, accessible, and ready for analysis.',
        features: [
          'Data pipeline architecture',
          'ETL/ELT process optimization',
          'Real-time data streaming',
          'Data warehouse design',
          'Cloud data platform migration'
        ]
      }
    },
    {
      id: 'Cloud Engineering',
      name: 'Cloud Engineering',
      content: {
        title: 'Cloud Engineering & DevOps',
        description: 'Accelerate your cloud transformation with our comprehensive cloud engineering services. From migration to optimization, we ensure your cloud infrastructure is secure and scalable.',
        features: [
          'Cloud architecture design',
          'Kubernetes orchestration',
          'CI/CD pipeline automation',
          'Infrastructure as Code',
          'Cloud security implementation'
        ]
      }
    }
  ];

  const activeContent = domains.find(domain => domain.id === activeTab)?.content;

  return (
    <section className="bg-white w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore our specialized domain
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-2 inline-flex">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onMouseEnter={() => setActiveTab(domain.id)}
                onClick={() => setActiveTab(domain.id)}
                className={`px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeTab === domain.id
                    ? 'bg-blue-500 text-white shadow-md transform translate-y-[-2px]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {domain.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-500">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {activeContent?.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                {activeContent?.description}
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {activeContent?.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started with {activeTab}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedDomainSection;