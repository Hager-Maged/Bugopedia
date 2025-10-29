import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { LuBug } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/home", { replace: true });
  const steps = [
    {
      step: 1,
      title: "Search or Submit Bugs",
      desc: "Search our database of solved bugs or submit your own issue with code snippets and descriptions.",
      icon: <CiSearch className="w-8 h-8 text-white" />,
      gradientFrom: "#FF6B35",
      gradientTo: "#FF3366",
    },
    {
      step: 2,
      title: "Understand and Solve",
      desc: "Get detailed explanations and solutions from the community. Vote on the best answers.",
      icon: <FaRegLightbulb className="w-8 h-8 text-white" />,
      gradientFrom: "#FF3366",
      gradientTo: "#9B59D6",
    },
    {
      step: 3,
      title: "Engage and Learn",
      desc: "Participate in discussions, earn badges, and help others solve their bugs too.",
      icon: <FiTarget className="w-8 h-8 text-white" />,
      gradientFrom: "#9B59D6",
      gradientTo: "#6366f1",
    },
  ];

  return (
    <section className="py-20 light:bg-gradient-to-br from-orangeColor/5 to-[#9B59D6]/5 dark:text-white dark:bg-darkModeBg dark:border-darkModeBg">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl dark:dark:text-white">
          How It Works
        </h2>
        <p className="mb-16 text-xl text-gray-500">
          Get started in three simple steps
        </p>

        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative p-6 pt-16 text-center transition-all bg-white shadow dark:bg-mainDarkModeColor rounded-xl hover:shadow-xl"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{
                  background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                }}
              >
                {item.step}
              </div>

              <div
                className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(to bottom right, ${item.gradientFrom}, ${item.gradientTo})`,
                }}
              >
                {item.icon}
              </div>

              <h3 className="mb-2 text-lg font-semibold  text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground  text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={goHome}
            className="flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg hover:scale-110 bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo text-whiteText w-fit"
          >
            <LuBug className="w-6 h-6" />
            Start Debugging
            <FaArrowRight />
          </button>
          <p className="mt-4 text-muted-foreground text-grayText sm:mt-0">
            Join 50,000+ developers already debugging together
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
