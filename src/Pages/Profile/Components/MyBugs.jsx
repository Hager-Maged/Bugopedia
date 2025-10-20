import React, { useState } from "react";
import OpenBug from "./OpenBug";
import { FaBugSlash } from "react-icons/fa6";

const Bugs = [
  {
    id: 1,
    title: "React useEffect infinite loop with dependency array",
    status: "Solved",
    votes: 24,
    comments: 2,
    commentsList: [
      { id: 1, user: "Alice", commentDesc: "I faced this too", likesCount: 2 },
      {
        id: 2,
        user: "Bob",
        commentDesc: "Try using useCallback",
        likesCount: 3,
      },
    ],
    time: "2 days ago",
  },
  {
    id: 2,
    title: "TypeScript generic type inference not working",
    status: "Open",
    votes: 12,
    comments: 1,
    commentsList: [
      {
        id: 1,
        user: "Charlie",
        commentDesc: "Check your TS version",
        likesCount: 1,
      },
    ],
    time: "5 days ago",
  },
  {
    id: 3,
    title: "CSS Grid layout breaking on mobile devices",
    status: "Solved",
    votes: 31,
    comments: 0,
    commentsList: [],
    time: "1 week ago",
  },
];

const MyBugs = () => {
  const [openBug, setOpenBug] = useState(false);
  const [selectedBug, setSelectedBug] = useState(null);

  const handleOpenBug = (bug) => {
    setSelectedBug(bug);
    setOpenBug(!openBug);
  };

  return (
    <div className="flex flex-col max-w-5xl gap-3 p-3 mx-auto sm:p-6 !bg-white dark:!bg-darkModeBg">
      {Bugs.map((item) => (
        <div
          key={item.id}
          onClick={() => handleOpenBug(item)}
          className="flex flex-col gap-3 p-4 transition-all duration-200 border cursor-pointer shadow-lg sm:flex-row sm:items-center sm:justify-between rounded-2xl hover:shadow-lg border-secondaryColorTwo dark:!bg-mainDarkModeColor dark:!border-darkModeBg hover:scale-105"
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

          <div className="flex flex-wrap items-center gap-4 text-xs text-blue-gray-800 sm:text-sm sm:justify-end">
            <p className="whitespace-nowrap">{item.votes} votes</p>
            <p className="whitespace-nowrap">{item.comments} comments</p>
            <p className="whitespace-nowrap">{item.time}</p>
          </div>
        </div>
      ))}

      {selectedBug && (
        <OpenBug
          open={openBug}
          handleOpen={handleOpenBug}
          title={selectedBug.title}
          likesCount={selectedBug.votes}
          commentsCount={selectedBug.comments}
          solved={selectedBug.status === "Solved"}
          comments={selectedBug.commentsList || []}
        />
      )}
    </div>
  );
};

export default MyBugs;
