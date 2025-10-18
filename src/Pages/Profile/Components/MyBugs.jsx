import { FaBugSlash } from "react-icons/fa6";

const Bugs = [
  {
    id: 1,
    title: "React useEffect infinite loop with dependency array",
    status: "Solved",
    votes: 24,
    comments: 8,
    time: "2 days ago",
  },
  {
    id: 2,
    title: "TypeScript generic type inference not working",
    status: "Open",
    votes: 12,
    comments: 5,
    time: "5 days ago",
  },
  {
    id: 3,
    title: "CSS Grid layout breaking on mobile devices",
    status: "Solved",
    votes: 31,
    comments: 12,
    time: "1 week ago",
  },
];

const MyBugs = () => {
  return (
    <div className="flex flex-col max-w-5xl gap-3 p-3 mx-auto sm:p-6 !bg-white  dark:!bg-darkModeBg">
      {Bugs.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-3 p-4 transition-all duration-200 border sm:flex-row sm:items-center sm:justify-between rounded-2xl hover:shadow-lg dark:!bg-mainDarkModeColor dark:!border-darkModeBg"
        >
          <div className="flex flex-col gap-1 sm:max-w-5xl">
            <p className="text-sm font-semibold !text-blackText dark:!text-white sm:text-base md:text-lg">
              {item.title}
            </p>
            <span
              className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-full w-max ${
                item.status === "Solved"
                  ? "!bg-green-100 !text-green-800 dark:!bg-green-800 dark:!text-green-100"
                  : "!bg-yellow-100 text-yellow-800 dark:!bg-yellow-800 dark:!text-yellow-100"
              }`}
            >
              {item.status}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-grayText sm:text-sm sm:justify-end">
            <p className="whitespace-nowrap">{item.votes} votes</p>
            <p className="whitespace-nowrap">{item.comments} comments</p>
            <p className="whitespace-nowrap">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBugs;
