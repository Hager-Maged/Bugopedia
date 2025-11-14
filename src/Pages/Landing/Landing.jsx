import React, { useEffect } from "react";
import Landingpart from "./components/Landingpart";
import Numbers from "./components/Numbers";
import Aboutsection from "./components/Aboutsection";
import Highlights from "./components/Highlights";
import Howitworks from "./components/Howitworks";
import Endpart from "./components/Endpart";

export default function Landing() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }, []);
  return (
    <div className="">
      <Landingpart />
      <Numbers />
      <Aboutsection />
      <Highlights />
      <Howitworks />
      <Endpart />
    </div>
  );
}
