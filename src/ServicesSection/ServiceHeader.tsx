import React from 'react';

const ServiceHeader = () => {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center text-center px-4 bg-[#0c4f5b]">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Services
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Transform your business with cutting-edge AI, ML, and data solutions—seamlessly 
          integrated for innovation, efficiency, and growth.
        </p>
      </div>
    </section>
  );
};

export default ServiceHeader;