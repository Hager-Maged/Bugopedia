import { GiTrophyCup } from "react-icons/gi";

const Header = () => {
  return (
    <div className="mb-8 w-6/12  text-blackText dark:text-white">
      <div className="flex justify-center  items-center  md:flex-row gap-5 pt-10  md:justify-between mx-4">
        <div className="flex gap-3  md:items-start  ">
          <GiTrophyCup className="bg-mainGradient text-5xl text-white p-1 rounded-2xl " />
          <div className=" flex flex-col">
            <h1>Leaderboard</h1>
            <p className="text-grayText">Top contributors this week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
