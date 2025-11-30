import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { SlLike } from "react-icons/sl";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import BugReply from "./BugReply";
import { Input } from "@material-tailwind/react";
import ButtonGradiant from "../../../../Components/Buttons/ButtonGradiant";

const BugPop = ({
  open,
  handleOpen,
  title,
  code,
  likesCount,
  commentsCount,
  solved,
  comments,
}) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="bg-light-divBackground dark:bg-dark-divBackground"
    >
      <DialogHeader>
        {solved == "solved" && (
          <div className="flex items-center gap-1 p-2 bg-green-900 rounded-xl">
            <CiCircleCheck className="text-lg text-green-600 " />
            <p className="text-lg font-semibold text-green-600">Solved</p>
          </div>
        )}
        <h1 className="ml-2 text-light-textColor dark:text-dark-textColor">
          {title}
        </h1>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-col gap-3">
          <pre className="p-2 overflow-x-auto text-green-400 bg-gray-900 rounded-xl">
            <code className="language-javascript">{code}</code>
          </pre>
          <hr className="h-2 opacity-50 text-grayText" />
          <div className="flex justify-between">
            {/* likes and comments start */}
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <SlLike />
                <p>{likesCount}</p>
              </div>
              <div className="flex items-center gap-1">
                <FaCommentAlt />
                <p>{commentsCount}</p>
              </div>
            </div>
            {/* likes and comments end */}
            <div className="flex items-center gap-1 p-2 transition-all border cursor-pointer border-grayText rounded-xl hover:scale-105">
              <FaShareAlt />
              <p>Share</p>
            </div>
          </div>
          <hr className="h-2 opacity-50 text-grayText" />
          <div className="flex flex-col gap-3">
            <p className="text-light-textColor dark:text-dark-textColor">
              {commentsCount} Comments
            </p>
            {comments.map((comment) => (
              <BugReply
                key={comment.id}
                user={comment.user}
                commentDesc={comment.commentDesc}
                likesCount={comment.likesCount}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Input
              label="Add a Reply"
              className="border-grayText text-light-textColor dark:text-dark-textColor"
              placeholder="Share your solution or ask for clarificaion"
            />
            <ButtonGradiant text="Post A Reply" />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default BugPop;
