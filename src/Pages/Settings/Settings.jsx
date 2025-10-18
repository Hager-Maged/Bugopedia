import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const Settings = () => {
  const data = [
    {
      label: "Kamel",
      value: "kamel",
      desc: "Hi all",
    },
  ];

  return (
    <div className="bg-whiteText dark:bg-darkModeBg lg:px-32 md:px-20 px-5">
      <div className="">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
        asdada
      </div>
    </div>
  );
};

export default Settings;
