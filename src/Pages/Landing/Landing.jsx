import React from "react";
import { FaArrowRight, FaRegLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuBug } from "react-icons/lu";
import { FaCode, FaPeopleGroup, FaArrowTrendUp } from "react-icons/fa6";
import { PiMedal } from "react-icons/pi";
import { RiDiscussLine } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiTarget } from "react-icons/fi";

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
        <LuBug className="text-7xl text-orangeColor" />
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
            className="w-full h-14 text-orangeColor bg-darkModeBg placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-12 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow hover:border-orange"
            placeholder="Search for bugs, errors, or solutions..."
          />
          <button
            className="absolute left-3 top-3 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <CiSearch />
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
                <FaCode className="w-6 h-6 text-orangeColor" />
              </div>
              <div className="flex flex-col">
                <h3 className="dark:text-white">Real-World Solutions</h3>
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
                <h3 className="dark:text-white">Supportive Community</h3>
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
                <h3 className="dark:text-white">Gamified Learning</h3>
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
            <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-800 dark:dark:text-white">
              Community Highlights
            </h2>
            <p className="text-xl text-gray-500">
              See what makes our community special
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF3366] flex items-center justify-center mb-4">
                <FaArrowTrendUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white">
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

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF3366] to-[#9B59D6] flex items-center justify-center mb-4">
                <RiDiscussLine className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white">
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

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9B59D6] to-[#6366f1] flex items-center justify-center mb-4">
                <MdElectricBolt className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white">
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
      <section className="py-20 bg-gradient-to-br from-orangeColor/5 to-[#9B59D6]/5 dark:text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground mb-16">
            Get started in three simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: 1,
                title: "Search or Submit Bugs",
                desc: "Search our database of solved bugs or submit your own issue with code snippets and descriptions.",
                iconColor: "#FF6B35",
                icon: <CiSearch className="w-8 h-8" />,
                gradientFrom: "#FF6B35",
                gradientTo: "#FF3366",
              },
              {
                step: 2,
                title: "Understand and Solve",
                desc: "Get detailed explanations and solutions from the community. Vote on the best answers.",
                iconColor: "#FF3366",
                icon: <FaRegLightbulb className="w-8 h-8" />,
                gradientFrom: "#FF3366",
                gradientTo: "#9B59D6",
              },
              {
                step: 3,
                title: "Engage and Learn",
                desc: "Participate in discussions, earn badges, and help others solve their bugs too.",
                iconColor: "#9B59D6",
                icon: <FiTarget className="w-8 h-8" />,
                gradientFrom: "#9B59D6",
                gradientTo: "#6366f1",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white dark:bg-mainDarkModeColor rounded-xl p-6 pt-16 text-center shadow hover:shadow-xl transition-all"
              >
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  {item.step}
                </div>
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center`}
                  style={{
                    background: `linear-gradient(to bottom right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <button
              onClick={goHome}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium hover:scale-110 hover:scale-120
                           bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo text-whiteText w-fit"
            >
              <LuBug className="w-6 h-6" />
              Start Debugging
              <FaArrowRight />
            </button>
            <p className="text-muted-foreground text-grayText mt-4 sm:mt-0">
              Join 50,000+ developers already debugging together
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-mainDarkModeColor">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-xl text-white mb-6">
            Ready to Debug Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community and never debug alone again.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-6 text-lg text-[#1a1625] bg-white rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
              Get Started Free <FaArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-6 text-lg border-2 border-white/20 text-white rounded-lg hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
