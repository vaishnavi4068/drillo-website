'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const cardData = [
  {
    title: 'For Partners',
    description:
      'We craft superior digital and AI-driven experiences, seamlessly integrating technology to drive meaningful business impact.',
  },
  {
    title: 'For Founders',
    description:
      'We craft superior digital and AI-driven experiences, seamlessly integrating technology to drive meaningful business impact.',
  },
  {
    title: 'For Enterprise',
    description:
      'We craft superior digital and AI-driven experiences, seamlessly integrating technology to drive meaningful business impact.',
  },
];

const HowWeWork = () => {
  return (
    <section className="w-full py-20 px-4 bg-white h-3/5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">
          How we Work
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group bg-white text-gray-900 border border-gray-200 shadow-md rounded-xl p-8  flex flex-col justify-between transition-all duration-500 ease-in-out hover:bg-cyan-600 hover:text-white cursor-pointer"
            >
              <div>
                <p className="text-lg font-medium mb-2">We work</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{card.title}</h2>
                <p className="text-base">{card.description}</p>
              </div>

              <div className="mt-6 overflow-hidden h-0 group-hover:h-6 transition-all duration-500 ease-in-out">
                <div className="flex items-center font-semibold">
                  View more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
