import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  Typography,
} from "@material-tailwind/react";
const activityData = [
  {
    id: 1,
    description: "Commented on React Hook useCallback issue",
    time: "2 hours ago",
  },
  { id: 2, description: "Earned badge Top Contributor", time: "1 day ago" },
  {
    id: 3,
    description: "Submitted bug TypeScript generic type inference",
    time: "5 days ago",
  },
  {
    id: 4,
    description: "Solution accepted for React useEffect infinite loop",
    time: "1 week ago",
  },
];
const Activity = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl p-4 mx-auto sm:p-6 !bg-white dark:!bg-darkModeBg rounded-2xl ">
      <Timeline>
        {activityData.map((item, index) => (
          <TimelineItem key={item.id}>
            {index !== activityData.length - 1 && <TimelineConnector />}{" "}
            <TimelineHeader className="flex items-center gap-4">
              <TimelineIcon className="flex items-center justify-center w-8 h-8 rounded-full bg-secondaryColorTwo "></TimelineIcon>
              <div className="flex flex-col w-full gap-2 p-3 transition-all duration-200 rounded-2xl hover:shadow-lg border border-secondaryColorOne dark:!bg-mainDarkModeColor m-2 hover:scale-105">
                <Typography
                  variant="small"
                  className="!text-blackText dark:!text-whiteText text-sm sm:text-base font-bold"
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="small"
                  className="text-xs sm:text-sm !text-blue-gray-800 whitespace-nowrap dark:!text-lightPink "
                >
                  {item.time}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Activity;
