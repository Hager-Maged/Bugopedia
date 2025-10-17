import { FiMessageSquare } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { FaRegChartBar } from "react-icons/fa";

export default function StatsGrid() {
  const stats = [
    {
      icon: <FiMessageSquare className="text-3xl text-[#f26e48]" />,
      value: "2,847", 
      label: "Total Discussions",
      colStart: "col-start-2",
    },
    {
      icon: <GoPeople className="text-3xl  text-[#f36] " />,
      value: "12,456", 
      label: "Total Members",
      colStart: "col-start-3",
    },
    {
      icon: <FaRegChartBar className="text-3xl text-[#9b59d6]" />,
      value: "87", 
      label: "Active Polls",
      colStart: "col-start-4",
    },
  ];

  return (
    <div className="grid grid-cols-5 mx-auto gap-4 w-full my-8 text-blackText dark:text-white">
      {stats.map(({ icon, value, label, colStart }, index) => (
        <div
          key={index}
          className={`border rounded-xl border-[#e6e6e6] px-4 py-3 flex items-center gap-4 ${colStart} dark:border-[#3d3554] dark:bg-[#251f37]`}
        >
          <div className="bg-[#ffdadf] p-2 rounded-lg dark:bg-secondaryGradient ">{icon}</div> {/*dark mode need edit*/}
          <div>
            <p className="text-[#6b7685] text-sm dark:text-pargraph">{label}</p>
            <h1 className="text-2xl font-medium">{value}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
