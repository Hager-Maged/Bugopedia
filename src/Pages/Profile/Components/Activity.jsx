import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  Typography,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import useData from "../../../hooks/useFetch";

const Activity = () => {
  const userId = localStorage.getItem("userId");

  const {
    data: activity,
    loading,
    error,
  } = useData(
    `https://project-backend-pi-weld.vercel.app/api/v1/profile/myactivity/${userId}`
  );

  if (!userId) return <p>Loading user...</p>;
  if (loading) return <p>Loading activity...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!activity || activity.replies.length === 0)
    return <p>No activity found</p>;

  return (
    <div className="flex flex-col w-full max-w-4xl p-4 mx-auto sm:p-6 !bg-white dark:!bg-darkModeBg rounded-2xl ">
      <Timeline>
        {activity.replies.map((item, index) => (
          <TimelineItem key={item.bugId}>
            {index !== activity.length - 1 && <TimelineConnector />}{" "}
            <TimelineHeader className="flex items-center gap-4">
              <TimelineIcon className="flex items-center justify-center w-8 h-8 rounded-full bg-secondaryColorTwo">
                <FaReply className="text-white" />
              </TimelineIcon>
              <div className="flex flex-col w-full gap-2 p-3 transition-all duration-200 rounded-2xl hover:shadow-lg border border-secondaryColorOne dark:!bg-mainDarkModeColor m-2 hover:scale-105">
                <Typography
                  variant="small"
                  className="!text-blackText dark:!text-whiteText text-sm sm:text-base font-bold"
                >
                  Replied to: {item.title} ({item.categoryName})
                </Typography>
                <Typography
                  variant="small"
                  className="text-xs sm:text-sm !text-blue-gray-800 whitespace-nowrap dark:!text-lightPink"
                >
                  {item.reply.content} — {item.createdAt}
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
