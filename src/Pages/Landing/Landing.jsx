import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuBug } from "react-icons/lu";
import { FaCode, FaPeopleGroup, FaArrowTrendUp } from "react-icons/fa6";
import { PiMedal } from "react-icons/pi";
import { RiDiscussLine } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";

const Landing = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/home", { replace: true });
  const goAboutUs = () => navigate("/aboutus", { replace: true });
  return (
    <div>
      <section
        className="flex flex-col items-center justify-center px-4 min-h-screen
                 bg-mainDarkModeColor text-center space-y-5 gap-2 pb-9"
      >
        <LuBug className="text-7xl text-orange" />
        <h1 className="text-6xl md:text-7xl text-whiteText">Debug Together,</h1>
        <h2 className="text-5xl md:text-6xl bg-secondaryGradient bg-clip-text text-transparent pb-2">
          Grow Together
        </h2>
        <p className="text-lg md:text-xl text-grayText">
          Join thousands of developers solving bugs collaboratively. Share,
          learn, and build better software together.
        </p>
        <div className="relative w-full max-w-4xl mx-auto">
          <input
            className="w-full h-14 text-orange bg-darkModeBg placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-12 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow hover:border-orange"
            placeholder="Search for bugs, errors, or solutions..."
          />
          <button
            className="absolute left-3 top-3 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goHome}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium hover:opacity-90 hover:scale-120
                           bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo text-whiteText"
          >
            Start Debugging
            <FaArrowRight />
          </button>
          <button
            onClick={goAboutUs}
            className="px-8 py-4 rounded-lg font-semibold border-2 border-whiteText text-whiteText hover:opacity-40"
          >
            Learn More
          </button>
        </div>
      </section>
      <section className="py-16 border-y bg-white dark:bg-mainDarkModeColor">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              value: "50K+",
              label: "Active Developers",
              color: "text-secondaryColorOne",
              hoverBorder: "hover:border-secondaryColorOne",
            },
            {
              value: "125K+",
              label: "Bugs Solved",
              color: "bg-secondaryGradient bg-clip-text text-transparent",
              hoverBorder: "hover:border-secondaryColorTwo",
            },
            {
              value: "200K+",
              label: "Community Members",
              color: "text-secondaryColorTwo",
              hoverBorder: "hover:border-secondaryColorTwo",
            },
            {
              value: "500k+",
              label: "Daily Solutions",
              color:
                "bg-gradient-to-r from-secondaryColorTwo to-secondaryColorOne bg-clip-text text-transparent",
              hoverBorder: "hover:border-secondaryColorOne",
            },
          ].map((each, i) => (
            <div
              className={`p-4 rounded-xl border-2 border-text-gray ${each.hoverBorder}`}
              key={i}
            >
              <div className={`text-3xl md:text-4xl mb-2 ${each.color}`}>
                {each.value}
              </div>
              <p className="text-sm text-grayText">{each.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" bg-gray p-9">
        <div className="text-center p-4">
          <h2 className="text-4xl md:text-5xl mb-4">About Bugopedia</h2>
          <p className="text-l text-muted-foreground max-w-3xl mx-auto text-grayText">
            A revolutionary platform where developers collaborate to solve bugs,
            share knowledge, and grow together as a community.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-9 pt-7 border-gray p-1">
          <div className="grid rounded-lg w-80 h-60 md:w-96 md:h-64 place-items-center drop-shadow-3xl p-2">
            <img
              src="/img/bug1.jpeg"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col p-3">
            <div className="flex gap-4 p-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF6B35]/20 to-[#FF3366]/20 flex items-center justify-center ">
                <FaCode className="w-6 h-6 text-orange" />
              </div>
              <div className="flex flex-col">
                <h3 className="">Real-World Solutions</h3>
                <p className=" text-grayText">
                  Get answers to real coding challenges from experienced
                  developers who've faced similar issues.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF3366]/20 to-[#9B59D6]/20 flex items-center justify-center ">
                <FaPeopleGroup className="w-6 h-6 text-[#FF3366]" />
              </div>
              <div className="flex flex-col">
                <h3 className="">Supportive Community</h3>
                <p className=" text-grayText">
                  Join a welcoming community where beginners and experts help
                  each other grow and learn.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9B59D6]/20 to-[#6366f1]/20 flex items-center justify-center ">
                <PiMedal className="w-6 h-6 text-lightPurple" />
              </div>
              <div className="flex flex-col">
                <h3 className="">Gamified Learning</h3>
                <p className=" text-grayText">
                  Earn badges, climb leaderboards, and unlock rewards as you
                  contribute and help others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center pt-11">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-800">
              Community Highlights
            </h2>
            <p className="text-xl text-gray-500">
              See what makes our community special
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF3366] flex items-center justify-center mb-4">
                <FaArrowTrendUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Top Contributors
              </h3>
              <p className="text-gray-500 mb-4">
                Our most active members have helped solve over 10,000 bugs this
                month alone.
              </p>
              <button className="flex items-center gap-2 text-sm text-[#FF6B35] font-medium hover:underline transition">
                View Leaderboard <FaArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF3366] to-[#9B59D6] flex items-center justify-center mb-4">
                <RiDiscussLine className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Active Discussions
              </h3>
              <p className="text-gray-500 mb-4">
                Join 500+ daily discussions on everything from debugging tips to
                career advice.
              </p>
              <button className="flex items-center gap-2 text-sm text-[#FF3366] font-medium hover:underline transition">
                Join Discussion <FaArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9B59D6] to-[#6366f1] flex items-center justify-center mb-4">
                <MdElectricBolt className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Quick Solutions
              </h3>
              <p className="text-gray-500 mb-4">
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
    </div>
  );
};

export default Landing;
