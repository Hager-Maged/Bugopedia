import { FaUserFriends } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { FaCode } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";

const OurMission = () => {
  return (
    // Cards
    <div className=" pb-10 " data-aos="fade-down">
      {/* CARDS */}
      <div className=" grid grid-cols-1 md:grid-cols-4 pt-8 gap-3 px-4" data-aos="fade-down">
        <div className="transition-all hover:scale-105 flex flex-col gap-5 items-center rounded-2xl p-5 dark:bg-mainDarkModeColor">
          <FaUserFriends className="text-5xl text-orangeColor " />
          <p className="text-blackText dark:text-whiteText">0</p>
          <p className="text-grayText">Active Users</p>
        </div>
        <div className="transition-all hover:scale-105  flex flex-col gap-5 items-center  rounded-2xl p-5 dark:bg-mainDarkModeColor">
          <IoMdCheckmarkCircleOutline className="text-5xl text-orangeColor " />
          <p className="text-blackText dark:text-whiteText">0</p>
          <p className="text-grayText">Bugs Solved</p>
        </div>
        <div className="transition-all hover:scale-105  flex flex-col gap-5 items-center  rounded-2xl p-5 dark:bg-mainDarkModeColor">
          <FaRegHeart className="text-5xl text-orangeColor " />
          <p className="text-blackText dark:text-whiteText">0</p>
          <p className="text-grayText">Community Members</p>
        </div>
        <div className="transition-all hover:scale-105  flex flex-col gap-5 items-center  rounded-2xl p-5 dark:bg-mainDarkModeColor">
          <SlEnergy className="text-5xl text-orangeColor " />
          <p className="text-blackText dark:text-whiteText">0</p>
          <p className="text-grayText">Daily Solutions</p>
        </div>
      </div>
      {/* Our Mission */}
      <div className="mt-10 text-center p-5" >
        <h1 className="text-2xl text-blackText dark:text-whiteText mb-4 font-semibold">
          Our Mission
        </h1>
        <p className="text-grayText">
          At Bugopedia, we believe that every bug is an opportunity to learn and
          grow. Our mission is to create a supportive community where developers
          of all skill levels can share their challenges, find solutions, and
          help others on their coding journey. We're building more than just a
          platform – we're building a movement that makes debugging
          collaborative, educational, and even enjoyable.
        </p>
      </div>
      {/* Our Mission Cards */}
      <div className="grid gird-cols-1 lg:grid-cols-2 mt-10 gap-3">
        <div className="flex gap-3   rounded-xl p-5 py-7" data-aos="flip-left" data-aos-delay="100" >  
          <div>
            <FaCode className="text-orangeColor bg-lightPink dark:bg-mutedYellow p-2 text-5xl rounded-xl" />
          </div>
          <div>
            <h3 className="text-blackText font-semibold text-xl dark:text-whiteText">
              Developer First
            </h3>
            <p className="text-grayText">
              Built by developers, for developers. We understand your challenges
              and create solutions that work.
            </p>
          </div>
        </div>

        <div className="flex gap-3   rounded-xl p-5 py-7"data-aos="flip-left" data-aos-delay="300">
          <div>
            <FaUserFriends className="text-orangeColor bg-lightPink dark:bg-mutedYellow p-2 text-5xl rounded-xl" />
          </div>
          <div>
            <h3 className="text-blackText font-semibold text-xl dark:text-whiteText">
              Community Driven
            </h3>
            <p className="text-grayText">
              Our community is at the heart of everything we do. Together, we
              solve problems and grow.
            </p>
          </div>
        </div>

        <div className="flex gap-3   rounded-xl p-5 py-7" data-aos="flip-left" data-aos-delay="500">
          <div>
            <FaUserFriends className="text-orangeColor bg-lightPink dark:bg-mutedYellow p-2 text-5xl rounded-xl" />
          </div>
          <div>
            <h3 className="text-blackText font-semibold text-xl dark:text-whiteText">
              Learning Focused
            </h3>
            <p className="text-grayText">
              Every bug is an opportunity to learn. We foster an environment of
              continuous improvement.
            </p>
          </div>
        </div>

        <div className="flex gap-3   rounded-xl p-5 py-7" data-aos="flip-left" data-aos-delay="700">
          <div>
            <IoShieldOutline className="text-orangeColor bg-lightPink dark:bg-mutedYellow p-2 text-5xl rounded-xl" />
          </div>
          <div>
            <h3 className="text-blackText font-semibold text-xl dark:text-whiteText">
              Quality & Trust
            </h3>
            <p className="text-grayText">
              We maintain high standards for content quality and create a safe,
              respectful environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
