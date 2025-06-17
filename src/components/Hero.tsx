const Hero = () => {
  return (
    <section className="w-full min-h-4/5 flex items-center justify-center text-center px-4 bg-[#0c4f5b]">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Unlock the Power of AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Non arcu dui eget viverra. Lorem ipsum dolor sit amet consectetur.
          Lorem ipsum dolor sit amet consectetur. Non arcu dui eget.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition">
          Let’s Discuss
        </button>
      </div>
    </section>
  );
};

export default Hero;
