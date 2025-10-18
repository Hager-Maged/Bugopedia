import React from "react";

const activityData = [
  {
    id: 1,
    type: "comment",
    description: "Commented on React Hook useCallback issue",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "badge",
    description: "Earned badge Top Contributor",
    time: "1 day ago",
  },
  {
    id: 3,
    type: "bug",
    description: "Submitted bug TypeScript generic type inference",
    time: "5 days ago",
  },
  {
    id: 4,
    type: "solution",
    description: "Solution accepted for React useEffect infinite loop",
    time: "1 week ago",
  },
];

const Activity = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl gap-3 p-3 mx-auto sm:p-6">
      {activityData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 p-4 transition-all duration-200 border sm:flex-row sm:justify-between sm:items-center rounded-2xl hover:shadow-lg dark:bg-card dark:border-mainDarkModeColor"
        >
          <p className="text-sm text-blackText dark:text-white sm:text-base md:text-lg">
            {item.description}
          </p>
          <span className="text-xs text-gray-500 sm:text-sm dark:text-gray-300 whitespace-nowrap">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Activity;
