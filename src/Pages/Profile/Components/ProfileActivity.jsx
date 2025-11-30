import { GiTrophyCup } from "react-icons/gi";
import { FaRegMessage } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { FaBugSlash } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const ProfileActivity = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-4 p-3 !bg-white dark:!bg-darkModeBg"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6  duration-300 !bg-white border-2 rounded-lg shadow-lg !border-secondaryColorTwo hover:!border-orangeColor dark:!bg-mainDarkModeColor hover:scale-110  transition-transform">
        <GiTrophyCup className="p-2 text-5xl rounded-full !bg-mainGradient !text-whiteText" />

        <h1 className="mb-1 text-3xl !text-secondaryColorOne ">2,450</h1>

        <p className="text-base font-light !text-blue-gray-800  dark:!text-lightPink">
          Total Points
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6  duration-300 !bg-white border-2 rounded-lg shadow-lg !border-secondaryColorTwo hover:!border-orangeColor dark:!bg-mainDarkModeColor hover:scale-110  transition-transform">
          <FaMedal className="p-2 text-5xl rounded-full bg-mainGradient !text-whiteText" />

          <h1 className="mb-1 text-3xl !text-secondaryColorOne ">8</h1>

          <p className="text-base font-light !text-blue-gray-800 dark:!text-lightPink">
            Badges Earned
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6  duration-300 !bg-white border-2 rounded-lg shadow-lg !border-secondaryColorTwo hover:!border-orangeColor dark:!bg-mainDarkModeColor hover:scale-110  transition-transform">
          <FaBugSlash className="p-2 text-5xl rounded-full !bg-mainGradient !text-whiteText" />

          <h1 className="mb-1 text-3xl !text-secondaryColorOne ">48</h1>

          <p className="text-base font-light !text-blue-gray-800 dark:!text-lightPink">
            Bug Submitted
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6  duration-300 !bg-white border-2 rounded-lg shadow-lg !border-secondaryColorTwo hover:!border-orangeColor dark:!bg-mainDarkModeColor hover:scale-110  transition-transform">
          <FaRegMessage className="p-2 text-5xl rounded-full !bg-mainGradient !text-whiteText" />

          <h1 className="mb-1 text-3xl !text-secondaryColorOne ">156</h1>

          <p className="text-base font-light !text-blue-gray-800  dark:!text-lightPink">
            Comments Made
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileActivity;
