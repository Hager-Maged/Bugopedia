import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { CgProfile } from "react-icons/cg";
import { IoShieldOutline, IoNotificationsOutline } from "react-icons/io5";
import { MdInvertColors } from "react-icons/md";

import Account from "./components/Account";
import Appearance from "./components/Appearance";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Settings = () => {
  const handleDelete = () => {
    const navigate = useNavigate;
    navigate("/");
  };
  const data = [
    {
      label: "Profile",
      value: "profile",
      icon: CgProfile,
      desc: <Profile />,
    },
    {
      label: "Account",
      value: "account",
      icon: IoShieldOutline,
      desc: <Account handleDelete={handleDelete} />,
    },
    {
      label: "Appearance",
      value: "appearance",
      icon: MdInvertColors,
      desc: <Appearance />,
    },
  ];
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="bg-white dark:bg-darkModeBg lg:px-32 md:px-20 px-5 py-10"
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <div className="">
        <h1 className="font-semibold text-xl text-light-textColor dark:text-dark-textColor">
          Settings
        </h1>
        <p className="text-l text-grayText">
          Manage your account settings and preferences
        </p>
        <Tabs value="profile">
          <TabsHeader className="grid  sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
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
    </div>
  );
};

export default Settings;
