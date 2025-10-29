import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Endpart = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1625] via-[#2d1f4a] to-[#1a1625]">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-6 text-4xl text-white md:text-xl">
          Ready to Debug Better?
        </h2>
        <p className="mb-8 text-xl text-gray-300">
          Join our community and never debug alone again.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 text-lg text-[#1a1625] bg-white rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
            Get Started Free <FaArrowRight className="w-5 h-5" />
          </button>
          <button className="px-4 py-2 text-lg text-white transition border-2 rounded-lg border-white/20 hover:bg-white/10">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Endpart;
