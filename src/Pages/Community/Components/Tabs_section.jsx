import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import Polls from "./Tabs_info/Polls";
import Trending from "./Tabs_info/Trending";
import Discussions from "./Tabs_info/Discussions";






const Tabs_section = () => {
	const data = [
    {
      label: "Discussions",
			icon : <FiMessageSquare/>,
      value: "discussions",
      desc: <Discussions/>,
    },
    {
      label: "Polls",
			icon : <FaRegChartBar/>,
      value: "polls",
      desc: <Polls/>,
    },
    {
      label: "Trending",
			icon : <IoTrendingUp/>,
      value: "trending",
      desc: <Trending/>,
    },
];
  return (
		
		<div className="!grid !grid-cols-5 ">
			{/*scroll need dark mode edit*/}
			<Tabs id="custom-animation" value="discussions" className="col-start-2 col-end-5 ">
				<TabsHeader className=" dark:bg-card ">
					{data.map(({ label, value,icon }) => (
						<Tab key={value} value={value} className="dark:text-white ">
							<div className="flex flex-row justify-center items-center gap-3 font-semibold text-sm ">
								{icon}
								{label}
							</div>
						</Tab>
					))}
				</TabsHeader>
				<TabsBody
				className=""
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}
				>
					{data.map(({ value, desc }) => (
						<TabPanel key={value} value={value} className="">
							{desc}
						</TabPanel>
					))}
				</TabsBody>
			</Tabs>
		</div>

  );
}

export default Tabs_section