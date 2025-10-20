import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const user = {
    name: "Sarah Johnson",
    title: "Full Stack Developer | Bug Hunter | Community Mentor",
    email: "sarah.j@example.com",
    location: "San Francisco, CA",
    joined: "Joined March 2024",
    avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    tags: [
      "Web Developer",
      "Tester",
      "React Specialist",
      "Open Source Contributor",
    ],
    badge: { badge1: "Pro Developer" },
  };

  const { name, title, email, location, joined, avatar, tags, badge } = user;

  return (
    <Card className="w-11/12 p-8 m-6 mx-auto bg-white shadow-none rounded-xl dark:bg-mainDarkModeColor">
      <div className="relative h-36 rounded-t-xl !bg-secondaryGradient  ">
        <div className="absolute z-10 right-4 top-4 ">
          <Link to="/settings">
            <Button
              size="sm"
              variant="gradient"
              className="px-4 py-2 bg-mainGradient"
            >
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>

      <CardBody className="pt-0">
        <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start md:gap-6 md:p-5">
          <div className="flex flex-col items-center gap-2 ">
            <img
              src={avatar}
              alt={name}
              className="object-cover w-32 h-32 rounded-full shadow-lg"
            />
            <div className="-mt-4 sm:-mt-6">
              <Chip
                value={badge.badge1}
                size="sm"
                variant="ghost"
                className="text-white bg-mainGradient"
              />
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 md:items-start ">
            <Typography className=" font-medium !text-black text-2xl dark:!text-white">
              {name}
            </Typography>
            <Typography className="mt-1 text-lg text-center text-blue-gray-800 md:text-left">
              {title}
            </Typography>

            <div className="flex flex-wrap justify-center gap-2 mt-4 md:justify-start dark:text-white">
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  value={tag}
                  size="sm"
                  variant="outlined"
                  className="px-3 py-1 text-sm text-black rounded-full dark:text-white border-secondaryColorTwo"
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-blue-gray-800 md:gap-6 md:justify-start">
              <div className="flex items-center gap-2">
                <HiOutlineMail className="w-5 h-5" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="w-5 h-5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineCalendar className="w-5 h-5" />
                <span>{joined}</span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
