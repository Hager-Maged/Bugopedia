import React from "react";
import Landingpart from "./components/Landingpart";
import Numbers from "./components/Numbers";
import Aboutsection from "./components/Aboutsection";
import Highlights from "./components/Highlights";
import Howitworks from "./components/Howitworks";
import Endpart from "./components/Endpart";

export default function Landing() {
  return (
    <div>
      <Landingpart />
      <Numbers />
      <Aboutsection />
      <Highlights />
      <Howitworks />
      <Endpart />
    </div>
  );
}
