import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import OurMission from "./components/OurMission";
import OurStory from "./components/OurStory";
import JoinUs from "./components/JoinUs";

function AboutUs() {
  return (
    <div className="bg-whiteText dark:bg-darkModeBg">
    <Hero />
    <OurMission />
    <OurStory />
    <OurTeam />
    <JoinUs />
    </div>
  );
}

export default AboutUs;
