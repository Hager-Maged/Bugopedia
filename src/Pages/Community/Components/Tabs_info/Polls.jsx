import { Progress } from "@material-tailwind/react";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

const pollsData = [
  {
    question: "Which programming language do you use most for debugging?",
    author: "Lisa Park",
    username: "@lisapark",
    votes: "542 votes",
    time: "1 day ago",
    options: [
      { label: "JavaScript/TypeScript", votes: "218 votes", percent: "40%", value: 40 },
      { label: "Python", votes: "150 votes", percent: "28%", value: 28 },
      { label: "C++", votes: "100 votes", percent: "19%", value: 19 },
      { label: "Java", votes: "74 votes", percent: "13%", value: 13 },
    ],
  },
  {
    question: "What’s your favorite frontend framework?",
    author: "John Doe",
    username: "@john_doe",
    votes: "738 votes",
    time: "2 days ago",
    options: [
      { label: "React", votes: "420 votes", percent: "57%", value: 57 },
      { label: "Vue", votes: "180 votes", percent: "24%", value: 24 },
      { label: "Angular", votes: "90 votes", percent: "12%", value: 12 },
      { label: "Svelte", votes: "48 votes", percent: "7%", value: 7 },
    ],
  },
  {
    question: "Which CSS framework do you prefer?",
    author: "Emily Stone",
    username: "@emilystone",
    votes: "600 votes",
    time: "3 days ago",
    options: [
      { label: "Tailwind CSS", votes: "360 votes", percent: "60%", value: 60 },
      { label: "Bootstrap", votes: "180 votes", percent: "30%", value: 30 },
      { label: "Material UI", votes: "60 votes", percent: "10%", value: 10 },
    ],
  },
];

const Polls = () => {
  return (
    <div className="grid grid-cols-1 gap-5 pt-5 dark:text-white">
      {pollsData.map((poll, index) => (
        <div key={index} className="border md:p-10 p-4 flex flex-col gap-5 rounded-2xl dark:bg-card dark:border-[#3d3554]">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-medium">{poll.question}</h1>
            <div className="flex gap-1 items-center text-gray-600 text-sm">
              <FaRegCircleUser className="text-xl" />
              <p className="dark:text-pargraph">{poll.author}</p>
              <p className="dark:text-pargraph">{poll.username}</p>
              <BsDot />
              <p className="dark:text-pargraph">{poll.votes}</p>
              <BsDot />
              <p className="dark:text-pargraph">{poll.time}</p>
            </div>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-4">
            {poll.options.map((option, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between border border-[#e6e6e6] rounded-xl p-3 dark:border-[#3d3554]">
                  <div>
                    <h1 className="text-[#1e1e1e] text-md font-medium dark:text-white">{option.label}</h1>
                  </div>
                  <div className="flex gap-2 text-blackText text-sm font-medium">
                    <p className="dark:text-pargraph text-pargraph">{option.votes}</p>
                    <p className="dark:text-white text-blackText">{option.percent}</p>
                  </div>
                </div>
                <div className="relative">
                  <Progress
                    value={option.value}
                    className="[&>div]:!bg-mainGradient dark:bg-card"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Polls;
