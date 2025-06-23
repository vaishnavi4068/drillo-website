'use client';

import React from 'react';
import Image from 'next/image';

const coreValues = [
  {
    title: 'Customer Centric',
    description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.',
    image: '/team-stack-top.jpg',
  },
  {
    title: 'Data Driven',
    description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.',
    image: '/team-stack-bottom.webp',
  },
  {
    title: 'Innovation',
    description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.',
    image: '/team-stack-bottom.webp',
  },
  {
    title: 'Partnership',
    description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.',
    image: '/team-stack-top.jpg',
  },
];

const CoreValues = () => {
  return (
    <section id='services' className="w-full bg-[#dcefef] py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
          Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              <div className="py-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="w-full overflow-hidden rounded-2xl h-full">
                <div className="transition-transform duration-300 hover:scale-105 h-full">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={800}
                    height={400}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
