import { GiTrophyCup } from "react-icons/gi";
import { FaRegMessage } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { FaBugSlash } from "react-icons/fa6";

const ProfileActivity = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-3 !bg-white">
      <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6 transition-colors duration-300 bg-white border-2 rounded-lg shadow-lg border-secondaryColorTwo hover:border-orangeColor dark:bg-mainDarkModeColor">
        <GiTrophyCup className="p-2 text-5xl rounded-full !bg-mainGradient !text-whiteText" />

        <h1 className="mb-1 text-3xl text-secondaryColorOne ">2,450</h1>

        <p className="text-base font-light text-grayText ">Total Points</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6 transition-colors duration-300 bg-white border-2 rounded-lg shadow-lg border-secondaryColorTwo hover:border-orangeColor dark:bg-mainDarkModeColor">
          <FaMedal className="p-2 text-5xl rounded-full bg-mainGradient text-whiteText" />

          <h1 className="mb-1 text-3xl text-secondaryColorOne ">8</h1>

          <p className="text-base font-light text-grayText ">Badges Earned</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6 transition-colors duration-300 bg-white border-2 rounded-lg shadow-lg border-secondaryColorTwo hover:border-orangeColor dark:bg-mainDarkModeColor">
          <FaBugSlash className="p-2 text-5xl rounded-full bg-mainGradient text-whiteText" />

          <h1 className="mb-1 text-3xl text-secondaryColorOne ">48</h1>

          <p className="text-base font-light text-grayText ">Bug Submitted</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <div className="flex flex-col items-center justify-center w-64 h-64 gap-8 my-6 transition-colors duration-300 bg-white border-2 rounded-lg shadow-lg border-secondaryColorTwo hover:border-orangeColor dark:bg-mainDarkModeColor">
          <FaRegMessage className="p-2 text-5xl rounded-full bg-mainGradient text-whiteText" />

          <h1 className="mb-1 text-3xl text-secondaryColorOne ">156</h1>

          <p className="text-base font-light text-grayText ">Comments Made</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileActivity;
