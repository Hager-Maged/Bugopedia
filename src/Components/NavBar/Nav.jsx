import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import useTheme from "../../hooks/useTheme";
import NavSimple from "./Components/NavSimple";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <NavSimple theme={theme} toggleTheme={toggleTheme} />
    </>
  );
};

export default NavBar;
