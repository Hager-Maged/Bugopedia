import Available_Rewards from "./Components/Available_Rewards";
import Rewards_Bages from "./Components/Rewards_Bages";
import Rewards_info from "./Components/Rewards_info";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
function Rewards() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }, []);
  return (
  <div className="bg-white dark:bg-[#1a1625] my-5">
    <div className="max-w-[80rem] mx-auto bg-white dark:bg-[#1a1625] flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-blackText dark:text-white font-semibold text-2xl">Rewards & Badges</h1>
        <p className="text-pargraph text-sm">Earn badges and unlock rewards by contributing to the community</p>
      </div>
      <Rewards_info/>
      <Rewards_Bages/>
      <Available_Rewards/>
    </div>

  </div>);
}

export default Rewards;
