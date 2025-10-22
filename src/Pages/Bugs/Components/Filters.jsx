import { CiFilter } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";

const Filters = ({ filter, setFilter, sortFilter, setSortFilter }) => {
  return (
   <div className="flex flex-wrap sm:flex-wrap justify-between mt-3 gap-3">
  <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center ">
    <CiFilter className="text-2xl text-gray-600 " />
    <p className="text-gray-600 shrink-0">Filter :</p>

    <ButtonGradiant
      text={"All"}
      size={"sm"}
      onClickFun={() => setFilter("all")}
      classs={`btn ${filter === "all" ? "active" : ""} h-10 xsm:px-2 xsm:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2`}
    />
    <ButtonGradiant
      text={"Solved"}
      size={"sm"}
      onClickFun={() => setFilter("solved")}
      classs={`btn ${filter === "solved" ? "active" : ""}h-10 xsm:px-2 xsm:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2`}
    />
    <ButtonGradiant
      text={"Unsolved"}
      size={"sm"}
      onClickFun={() => setFilter("unsolved")}
      classs={`btn ${filter === "unsolved" ? "active" : ""}h-10 xsm:px-2 xsm:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2`}
    />
  </div>

  <div className="flex flex-wrap sm:flex-wrap gap-2 items-center ">
    <p className="text-gray-600 shrink-0">Sort by :</p>

    <ButtonGradiant
      text={
        <div className="flex gap-1 items-center">
          <FaArrowTrendUp className="text-2xl" />
          <span className="ml-2">Trending</span>
        </div>
      }
      size={"sm"}
      onClickFun={() => {
        setFilter("all");
        setSortFilter("all");
      }}
      classs={`btn ${filter === "all" && sortFilter === "all" ? "active" : ""}h-10  xsm:px-2 xsm:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 `}
    />
    <ButtonGradiant
      text={
        <div className="flex gap-1 items-center">
          <IoMdTime className="text-2xl" />
          <span className="ml-2">Recent</span>
        </div>
      }
      size={"sm"}
      onClickFun={() => setSortFilter("recent")}
      classs={`${sortFilter === "recent" ? "active" : ""}h-10 xsm:px-2 xsm:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2`}
    />
    <ButtonGradiant
      text={
        <div className="flex gap-1 items-center">
          <AiOutlineLike className="text-2xl" />
          <span className="ml-2">Votes</span>
        </div>
      }
      size={"sm"}
      onClickFun={() => setSortFilter("votes")}
      classs={`${sortFilter === "votes" ? "active" : ""}h-10  xsm:px-2 xsm:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2`}
    />
  </div>
</div>

  );
};

export default Filters;
