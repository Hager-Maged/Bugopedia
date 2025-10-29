import React from "react";
import { FaChartLine, FaArrowRight } from "react-icons/fa";
import { RiDiscussLine } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";

const Highlights = () => {
  document.documentElement.classList.remove("dark");
  return (
    <section className="flex items-center pt-11">
      <div className="container max-w-6xl px-6 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Community Highlights
          </h2>
          <p className="text-xl text-gray-500">
            See what makes our community special
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 transition-all bg-white shadow-sm cursor-pointer rounded-xl hover:shadow-xl hover:-translate-y-1 ">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF3366] flex items-center justify-center mb-4">
              <FaChartLine className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800 ">
              Top Contributors
            </h3>
            <p className="mb-4 text-gray-500">
              Our most active members have helped solve over 10,000 bugs this
              month alone.
            </p>
            <button className="flex items-center gap-2 text-sm text-[#FF6B35] font-medium hover:underline transition">
              View Leaderboard <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 transition-all bg-white shadow-sm cursor-pointer rounded-xl hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF3366] to-[#9B59D6] flex items-center justify-center mb-4">
              <RiDiscussLine className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Active Discussions
            </h3>
            <p className="mb-4 text-gray-500">
              Join 500+ daily discussions on everything from debugging tips to
              career advice.
            </p>
            <button className="flex items-center gap-2 text-sm text-[#FF3366] font-medium hover:underline transition">
              Join Discussion <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 transition-all bg-white shadow-sm cursor-pointer rounded-xl hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9B59D6] to-[#6366f1] flex items-center justify-center mb-4">
              <MdElectricBolt className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Quick Solutions
            </h3>
            <p className="mb-4 text-gray-500">
              Average response time of 24 hours with most bugs getting their
              first reply within minutes.
            </p>
            <button className="flex items-center gap-2 text-sm text-[#9B59D6] font-medium hover:underline transition">
              See Stats <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
