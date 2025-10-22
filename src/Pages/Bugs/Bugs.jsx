import { useParams, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import Filters from "./Components/Filters";
import { useState } from "react";
import { Data } from "./Data";

function Bugs() {
  const { categoryName } = useParams();
  const [filter, setFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("all");
  const navigate = useNavigate();

  const selectedCategory = Data.find(
    (bug) => bug.name.toLowerCase() === categoryName.toLowerCase()
  );

  const filteredBugs = selectedCategory.bugs.filter(
    (bug) =>
      (filter === "all" || bug.state === filter) &&
      (sortFilter === "all" || bug.sort === sortFilter)
  );

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <Header
        categoryName={selectedCategory.name}
        bugCount={selectedCategory.bugCount}
      />

      <Filters
        filter={filter}
        setFilter={setFilter}
        sortFilter={sortFilter}
        setSortFilter={setSortFilter}
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 pt-6">
        {filteredBugs.map(
          ({
            id,
            votes,
            title,
            state,
            caption,
            tags,
            author,
            views,
            replies,
            date,
          }) => (
            <div
              key={id}
              onClick={() => navigate(`/bugs/${selectedCategory.name}/${id}`)}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 border border-[#c0c0c0] p-5 sm:p-8 rounded-2xl hover:shadow-xl dark:bg-[#251f37] cursor-pointer transition-all"
            >
              <div className="flex sm:flex-col justify-start sm:justify-center items-center gap-2 sm:gap-4">
                <button className="text-lg sm:text-xl text-blackText dark:text-white">
                  <AiOutlineLike />
                </button>
                <p className="text-sm sm:text-base text-gray-800 dark:text-white">
                  {votes}
                </p>
              </div>

              <div className="flex flex-col w-full">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p className="text-base sm:text-lg font-semibold text-blackText dark:text-white">
                    {title}
                  </p>
                  {state === "solved" && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 rounded-2xl text-green-800 text-xs sm:text-sm">
                      <IoMdCheckmarkCircleOutline className="text-green-900 text-base sm:text-lg" />
                      Solved
                    </div>
                  )}
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed">
                  {caption}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className="border border-gray-600 dark:border-gray-400 text-xs sm:text-sm font-semibold px-2 py-1 rounded-2xl text-blackText dark:text-white"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 items-center mt-4 text-gray-700 dark:text-gray-400 text-xs sm:text-sm">
                  <FaRegUserCircle className="text-base sm:text-lg" />
                  <p>{author}</p>
                  <BsDot className="hidden sm:block" />
                  <LuMessageCircle className="text-base sm:text-lg" />
                  <p>{replies}</p>
                  <BsDot className="hidden sm:block" />
                  <p>{views} views</p>
                  <BsDot className="hidden sm:block" />
                  <p>{date}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Bugs;
