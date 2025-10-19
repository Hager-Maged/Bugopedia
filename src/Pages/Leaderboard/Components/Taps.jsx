import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
/*
import CPlus from "./TapsComponents/CPlus/CPlus";
import JavaScript from "./TapsComponents/JavaScript/JavaScript";*/
import Global from "./TapsComponents/Global/Global";
//import Python from "./TapsComponents/Python/Python";
function Taps({ leaderboardData }) {
  const data = [
    {
      label: "Global Top 10",
      value: "Global",
      desc: <Global data={leaderboardData} />,
    },
    {
      label: "Python",
      value: "Python",
      desc: (
        <Global 
          data={leaderboardData.filter((item) => item.language === "Python")}
        />
      ),
    },
    {
      label: "Java Script",
      value: "Java",
      desc: (
        <Global
          data={leaderboardData.filter(
            (item) => item.language === "JavaScript"
          )}
        />
      ),
    },
    {
      label: "C++",
      value: "Cplus",
      desc: (
        <Global
          data={leaderboardData.filter((item) => item.language === "C++")}
        />
      ),
    },
  ];

  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader
        className="dark:bg-card"
        indicatorProps={{
          className: "dark:bg-[#392C4F] dark:opacity-90	  rounded-2xl ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="dark:text-white font-bold text-sm"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default Taps;
