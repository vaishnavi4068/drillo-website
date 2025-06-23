'use client';

import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Streamline operations and improve decision-making through intelligent automation.',
    image: '/ai-ml.jpg',
  },
  {
    title: 'Data Engineering',
    description: 'Efficiently process, cleanse, and organize data to extract valuable insights.',
    image: '/data-eng.jpg',
  },
  {
    title: 'Synthetic Data',
    description: 'Generate secure, realistic synthetic data to drive innovation while safeguarding privacy.',
    image: '/synthetic-data.jpg',
  },
];

const Services = () => {
  return (
    <section id='services' className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Offering the latest software and IT services <br className="hidden md:block" /> to our customer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col hover:bg-[#dcefef] hover:shadow-lg hover:shadow-gray-400"
            >
              <div className="h-56 w-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col flex-1 justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="mt-6">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
