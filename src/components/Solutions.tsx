'use client';

import React from 'react';
import Image from 'next/image';

const Solutions = () => {
  return (
    <section className="w-full h-[80vh] py-20 px-4 bg-[#dcefef]">
      <div className="max-w-7xl h-[80%] mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">
          Innovative AI Solutions with us for a <br /> Smarter Future
        </h1>

        {/* Content layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-left">
          {/* Images */}
          <div className="relative w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden w-[80%]">
              <Image
                src="/team-stack-top.jpg"
                alt="Teamwork"
                width={200}
                height={200}
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="absolute left-24 top-[50%] w-[80%] rounded-xl overflow-hidden shadow-lg hidden md:block">
              <Image
                src="/team-stack-bottom.webp"
                alt="Meeting"
                width={200}
                height={200}
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Innovate with Drillo
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At Drillo, we empower businesses with cutting-edge AI solutions that enhance operational efficiency,
              data security, and business intelligence. Our goal is to make data accessible and actionable without
              compromising privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
