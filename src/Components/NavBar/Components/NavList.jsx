import useTheme from "../../../hooks/useTheme";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Bars3Icon, CubeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaMedal } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/Data";
import LoggedContent from "./LoggedContent";
import Button from "daisyui/components/button";
import ButtonGradiant from "../../Buttons/ButtonGradiant";

const NavList = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleSignOut = () => {
    logout();
    navigate("/home");
  };
  return (
    <ul className="flex flex-col gap-2 my-2 lg:flex-row lg:items-center lg:gap-4">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-whiteText bg-mainGradient"
              : "text-blackText dark:text-whiteText hover:text-secondaryColorOne"
          }`
        }
      >
        <IoHomeOutline className="text-lg" />
        Home
      </NavLink>

      <NavLink
        to="/tech"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-whiteText bg-mainGradient"
              : "text-blackText dark:text-whiteText "
          }`
        }
      >
        <FaCode className="text-lg" />
        Tech
      </NavLink>

      <NavLink
        to="/leaderboard"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-whiteText bg-mainGradient"
              : "text-blackText dark:text-whiteText "
          }`
        }
      >
        <GiTrophyCup className="text-lg" />
        Leaderboard
      </NavLink>

      <NavLink
        to="/community"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-whiteText bg-mainGradient"
              : "text-blackText dark:text-whiteText"
          }`
        }
      >
        <IoPeopleOutline className="text-lg" />
        Community
      </NavLink>

      <NavLink
        to="/rewards"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-whiteText bg-mainGradient"
              : "text-blackText dark:text-whiteText"
          }`
        }
      >
        <FaMedal className="text-lg" />
        Rewards
      </NavLink>

      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-whiteText bg-mainGradient"
              : "text-blackText dark:text-whiteText"
          }`
        }
      >
        <FaRegQuestionCircle className="text-lg" />
        About
      </NavLink>

      {/* SEARCH */}
      <li className="p-1">
        <div className="relative flex items-center flex-1 max-w-xs">
          <CiSearch className="absolute left-3 text-grayText text-[1.2em]" />
          <input
            type="text"
            placeholder="Search bugs, topics, or contributors"
            className="w-full pl-10 pr-3 py-[0.6em] rounded-[0.6em]  border-1 bg-transparent text-blackText dark:!text-whiteText placeholder-grayText outline-none focus:ring-2 focus:ring-orangeColor transition-all duration-200 focus:!text-whiteText dark:focus:!text-whiteText"
          />
        </div>
      </li>
      {/* SEARCH */}

      <div className="flex flex-row items-center gap-4 justify-evenly md:gap-52">
        <ul className="flex flex-row items-center gap-4 justify-evenly md:gap-6">
          <li>
            {theme === "light" ? (
              <IoMoonOutline
                onClick={toggleTheme}
                className="w-5 h-5 cursor-pointer text-blackText dark:text-whiteText"
              />
            ) : (
              <LuSunMedium
                onClick={toggleTheme}
                className="w-5 h-5 cursor-pointer text-blackText dark:text-whiteText"
              />
            )}
          </li>

          {/* LOGGED CONTENT */}
          {user && <LoggedContent />}
          {!user && (
            <ButtonGradiant
              text="Log In"
              onClickFun={() => navigate("/signin")}
            />
          )}
          {/* LOGGED CONTENT */}
        </ul>
      </div>
    </ul>
  );
};

export default NavList;
