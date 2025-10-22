import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";

const Header = ({ categoryName, bugCount }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2  ">
      <button
        onClick={() => navigate(-1)}
        className="w-fit hover:bg-[#be582115] whitespace-pre-line leading-relaxed p-2 rounded-3xl"
      >
        <div className="flex gap-4 items-center">
          <GoArrowLeft className="text-xl font-bold text-blackText dark:text-white" />
          <h1 className="font-medium text-sm text-blackText dark:text-white">
            Back to Tech Page
          </h1>
        </div>
      </button>
      <div className="flex gap-3 items-center ">
        <p className="text-center text-black dark:text-white">{categoryName}</p>
        <span className="p-2 font-medium text-black bg-gray-300 rounded-xl dark:bg-[#251f37] dark:text-white">
          {bugCount} bugs
        </span>
      </div>
      <p className="text-gray-800 dark:text-grayText">
        {" "}
        Browse and contribute to bug reports in {categoryName}{" "}
      </p>
    </div>
  );
};

export default Header;
