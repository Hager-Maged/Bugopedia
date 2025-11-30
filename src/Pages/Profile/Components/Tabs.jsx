import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Badges from "./Badges";
import MyBugs from "./MyBugs";
import Activity from "./Activity";
import { FaBugSlash } from "react-icons/fa6";
import { LuActivity } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const TabsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);
  const data = [
    {
      label: "Badges",
      value: "badges",
      icon: <SlBadge />,
      desc: <Badges />,
    },
    {
      label: "MyBugs",
      value: "mybugs",
      icon: <FaBugSlash />,
      desc: <MyBugs />,
    },
    {
      label: "Activity",
      value: "activity",
      icon: <LuActivity />,
      desc: <Activity />,
    },
  ];

  return (
    <div
      className="flex justify-center !bg-white  dark:!bg-darkModeBg"
      data-aos="fade-up"
    >
      <Tabs value="badges" className="w-full max-w-6xl">
        <TabsHeader className="dark:!bg-mainDarkModeColor">
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              className="relative dark:!text-secondaryColorTwo"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                {icon}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
export default TabsSection;
