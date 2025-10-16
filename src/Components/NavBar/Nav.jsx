import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
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
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import Logo from "../../Media/Logo.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const NavBar = () => {
  const [theme, setTheme] = useState(true);

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    setTheme(true);
  };

  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    setTheme(false);
  };

  return (
    <>
      <NavbarSimple
        theme={theme}
        setLightMode={setLightMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
};

function NavList({ theme, setLightMode, setDarkMode }) {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-white bg-mainGradient"
              : "text-blackText dark:text-white hover:text-secondaryColorOne"
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
              ? "text-white bg-mainGradient"
              : "text-blackText dark:text-white "
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
              ? "text-white bg-mainGradient"
              : "text-blackText dark:text-white "
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
              ? "text-white bg-mainGradient"
              : "text-blackText dark:text-white"
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
              ? "text-white bg-mainGradient"
              : "text-blackText dark:text-white"
          }`
        }
      >
        <FaMedal className="text-lg" />
        Rewards
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "text-white bg-mainGradient"
              : "text-blackText dark:text-white"
          }`
        }
      >
        <FaRegQuestionCircle className="text-lg" />
        About
      </NavLink>

      <li className="p-1">
        <div className="relative flex items-center w-[20em]">
          <CiSearch className="absolute left-3 text-grayText text-[1.2em]" />
          <input
            type="text"
            placeholder="Search bugs, topics, or contributors"
            className="w-full pl-10 pr-3 py-[0.6em] rounded-[0.6em]  border-1 bg-transparent text-blackText dark:text-whiteText placeholder-grayText outline-none focus:ring-2 focus:ring-orange transition-all duration-200"
          />
        </div>
      </li>

      <div className="flex flex-row items-center gap-4 justify-evenly md:gap-6">
        <ul className="flex flex-row items-center gap-4 justify-evenly md:gap-6">
          <li>
            <Menu placement="bottom-end">
              <MenuHandler>
                <IoIosNotificationsOutline className="w-6 h-6 transition-transform duration-200 cursor-pointer text-blackText dark:text-white hover:scale-110" />
              </MenuHandler>

              <MenuList className="w-64 p-2 text-gray-800 bg-white rounded-lg shadow-lg dark:text-gray-200 dark:bg-darkModeBg">
                <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-white">
                  <Typography variant="small" className="font-semibold">
                    Tania sent you a message
                  </Typography>
                  <Typography className="text-xs text-gray-500 dark:text-gray-400">
                    13 minutes ago
                  </Typography>
                </MenuItem>

                <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-white">
                  <Typography variant="small" className="font-semibold">
                    Natali replied to your email
                  </Typography>
                  <Typography className="text-xs text-gray-500 dark:text-gray-400">
                    1 hour ago
                  </Typography>
                </MenuItem>

                <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-white">
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
            {theme ? (
              <IoMoonOutline
                onClick={setDarkMode}
                className="w-5 h-5 cursor-pointer text-blackText dark:text-white"
              />
            ) : (
              <LuSunMedium
                onClick={setLightMode}
                className="w-5 h-5 cursor-pointer text-blackText dark:text-white"
              />
            )}
          </li>

          <li>
            <Menu placement="bottom-end">
              <MenuHandler>
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="User Avatar"
                  className="w-[2.5em] h-[2.5em] border-[0.15em] border-secondaryColorTwo dark:border-secondaryColorOne rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
                />
              </MenuHandler>

              <MenuList className="p-2 text-gray-800 bg-white rounded-lg shadow-lg dark:text-gray-200 dark:bg-darkModeBg">
                <MenuItem className="p-0">
                  <NavLink
                    to="/profile"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white"
                  >
                    <Typography variant="small" className="font-medium">
                      My Profile
                    </Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem className="p-0">
                  <NavLink
                    to="/my-bugs"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white"
                  >
                    <Typography variant="small" className="font-medium ">
                      My Bugs
                    </Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem className="p-0">
                  <NavLink
                    to="/settings"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white"
                  >
                    <Typography variant="small" className="font-medium">
                      Settings
                    </Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem className="p-0">
                  <NavLink
                    to="/support"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white"
                  >
                    <Typography variant="small" className="font-medium">
                      Support
                    </Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem className="p-0">
                  <NavLink
                    to="/faq"
                    className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white"
                  >
                    <Typography variant="small" className="font-medium">
                      FAQ
                    </Typography>
                  </NavLink>
                </MenuItem>

                <hr className="my-2 border-gray-300 dark:border-gray-700" />

                <MenuItem className="p-0">
                  <NavLink
                    to="/logout"
                    className="flex items-center w-full gap-2 p-2 rounded-md hover:bg-red-100 focus:bg-mainGradient focus:!text-white transition-all duration-200"
                  >
                    <Typography
                      variant="small"
                      className="font-medium text-red-600 dark:text-red-400 focus:!text-white"
                    >
                      Sign Out
                    </Typography>
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ul>
      </div>
    </ul>
  );
}

export function NavbarSimple({
  theme,
  setLightMode,
  setDarkMode,
  className = "max-w-full px-6 py-3 mx-auto bg-white border-0 rounded-none dark:bg-mainDarkModeColor dark:text-white",
}) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className={className}>
      <div className="flex items-center justify-evenly text-blackText dark:text-white">
        <Typography
          as={Link}
          to="/"
          className="rounded-md bg-slate-800 p-2.5   text-center text-sm text-white transition-all  focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          <img src={Logo} alt="Logo" className="object-contain w-10 h-10" />
        </Typography>

        <div className="hidden lg:block">
          <NavList
            theme={theme}
            setLightMode={setLightMode}
            setDarkMode={setDarkMode}
            className={className}
          />
        </div>
        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList
          theme={theme}
          setLightMode={setLightMode}
          setDarkMode={setDarkMode}
          className={className}
        />
      </Collapse>
    </Navbar>
  );
}
export default NavBar;
