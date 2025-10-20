import { AiFillLike } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Discussions = () => {
  const [flag]=useState(false) 
const [discussions, setDiscussions] = useState([
  {
    id: 1,
    likes: 30,
    liked: false,
    title: "What's your favorite debugging technique?",
    tags: ["General", "debugging", "best-practices"],
    user: "Hamada",
    email: "@email",
    replies: "2 replies",
    views: "892 views",
    time: "2 hours ago",
    details: `I've been coding for several years now, and I've noticed that different debugging techniques work better in different situations. I'm curious to hear what methods the community finds most effective.

Personally, I've found that rubber duck debugging works surprisingly well for complex logic issues. There's something about explaining your code out loud (even to an inanimate object) that helps you spot the problem.

For production bugs, I rely heavily on proper logging and error tracking tools. Being able to see the exact state of the application when something went wrong is invaluable.

What are your go-to debugging techniques? Do you have any unconventional methods that work well for you?`,
    repliesData: [
      {
        id: 1,
        replier: "John Doe",
        email: "@john",
        time: "1 hour ago",
        content: "I totally agree with you! Rubber duck debugging helps me find logical errors faster.",
        likes: 8
      },
      {
        id: 2,
        replier: "Sara Ali",
        email: "@sara",
        time: "30 minutes ago",
        content: "Great point! I personally like using breakpoints in VS Code; it gives me better control while debugging complex components.",
        likes: 5
      }
    ]
  },
  {
    id: 2,
    likes: 50,
    liked: false,
    title: "How do you handle API errors gracefully?",
    tags: ["API", "error-handling", "frontend"],
    user: "John",
    email: "@john",
    replies: "2 replies",
    views: "520 views",
    time: "5 hours ago",
    details: `I've been coding for several years now, and I've noticed that different debugging techniques work better in different situations. I'm curious to hear what methods the community finds most effective.

Personally, I've found that rubber duck debugging works surprisingly well for complex logic issues. There's something about explaining your code out loud (even to an inanimate object) that helps you spot the problem.

For production bugs, I rely heavily on proper logging and error tracking tools. Being able to see the exact state of the application when something went wrong is invaluable.

What are your go-to debugging techniques? Do you have any unconventional methods that work well for you?`,    repliesData: [
      {
        id: 1,
        replier: "Sara Ali",
        email: "@sara",
        time: "4 hours ago",
        content: "I prefer using toast notifications for user feedback when API calls fail.",
        likes: 7
      },
      {
        id: 2,
        replier: "Ali Hassan",
        email: "@ali",
        time: "3 hours ago",
        content: "I always log errors to a monitoring service like Sentry — it helps track issues quickly.",
        likes: 6
      }
    ]
  },
  {
    id: 3,
    likes: 100,
    liked: false,
    title: "Best practices for CSS organization?",
    tags: ["CSS", "structure", "style-guide"],
    user: "Sara",
    email: "@sara",
    replies: "2 replies",
    views: "750 views",
    time: "1 day ago",
    details: `I've been coding for several years now, and I've noticed that different debugging techniques work better in different situations. I'm curious to hear what methods the community finds most effective.

Personally, I've found that rubber duck debugging works surprisingly well for complex logic issues. There's something about explaining your code out loud (even to an inanimate object) that helps you spot the problem.

For production bugs, I rely heavily on proper logging and error tracking tools. Being able to see the exact state of the application when something went wrong is invaluable.

What are your go-to debugging techniques? Do you have any unconventional methods that work well for you?`,    repliesData: [
      {
        id: 1,
        replier: "John Doe",
        email: "@john",
        time: "20 hours ago",
        content: "Totally! BEM naming helps avoid class conflicts.",
        likes: 10
      },
      {
        id: 2,
        replier: "Ali Hassan",
        email: "@ali",
        time: "18 hours ago",
        content: "I switched to Tailwind recently — it keeps things clean and scalable.",
        likes: 12
      }
    ]
  },
  {
    id: 4,
    likes: 20,
    liked: false,
    title: "How to optimize React renders?",
    tags: ["React", "performance", "hooks"],
    user: "Ali",
    email: "@ali",
    replies: "2 replies",
    views: "1.2k views",
    time: "3 hours ago",
    details: `I've been coding for several years now, and I've noticed that different debugging techniques work better in different situations. I'm curious to hear what methods the community finds most effective.

Personally, I've found that rubber duck debugging works surprisingly well for complex logic issues. There's something about explaining your code out loud (even to an inanimate object) that helps you spot the problem.

For production bugs, I rely heavily on proper logging and error tracking tools. Being able to see the exact state of the application when something went wrong is invaluable.

What are your go-to debugging techniques? Do you have any unconventional methods that work well for you?`,    repliesData: [
      {
        id: 1,
        replier: "John Doe",
        email: "@john",
        time: "2 hours ago",
        content: "Using React.memo for child components really helped in my app.",
        likes: 4
      },
      {
        id: 2,
        replier: "Sara Ali",
        email: "@sara",
        time: "1 hour ago",
        content: "Don't forget to optimize useEffect dependencies — they can cause extra renders.",
        likes: 9
      }
    ]
  }
]);



  return (
    <div className="grid grid-cols-1 gap-3 pt-5">
      {discussions.map((item) => (
        <Link
          to={`/post/${item.id}`}
          state={{ post: item }}
          key={item.id}
          className="flex md:gap-5 gap-2 border md:p-10 px-2 py-3 rounded-2xl border-borderLight hover:shadow-xl dark:bg-card dark:border-borderDark"
        >
          <div className="flex justify-center items-center flex-col gap-2 md:gap-4">
            <button
              className={`text-xl rounded-full p-2 transition-colors duration-200 hover:bg-[#acacac33] `}
            >
              <AiFillLike
                className={`text-2xl ${
                  item.liked
                    ? "text-orangeColor dark:text-orangeColor"
                    : "dark:text-pargraph"
                }`}
              />
            </button>
            <p className="dark:text-[#f9fafb] text-blackText">{item.likes}</p>
          </div>

          <div className="flex flex-col gap-2  min-w-0 flex-1">
            <p className="text-blackText dark:text-[#f9fafb] dark:hover:text-orangeColor">
              {item.title}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, index) => (
                <button
                  key={index}
                  className="border p-1 px-2 rounded-3xl text-xs font-bold dark:text-[#f9fafb]"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex gap-2  items-center dark:text-pargraph text-sm flex-wrap">
              <div className="flex justify-center items-center gap-2">
                <FaRegUserCircle className="text-2xl" />
                <p>{item.user}</p>
              </div>
              <BsDot className="hidden sm:block"/>
              <div className="flex justify-center items-center gap-0.5">
                <LuMessageCircle className="text-xl "/>
                <p>{item.replies}</p>
              </div>
              <BsDot className="hidden sm:block"/>
              <p>{item.views}</p>
              <BsDot className="hidden sm:block"/>
              <p>{item.time}</p>
            </div>
          </div>
          
        </Link>
        
      ))}
    </div>
  );
};

export default Discussions;
