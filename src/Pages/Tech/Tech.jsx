import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaJs,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";
import { SiTypescript, SiCplusplus } from "react-icons/si";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosTrendingUp } from "react-icons/io";

 


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const bugCategories = [
  {
    id: 1,
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500 text-4xl" />,
    bugCount: 3542,
    trending: true,
    recentBugs: [
      {
        id: 1,
        title: "Async/await not working in forEach loop",
        votes: 245,
        replies: 18,
        solved: true,
      },
      {
        id: 2,
        title: "Cannot read property of undefined error",
        votes: 189,
        replies: 12,
        solved: true,
      },
      {
        id: 3,
        title: "Event listener memory leak in React",
        votes: 156,
        replies: 9,
        solved: false,
      },
    ],
  },
  {
    id: 2,
    name: "Python",
    icon: <FaPython className="text-blue-500 text-4xl" />,
    bugCount: 2890,
    trending: true,
    recentBugs: [
      {
        id: 1,
        title: "ImportError: No module named 'requests'",
        votes: 312,
        replies: 22,
        solved: true,
      },
      {
        id: 2,
        title: "IndentationError in multi-line statement",
        votes: 267,
        replies: 15,
        solved: true,
      },
      {
        id: 3,
        title: "Django migrations not applying correctly",
        votes: 198,
        replies: 11,
        solved: false,
      },
    ],
  },
  {
    id: 3,
    name: "React",
    icon: <FaReact className="text-blue-200 text-4xl" />,
    bugCount: 4125,
    trending: true,
    recentBugs: [
      {
        id: 1,
        title: "useState not updating immediately after setState",
        votes: 421,
        replies: 28,
        solved: true,
      },
      {
        id: 2,
        title: "Infinite re-render loop with useEffect",
        votes: 378,
        replies: 24,
        solved: true,
      },
      {
        id: 3,
        title: "Props not passing to child component",
        votes: 289,
        replies: 16,
        solved: true,
      },
    ],
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-4xl" />,
    bugCount: 2134,
    trending: false,
    recentBugs: [
      {
        id: 1,
        title: "Type 'null' is not assignable to type",
        votes: 298,
        replies: 19,
        solved: true,
      },
      {
        id: 2,
        title: "Cannot find module or its type declarations",
        votes: 245,
        replies: 14,
        solved: true,
      },
      {
        id: 3,
        title: "Generic type constraints not working",
        votes: 187,
        replies: 10,
        solved: false,
      },
    ],
  },
  {
    id: 5,
    name: "CSS/Tailwind",
    icon: <FaCss3Alt className="text-indigo-500 text-4xl" />,
    bugCount: 1876,
    trending: false,
    recentBugs: [
      {
        id: 1,
        title: "Flexbox not centering items vertically",
        votes: 334,
        replies: 21,
        solved: true,
      },
      {
        id: 2,
        title: "Tailwind classes not applying in production",
        votes: 276,
        replies: 17,
        solved: true,
      },
      {
        id: 3,
        title: "Z-index not working as expected",
        votes: 198,
        replies: 13,
        solved: true,
      },
    ],
  },
  {
    id: 6,
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
    bugCount: 2456,
    trending: false,
    recentBugs: [
      {
        id: 1,
        title: "EADDRINUSE: Port already in use",
        votes: 389,
        replies: 25,
        solved: true,
      },
      {
        id: 2,
        title: "MongoDB connection timeout error",
        votes: 312,
        replies: 19,
        solved: true,
      },
      {
        id: 3,
        title: "Express middleware not executing",
        votes: 234,
        replies: 14,
        solved: false,
      },
    ],
  },
  {
    id: 7,
    name: "C++",
    icon: <SiCplusplus className="text-blue-700 text-4xl" />,
    bugCount: 1654,
    trending: false,
    recentBugs: [
      {
        id: 1,
        title: "Segmentation fault in pointer arithmetic",
        votes: 267,
        replies: 18,
        solved: true,
      },
      {
        id: 2,
        title: "Memory leak with dynamic allocation",
        votes: 223,
        replies: 15,
        solved: true,
      },
      {
        id: 3,
        title: "Undefined reference to vtable error",
        votes: 189,
        replies: 11,
        solved: false,
      },
    ],
  },
  {
    id: 8,
    name: "Java",
    icon: <FaJava className=" text-red-500 text-4xl" />,
    bugCount: 1923,
    trending: false,
    recentBugs: [
      {
        id: 1,
        title: "NullPointerException in stream operation",
        votes: 298,
        replies: 20,
        solved: true,
      },
      {
        id: 2,
        title: "ConcurrentModificationException in ArrayList",
        votes: 245,
        replies: 16,
        solved: true,
      },
      {
        id: 3,
        title: "ClassNotFoundException at runtime",
        votes: 198,
        replies: 12,
        solved: true,
      },
    ],
  },
  {
    id: 9,
    name: "Git/GitHub",
    icon: <FaGitAlt className="text-orange text-4xl" />,
    bugCount: 1234,
    trending: false,
    recentBugs: [
      {
        id: 1,
        title: "Merge conflict resolution strategies",
        votes: 356,
        replies: 23,
        solved: true,
      },
      {
        id: 2,
        title: "Unable to push to remote repository",
        votes: 289,
        replies: 18,
        solved: true,
      },
      {
        id: 3,
        title: "Detached HEAD state after rebase",
        votes: 234,
        replies: 14,
        solved: true,
      },
    ],
  },
  {
    id: 10,
    name: "SQL/Databases",
    icon: <FaDatabase className="text-yellow-800 text-4xl" />,
    bugCount: 1567,
    trending: false,
    recentBugs: [
      {
        id: 1,
        title: "N+1 query problem in ORM",
        votes: 312,
        replies: 21,
        solved: true,
      },
      {
        id: 2,
        title: "Foreign key constraint violation",
        votes: 267,
        replies: 17,
        solved: true,
      },
      {
        id: 3,
        title: "Slow query performance on large table",
        votes: 223,
        replies: 13,
        solved: false,
      },
    ],
  },
];
const Tech = (input) => {

  const navigate = useNavigate();

  const goBugs = (category) => {
    navigate(`/bugs/${category.name}`);}

  const [openId, setOpenId] = React.useState(0);
  const toggle = (id) => setOpenId(openId === id ? 0 : id);

  let totalBugs = 0;
  for (let i = 0; i < bugCategories.length; i++) {
    totalBugs = totalBugs + bugCategories[i].bugCount;
  }
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 text-gray-900 dark:bg-darkModeBg dark:text-whiteText">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-secondaryGradient from- text-gray-50">
              <FaLaptopCode />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Tech Categories</h1>
              <p className="text-sm text-gray-500">
                Browse bugs by technology and language
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-white rounded-lg shadow-sm text-center dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText">
            <div className="text-2xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-orangeColor to-[#FF3366]">
              {totalBugs.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">Total Bugs</div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm text-center  dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText">
            <div className="text-2xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#FF3366] to-lightPurple">
              {bugCategories.length}
            </div>
            <div className="text-xs text-gray-500">Categories</div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm text-center  dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText">
            <div className="text-2xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-lightPurple to-[#6366f1]">
              85%
            </div>
            <div className="text-xs text-gray-500">Solved Rate</div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm text-center  dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText">
            <div className="text-2xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#ec4899]">
              24h
            </div>
            <div className="text-xs text-gray-500">Avg Response</div>
          </div>
        </div>

        <div className="space-y-4">
          {bugCategories.map((category) => {
            const id = category.id;
            return (
              <Accordion
                key={id}
                open={openId === id}
                icon={<Icon id={id} openId={openId} />}
              >
                <AccordionHeader onClick={() => toggle(id)}>
                  <div className="flex items-center justify-between w-full  dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText dark:p-5 dark:rounded-lg">
                    <div className="flex items-center gap-4">
                      <div>{category.icon}</div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-whiteText">
                          {category.name}
                        </div>
                        <div className="text-sm text-gray-500 ">
                          {category.bugCount.toLocaleString()} bugs ·{" "}
                          {category.recentBugs.length} recent
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {category.trending && (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-gradient-to-r from-[#FF6B35]/10 to-[#FF3366]/10 border border-[#FF6B35]/20 text-[#FF6B35]">
                          <IoIosTrendingUp />
                          <span>Trending</span>
                        </span>
                      )}
                    </div>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <p className="text-gray-600 mb-4 ">{category.description}</p>

                  <div className="space-y-3">
                    {category.recentBugs.map((bug) => (
                      <div
                        key={bug.id}
                        onClick={() => onBugClick && onBugClick({ ...bug })}
                        className="p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer transition-colors  dark:bg-mainDarkModeColor dark:text-whiteText dark:border-whiteText"
                      >
                        <div className="flex items-start gap-4 ">
                          <div className="w-16 text-center">
                            <div className="text-sm font-medium text-gray-600 dark:text-whiteText">
                              {bug.votes}
                            </div>
                            <div className="text-xs text-gray-400">votes</div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-medium text-gray-800 dark:text-whiteText">
                                {bug.title}
                              </h4>
                              {bug.solved && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-green-700 bg-green-50 border border-green-100 text-sm dark:text-green-900 dark:bg-green-200">
                                  ✓ Solved
                                </span>
                              )}
                            </div>

                            <div className="text-sm text-gray-500">
                              {bug.replies} replies • 2 hours ago
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => goBugs(category)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-white "
                    >
                      View All {category.name} Bugs
                      <FaArrowRight />
                    </button>
                  </div>
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tech;
