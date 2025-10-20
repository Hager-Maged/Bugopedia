import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import useTheme from "../../../hooks/useTheme";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/images/Logo.png";

const NavSimple = ({
  theme,
  toggleTheme,
  className = "max-w-full px-6 py-3 !bg-white !shadow-none !border-none !backdrop-blur-0 !bg-opacity-100 rounded-none dark:!bg-mainDarkModeColor dark:!text-whiteText",
}) => {
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
      <div className="flex items-center justify-evenly text-blackText dark:text-whiteText">
        <Typography
          as={Link}
          to="/"
          className="rounded-md bg-slate-800 p-2.5   text-center text-sm text-whiteText transition-all  focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          <img src={Logo} alt="Logo" className="object-contain w-10 h-10" />
        </Typography>

        <div className="hidden lg:block">
          <NavList
            theme={theme}
            toggleTheme={toggleTheme}
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
          toggleTheme={toggleTheme}
          className={className}
        />
      </Collapse>
    </Navbar>
  );
};

export default NavSimple;
