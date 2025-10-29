import TopContributers from "./components/TopContributers/TopContributers";
import ButtonGradiant from "../../Components/Buttons/ButtonGradiant";
import BugCard from "./components/Bugs/BugCard";
import TrendingTags from "./components/SideBar/TrendingTags";
import BugOfTheWeek from "./components/SideBar/BugOfTheWeek";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FaCode } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const leaderBoard = [
    {
      name: "User 1",
      points: "100",
      id: 1,
    },
    {
      name: "User 2",
      points: "100",
      id: 2,
    },
    {
      name: "User 3",
      points: "100",
      id: 3,
    },
    {
      name: "User 4",
      points: "100",
      id: 4,
    },
    {
      name: "User 5",
      points: "100",
      id: 5,
    },
  ];

  const latestBugs = [
    {
      author: "User Name 1",
      time: "a few hours ago",
      title: "Bug in POS calculation",
      code: "itn x = 5; cout << x;",
      likesCount: "4",
      commentsCount: "12",
      solved: false,
      id: 1,
      comments: [
        {
          user: "user name 1",
          commentDesc: "You have a syntax error ( int )",
          likesCount: "10",
          id: 1,
        },
        {
          user: "user name 2",
          commentDesc: "You have a syntax error ( int )",
          likesCount: "2",
          id: 2,
        },
      ],
    },
    {
      author: "User Name 2",
      time: "a few hours ago",
      title: "Bug in POS calculation",
      id: 2,

      code: "itn x = 5; cout << x;",
      likesCount: "4",
      commentsCount: "12",
      solved: true,
      comments: [
        {
          user: "user name ",
          commentDesc: "You have a syntax error ( int )",
          likesCount: "10",
          id: 1,
        },
        {
          user: "user name 2",
          commentDesc: "You have a syntax error ( int )",
          likesCount: "2",
          id: 2,
        },
      ],
    },
    {
      author: "User Name 3",
      time: "a few hours ago",
      title: "Bug in POS calculation",

      code: "itn x = 5; cout << x;",
      likesCount: "4",
      commentsCount: "12",
      solved: false,
      id: 3,

      comments: [
        {
          user: "user name 1",
          commentDesc: "You have a syntax error ( int )",
          likesCount: "10",
          id: 1,
        },
        {
          user: "user name 2",
          commentDesc: "You have a syntax error ( int )",
          likesCount: "2",
          id: 2,
        },
      ],
    },
  ];
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div
      className="flex justify-between w-full gap-10 mb-2"
      data-aos="fade-down"
      data-aos-duration="600"
    >
      {/* Main Feed Start */}
      <div className="w-full lg:w-3/4 md:px-20 ">
        {/* Hero Container Start*/}
        <div className="flex flex-col gap-5">
          {/* Top contributors Start */}
          <div className="hidden md:flex">
            <TopContributers leaderBoard={leaderBoard} />
          </div>
          {/* Top contributors End*/}

          <ButtonGradiant text="+ Share a Bug" onClickFun={handleOpen} />
          {/* Bugs  */}
          <div className="flex flex-col w-full gap-5">
            {latestBugs.map((bug) => (
              <BugCard
                key={bug.id}
                author={bug.author}
                time={bug.time}
                code={bug.code}
                likesCount={bug.likesCount}
                commentsCount={bug.commentsCount}
                solved={bug.solved}
                comments={bug.comments}
                title={bug.title}
              />
            ))}
          </div>
        </div>
        {/* Hero Container End*/}
      </div>

      {/* BUG POST TOGGLER */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="bg-white dark:bg-dark-backGround">
          <h3 className="text-light-textColor dark:text-dark-textColor">
            Share a Bug
          </h3>
        </DialogHeader>
        <DialogBody className="w-full bg-white dark:bg-dark-backGround">
          <div className="flex flex-col gap-3 ">
            <div>
              <h3 className="text-light-textColor dark:text-dark-textColor">
                Bug Title
              </h3>
              <input
                className="w-full p-1 bg-white border rounded-l dark:bg-dark-backGround border-grayText"
                type="text"
                placeholder="e.g ., React useState not updating after async call"
              />
            </div>
            <div>
              <h3 className="text-light-textColor dark:text-dark-textColor">
                Description
              </h3>
              <textarea
                name=""
                id=""
                className="w-full p-2 bg-white border resize-none dark:bg-dark-backGround border-grayText rounded-xl"
                placeholder="Describe your bug in detail, What happened? What did you expect to happen?"
              ></textarea>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <FaCode className="text-lg text-light-textColor dark:text-dark-textColor" />
                <h3 className="text-light-textColor dark:text-dark-textColor">
                  Code Snippet (Optional)
                </h3>
              </div>
              <textarea
                name=""
                id=""
                className="w-full p-2 bg-white border resize-none dark:bg-dark-backGround border-grayText rounded-xl"
                placeholder="Paste Your Code Here ..."
              ></textarea>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <FaTag className="text-lg text-light-textColor dark:text-dark-textColor" />
                <h3 className="text-light-textColor dark:text-dark-textColor">
                  Tags
                </h3>
              </div>
              <input
                className="w-full p-1 bg-white border rounded-l dark:bg-dark-backGround border-grayText"
                type="text"
                placeholder="e.g ., React , Javascript , Hooks (comma-seperated)"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="w-full bg-white dark:bg-dark-backGround">
          <div className="flex gap-5">
            <Button
              variant="outlined"
              className="text-light-textColor dark:text-dark-textColor"
              onClick={handleOpen}
            >
              Cancel
            </Button>
            <ButtonGradiant text="Share Bug" onClickFun={handleOpen} />
          </div>
        </DialogFooter>
      </Dialog>
      {/* Main Feed End */}

      {/* Side Bar Start*/}
      <div className="hidden w-1/4 h-screen gap-5 mt-5 bg-white md:flex dark:bg-dark-backGround md:flex-col pe-2">
        <TrendingTags />
        <BugOfTheWeek />
      </div>
      {/* Side Bar End*/}
    </div>
  );
}

export default Home;
