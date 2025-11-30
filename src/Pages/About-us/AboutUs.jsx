import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import OurMission from "./components/OurMission";
import OurStory from "./components/OurStory";
import JoinUs from "./components/JoinUs";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: "800",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-darkModeBg overflow-x-hidden">
      <Hero />
      <OurMission  />
      <OurStory  />
      <OurTeam  />
      <JoinUs  />
    </div>
  );
}

export default AboutUs;
