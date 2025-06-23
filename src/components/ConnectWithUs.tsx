'use client';

import React from 'react';
import Image from 'next/image';

const ConnectWithUs = () => {
  return (
    <section id='services' className="w-full bg-[#dcefef] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
          Connect with us to discover solutions that <br /> faster profitable growth and innovation
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-teal-600 text-2xl font-semibold mb-4">We are,</p>

            <ul className="space-y-4 text-gray-800 text-lg">
              <li>
                <strong>AI–Driven Innovation</strong> – We leverage AI to enhance efficiency, security, and decision-making.
              </li>
              <li>
                <strong>Privacy & Data Security</strong> – Our technology ensures data privacy while driving business growth.
              </li>
              <li>
                <strong>Scalable Solutions</strong> – Flexible and tailored AI solutions for businesses of all sizes.
              </li>
              <li>
                <strong>Proven Expertise</strong> – A team of skilled professionals with deep industry knowledge.
              </li>
            </ul>

            <button className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition">
              Let’s Discuss
            </button>
          </div>

          <div className="flex-1">
            <Image
              src="/team-stack-top.jpg"
              alt="Team collaborating"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
