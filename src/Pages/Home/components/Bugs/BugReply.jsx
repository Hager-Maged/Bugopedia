import React from "react";
import { Avatar } from "@material-tailwind/react";
import { SlLike } from "react-icons/sl";

const BugReply = ({ user, commentsCount, likesCount }) => {
  return (
    <div className="flex gap-2 p-2 bg-light-divBackground dark:bg-dark-backGround rounded-xl ">
      <div>
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-light-textColor dark:text-dark-textColor">
          {user}
        </h3>
        <p className="text-grayText">{commentsCount}</p>
        <div className="flex items-center gap-1 cursor-pointer">
          <SlLike className="text-light-textColor dark:text-dark-textColor" />
          <p className="text-light-textColor dark:text-dark-textColor">
            {likesCount}
          </p>
        </div>
      </div>
      <hr className="h-2 opacity-50 text-grayText" />
    </div>
  );
};

export default BugReply;
