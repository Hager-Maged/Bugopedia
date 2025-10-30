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

const NavList = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
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

      <div className="flex flex-row items-center gap-4 justify-evenly md:gap-52">
        <ul className="flex flex-row items-center gap-4 justify-evenly md:gap-6">
          <li>
            <Menu placement="bottom-end">
              <MenuHandler>
                <IoIosNotificationsOutline className="w-6 h-6 transition-transform duration-200 cursor-pointer text-blackText dark:text-whiteText hover:scale-110" />
              </MenuHandler>

              <MenuList className="w-64 p-2 text-gray-800 bg-white rounded-lg shadow-lg dark:text-gray-200 dark:bg-darkModeBg">
                <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-whiteText">
                  <Typography variant="small" className="font-semibold">
                    Tania sent you a message
                  </Typography>
                  <Typography className="text-xs text-gray-500 dark:text-gray-400">
                    13 minutes ago
                  </Typography>
                </MenuItem>

                <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-whiteText">
                  <Typography variant="small" className="font-semibold">
                    Natali replied to your email
                  </Typography>
                  <Typography className="text-xs text-gray-500 dark:text-gray-400">
                    1 hour ago
                  </Typography>
                </MenuItem>

                <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-whiteText">
                  <Typography variant="small" className="font-semibold">
                    You received a payment
                  </Typography>
                  <Typography className="text-xs text-gray-500 dark:text-gray-400">
                    5 hours ago
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>

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

          <li>
            <Menu placement="bottom-end">
              <MenuHandler>
                <div className=" w-[2.5em] h-[2.5em] flex-shrink-0">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="User Avatar"
                    className="w-full h-full border-[0.15em] border-secondaryColorTwo dark:border-secondaryColorOne rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </MenuHandler>

              <MenuList className="p-2 !text-mainDarkModeColor !bg-white rounded-lg shadow-lg dark:!text-white dark:!bg-darkModeBg">
                <MenuItem className="p-0 !bg-transparent">
                  <NavLink
                    to="/profile"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
                  >
                    <Typography
                      variant="small"
                      className="font-medium hover:bg-mainGradient hover:text-whiteText"
                    >
                      My Profile
                    </Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem className="p-0">
                  <NavLink
                    to="/settings"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
                  >
                    <Typography variant="small" className="font-medium">
                      Settings
                    </Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem className="p-0">
                  <NavLink
                    to="/support"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
                  >
                    <Typography variant="small" className="font-medium">
                      Support
                    </Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem className="p-0">
                  <NavLink
                    to="/faq"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
                  >
                    <Typography variant="small" className="font-medium">
                      FAQ
                    </Typography>
                  </NavLink>
                </MenuItem>

                <hr className="my-2 border-gray-300 dark:border-gray-700" />

                <MenuItem className="p-0">
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full gap-2 p-2 rounded-md hover:bg-red-100 focus:bg-mainGradient focus:!text-whiteText transition-all duration-200"
                  >
                    <Typography
                      variant="small"
                      className="font-medium text-red-600 dark:text-red-400 focus:!text-whiteText"
                    >
                      Sign Out
                    </Typography>
                  </button>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ul>
      </div>
    </ul>
  );
};

export default NavList;
