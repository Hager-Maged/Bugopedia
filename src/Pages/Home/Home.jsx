import TopContributers from "./components/TopContributers/TopContributers";
import ButtonGradiant from "../../Components/Buttons/ButtonGradiant";
import BugCard from "./components/Bugs/BugCard";
import TrendingTags from "./components/SideBar/TrendingTags";
import BugOfTheWeek from "./components/SideBar/BugOfTheWeek";
import { useState } from "react";
import useData from "../../hooks/useFetch";

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
  const [bug_title, setBugTitle] = useState("");
  const [bug_description, setBugDescription] = useState("");
  const [bug_code, setBugCode] = useState("");
  const [bug_tags, setBugTags] = useState("");
  const [bug_category, setBugCategory] = useState("Front-End");

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

  const { data } = useData(
    "https://project-backend-pi-weld.vercel.app/api/v1/home/get-all-bugs"
  );
  const latestBugs = data;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  //  Handle Bug Post

  const handleBugPost = async () => {
    console.log(bug_category);
    const bugData = {
      title: bug_title,
      description: bug_description,
      snippit: bug_code,
      tags: bug_tags,
      categoryName: bug_category,
      userId: JSON.parse(localStorage.getItem("currentUser")).id,
      
    };

    handleOpen(!open);

    try {
      const res = await fetch(
        "https://project-backend-pi-weld.vercel.app/api/v1/home/add_bug",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bugData),
        }
      );

      const data = await res.json();
      console.log("Bug added:", data);
    } catch (err) {
      console.error(err);
    }
  };

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
                key={bug._id}
                author={bug.author}
                time={bug.date}
                code={bug.snippit}
                likesCount={bug.votes}
                commentsCount={bug.replies}
                solved={bug.state}
                comments={bug.replyDetails}
                title={bug.title}
              />
            ))}
          </div>
        </div>
        {/* Hero Container End*/}
      </div>

      {/* BUG POST TOGGLER */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="bg-white dark:bg-dark-backGround rounded-2xl">
          <h3 className="text-light-textColor dark:text-dark-textColor">
            Share a Bug
          </h3>
        </DialogHeader>
        <DialogBody className="w-full  dark:bg-dark-backGround ">
          <div className="flex flex-col gap-3 ">
            <div>
              <h3 className="text-light-textColor dark:text-dark-textColor">
                Bug Title
              </h3>
              <input
                className="w-full p-1 bg-white border rounded-l dark:bg-dark-backGround border-grayText"
                type="text"
                placeholder="e.g ., React useState not updating after async call"
                value={bug_title}
                onChange={(e) => setBugTitle(e.target.value)}
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
                value={bug_description}
                onChange={(e) => setBugDescription(e.target.value)}
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
                value={bug_code}
                onChange={(e) => setBugCode(e.target.value)}
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
                value={bug_tags}
                onChange={(e) => setBugTags(e.target.value)}
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <FaTag className="text-lg text-light-textColor dark:text-dark-textColor" />
                <h3 className="text-light-textColor dark:text-dark-textColor">
                  Category
                </h3>
              </div>
              <select
                name=""
                id=""
                className="w-full p-3 bg-white rounded-l border border-grayText dark:bg-dark-backGround "
                value={bug_category}
                onChange={(e) => setBugCategory(e.target.value)}
              >
                <option value="Front-End">Front End</option>
                <option value="Back-End">Back End</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="w-full bg-white dark:bg-dark-backGround rounded-2xl">
          <div className="flex gap-5">
            <Button
              variant="outlined"
              className="text-light-textColor dark:text-dark-textColor"
              onClick={handleOpen}
            >
              Cancel
            </Button>
            <ButtonGradiant text="Share Bug" onClickFun={handleBugPost} />
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
