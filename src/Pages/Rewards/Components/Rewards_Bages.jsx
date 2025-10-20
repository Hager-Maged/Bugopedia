import { IoBugOutline } from "react-icons/io5";
import { PiTargetBold } from "react-icons/pi";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Rewards_Bages = () => {
  const userTasks = [
  {
    id: 1,
    title: "Post Bugs",
    description: "Report any bugs or system errors you encounter.",
    icon: <IoBugOutline className="text-orangeColor"/>,
    color: "#F44336",
    current: 37,
    total: 50,
    difficulty:"common",
  },
  {
    id: 2,
    title: "Share Comments",
    description: "Leave helpful comments or feedback on posts.",
    icon: <PiTargetBold className="text-[#f36]"/>,
    color: "#2196F3",
    current: 10,
    total: 10,
    difficulty:"common",  },
  {
    id: 3,
    title: "Ask for Help",
    description: "Request support or guidance from the community.",
    icon: <PiTargetBold className="text-[#9b59d6]"/>,
    color: "#FF9800",
    current: 2,
    total: 5,
    difficulty:"Epic",  },
  {
    id: 4,
    title: "Upload Files",
    description: "Attach screenshots or documents to assist others.",
    icon: <PiTargetBold className="text-orangeColor"/>,
    color: "#4CAF50",
    current: 3,
    total: 3,
    difficulty:"Legendary",
  },
  {
    id: 5,
    title: "Invite Friends",
    description: "Invite friends or colleagues to join the platform.",
    icon: <PiTargetBold className="text-[#9b59d6]"/>,
    color: "#9C27B0",
    current: 1,
    total: 5,
    difficulty:"Rare",
  },
  {
    id: 6,
    title: "Share a Post",
    description: "Create a new post to share insights or updates.",
    icon: <PiTargetBold className="text-[#f36]"/>,
    color: "#00BCD4",
    current: 4,
    total: 5,
    difficulty:"Epic",
  },
  {
    id: 7,
    title: "Like Posts",
    description: "Support other users by liking their posts.",
    icon: <PiTargetBold className="text-orangeColor"/>,
    color: "#FF5722",
    current: 20,
    total: 25,
    difficulty:"common",
  },
  {
    id: 8,
    title: "Answer Questions",
    description: "Help others by answering their questions.",
    icon: <PiTargetBold className="text-[#f36]"/>,
    color: "#8BC34A",
    current: 6,
    total: 10,
    difficulty:"Rare",
  },
  {
    id: 9,
    title: "Daily Login",
    description: "Log in daily to stay active and earn rewards.",
    icon: <PiTargetBold className="text-[#9b59d6]"/>,
    color: "#795548",
    current: 7,
    total: 7,
    difficulty:"common",
  },
  {
    id: 10,
    title: "Like Posts",
    description: "Support other users by liking their posts.",
    icon: <PiTargetBold className="text-orangeColor"/>,
    color: "#FF5722",
    current: 20,
    total: 25,
    difficulty:"common",
  },
  {
    id: 11,
    title: "Answer Questions",
    description: "Help others by answering their questions.",
    icon: <PiTargetBold className="text-[#f36]"/>,
    color: "#8BC34A",
    current: 6,
    total: 10,
    difficulty:"Rare",
  },
  {
    id: 12,
    title: "Daily Login",
    description: "Log in daily to stay active and earn rewards.",
    icon: <PiTargetBold className="text-[#9b59d6]"/>,
    color: "#795548",
    current: 7,
    total: 7,
    difficulty:"common",
  },
];
  return (
<div className="flex flex-col gap-4">
      <div className="mx-6">Badges</div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
        {userTasks.map((data) => {
          const progress = Math.min((data.current / data.total) * 100, 100);
          return (
            <div
              key={data.id}
              className={`border p-5 flex flex-col gap-6 rounded-3xl  mx-2 ${data.current < data.total ? "bg-white border-borderLight dark:bg-card dark:border-borderDark": "bg-[#c97c762d] border-orangeColor"}`}
              data-aos="zoom-in"
            >
              <div className="flex gap-2 items-center">
                <div className="text-2xl bg-[#ffdadf] p-2 rounded-2xl dark:bg-secondaryGradient">
                  {data.icon}
                </div>
                <div className="flex text-blackText flex-col gap-1 items-start dark:text-white">
                  <h1>{data.title}</h1>
                  <div className="border text-pargraph bg-gray-300 flex justify-center text-sm p-0.5 px-1.5 items-center rounded-3xl dark:bg-[#2a2461af] dark:border-borderDark">
                    {data.difficulty}
                  </div>
                </div>
              </div>
              <div className="text-pargraph">{data.description}</div>
              
              {data.current < data.total ? (
                <div className="mt-2 flex flex-col gap-2">
                  <div className="text-pargraph">submit {data.total} bugs</div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-[#ffa68b8e]">
                    <div
                      className="h-2 rounded-full transition-all duration-700 ease-out bg-mainGradient "
                      style={{
                        width: `${progress}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="text-pargraph flex gap-1">
                      {data.current} / {data.total}
                      <h1>complete</h1>
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="text-pargraph text-sm">submit {data.total} bugs</div>
                  <hr className="border-t-1 border-orangeColor" />
                  <h1 className="text-orangeColor text-sm">✓ complete</h1>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Rewards_Bages


