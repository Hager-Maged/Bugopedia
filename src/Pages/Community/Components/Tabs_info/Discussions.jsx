import { AiOutlineLike } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

const discussionsData = [
  {
    id: 1,
    likes: 128,
    title: "What's your favorite debugging technique?",
    tags: ["General", "debugging", "best-practices"],
    user: "user name",
    email: "@email",
    replies: "replies",
    views: "892 views",
    time: "2 hours ago",
  },
  {
    id: 2,
    likes: 95,
    title: "How do you handle API errors gracefully?",
    tags: ["API", "error-handling", "frontend"],
    user: "John Doe",
    email: "@john",
    replies: "25 replies",
    views: "520 views",
    time: "5 hours ago",
  },
  {
    id: 3,
    likes: 210,
    title: "Best practices for CSS organization?",
    tags: ["CSS", "structure", "style-guide"],
    user: "Sara",
    email: "@sara",
    replies: "18 replies",
    views: "750 views",
    time: "1 day ago",
  },
  {
    id: 4,
    likes: 68,
    title: "How to optimize React renders?",
    tags: ["React", "performance", "hooks"],
    user: "Ali",
    email: "@ali",
    replies: "30 replies",
    views: "1.2k views",
    time: "3 hours ago",
  },
];

const Discussions = () => {
  return (
    <div className="grid grid-cols-1 gap-3 pt-5 ">
      {discussionsData.map((item) => (
        <div
          key={item.id}
          className="flex gap-5 border p-10 rounded-2xl border-[#e6e6e6] hover:shadow-xl dark:bg-card dark:border-[#3d3554]"
        >
          <div className="flex justify-center items-center flex-col gap-4">
            <button className="text-xl dark:text-[#f9fafb]">
              <AiOutlineLike />
            </button>
            <p className="dark:text-[#f9fafb] text-blackText">{item.likes}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-blackText dark:text-[#f9fafb]">{item.title}</p>

            <div className="flex gap-1.5 ">
              {item.tags.map((tag, index) => (
                <button
                  key={index}
                  className="border p-1 px-2 rounded-3xl text-xs font-bold dark:text-[#f9fafb]"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex gap-2 justify-center items-center dark:text-pargraph text-sm">
              <div className="flex justify-center items-center gap-2">
                <FaRegUserCircle className="text-2xl" />
                <p>{item.user}</p>
                <p>{item.email}</p>
              </div>
              <BsDot />
              <div className="flex justify-center items-center gap-0.5">
                <LuMessageCircle />
                <p>{item.replies}</p>
              </div>
              <BsDot />
              <p>{item.views}</p>
              <BsDot />
              <p>{item.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discussions;
