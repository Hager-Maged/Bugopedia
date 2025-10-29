import React from "react";
import { FaCode, FaUsers } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";

const Aboutsection = () => {
  return (
    <section className=" bg-gray p-9 dark:bg-darkModeBg  dark:border-darkModeBg">
      <div className="p-4 text-center">
        <h2 className="mb-4 text-4xl md:text-5xl dark:text-white">
          About Bugopedia
        </h2>
        <p className="max-w-3xl mx-auto text-l text-muted-foreground text-grayText">
          A revolutionary platform where developers collaborate to solve bugs,
          share knowledge, and grow together as a community.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-1 md:flex-row gap-9 pt-7 border-gray">
        <div className="grid p-2 rounded-lg w-80 h-60 md:w-96 md:h-64 place-items-center drop-shadow-3xl">
          <img
            src="/img/bug1.jpeg"
            className="object-cover w-full h-full rounded-lg"
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
              <FaUsers className="w-6 h-6 text-[#FF3366]" />
            </div>
            <div className="flex flex-col">
              <h3 className="dark:text-white">Supportive Community</h3>
              <p className=" text-grayText">
                Join a welcoming community where beginners and experts help each
                other grow and learn.
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
  );
};

export default Aboutsection;
