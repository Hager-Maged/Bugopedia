import React from "react";
import { VscBug } from "react-icons/vsc";
import { FaHandsHelping } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { SiWikibooks } from "react-icons/si";
import { GiQueenCrown } from "react-icons/gi";

const badgesData = [
  {
    icon: <VscBug className="text-secondaryColorOne" />,
    title: "First Bug",
    desc: "Submitted your first bug",
  },
  {
    icon: <FaHandsHelping className="text-secondaryColorTwo" />,
    title: "Helper",
    desc: "Helped solve 10 bugs",
  },
  {
    icon: <CiStar className="text-secondaryColorOne" />,
    title: "Expert",
    desc: "Reached 1000 points",
  },
  {
    icon: <MdOutlineComputer className="text-secondaryColorTwo" />,
    title: "Code Master",
    desc: "Mastered JavaScript category",
  },
  {
    icon: <GiTrophyCup className="text-secondaryColorTwo" />,
    title: "Community Hero",
    desc: "100 helpful comments",
  },
  {
    icon: <IoIosFlash className="text-secondaryColorOne" />,
    title: "Quick Solver",
    desc: "Solved bug in under 5 minutes",
  },
  {
    icon: <SiWikibooks className="text-secondaryColorTwo" />,
    title: "Mentor",
    desc: "Mentored 5 new developers",
  },
  {
    icon: <GiQueenCrown className="text-secondaryColorOne" />,
    title: "Top Contributor",
    desc: "Top 10 this month",
  },
];

const Badges = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4 !bg-white  dark:!bg-darkModeBg">
      {badgesData.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4 p-6 !bg-white border-2 rounded-lg shadow-lg !border-secondaryColorTwo hover:!border-orangeColor dark:!bg-mainDarkModeColor"
        >
          <span className="text-5xl">{badge.icon}</span>
          <h2 className="text-xl font-semibold text-center !text-blackText dark:!text-white">
            {badge.title}
          </h2>
          <p className="text-sm text-center !text-blue-gray-800 ">
            {badge.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Badges;
