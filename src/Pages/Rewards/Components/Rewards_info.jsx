import { GoTrophy } from "react-icons/go";
import { PiStarThin } from "react-icons/pi";
import { PiTargetThin } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";
import "aos/dist/aos.css";

const Rewards_info = () => {

  const rewards = [
    {
      id: 1,
      title: "Earned Badges",
      value: "8/15",
      icon: <GoTrophy className="text-3xl text-orange-500" />,
      iconBg: "#FFEAEA", 
    },
    {
      id: 2,
      title: "Total Points",
      value: "2,450",
      icon: <PiStarThin className="text-3xl text-pink-500 dark:text-blue-500" />,
      iconBg: "#FFEAF3", 
    },
    {
      id: 3,
      title: "In Progress",
      value: "7",
      icon: <PiTargetThin className="text-3xl text-purple-500 dark:text-red-500" />,
      iconBg: "#F1E9FF", 
    },
    {
      id: 4,
      title: "Rank",
      value: "#23",
      icon: <LuCrown className="text-3xl text-orange-500" />,
      iconBg: "#FFEAEA", 
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 mx-2 " data-aos="fade-up">
      {rewards.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border border-gray-200 bg-white rounded-2xl px-5 py-4 hover:shadow-md transition-all duration-200 dark:bg-card dark:border-borderDark"
        >
          <div
            className="p-2 rounded-xl flex justify-center items-center dark:bg-secondaryGradient bg-[#ffdadf]"
          >
            {item.icon}
          </div>
          <div>
            <p className="text-sm text-pargraph">{item.title}</p>
            <h1 className="text-xl font-semibold text-blackText dark:text-white">{item.value}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rewards_info;
