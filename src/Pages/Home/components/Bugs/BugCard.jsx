import React, { useState, useEffect } from "react";
import { Avatar } from "@material-tailwind/react";
import { HiDotsHorizontal } from "react-icons/hi";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import BugPop from "./BugPop";

const BugCard = ({
  author,
  time,
  title,
  code,
  likesCount,
  commentsCount,
  solved,
  comments,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="flex flex-col gap-3 p-5 bg-white border border-borderLight dark:bg-dark-divBackground dark:border-borderDark rounded-xl">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
            <div>
              <h2 className="text-light-textColor dark:text-dark-textColor">
                {author}
              </h2>
              <p className="text-grayText">{time}</p>
            </div>
          </div>
          <HiDotsHorizontal className="cursor-pointer text-light-textColor dark:text-dark-textColor" />
        </div>

        <h2
          className="cursor-pointer text-light-textColor dark:text-dark-textColor"
          onClick={handleOpen}
        >
          {title}
        </h2>

        <pre className="cursor-pointer rounded-xl" onClick={handleOpen}>
          <pre className="overflow-x-auto text-green-400 bg-gray-900 rounded-xl">
            <code className="language-javascript">{code}</code>
          </pre>
        </pre>

        <hr className="h-2 opacity-50 text-grayText" />

        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="flex items-center gap-1 cursor-pointer">
              <CiHeart className="text-2xl text-grayText" />
              <p className="cursor-pointer text-grayText">{likesCount}</p>
            </div>

            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleOpen}
            >
              <FaRegCommentAlt className="text-grayText" />
              <p className="text-grayText">{commentsCount} Comment</p>
            </div>
          </div>

          {solved == "solved" && (
            <div className="flex items-center gap-1 p-1 bg-mainGradient rounded-xl">
              <IoMdCheckmark className="text-white" />
              <p className="text-white">Solved</p>
            </div>
          )}
        </div>
      </div>

      <BugPop
        open={open}
        handleOpen={handleOpen}
        author={author}
        time={time}
        title={title}
        code={code}
        likesCount={likesCount}
        commentsCount={commentsCount}
        solved={solved}
        comments={comments}
      />
    </>
  );
};

export default BugCard;
