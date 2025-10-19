import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const handleHome = () => navigate("/", { replace: true });

  return (
    <main
      className="flex items-center justify-center px-4 min-h-screen
                 bg-whiteText dark:bg-darkModeBg transition-colors duration-300"
    >
      <div className="text-center max-w-md w-full">
        <div className="mb-8 flex justify-center">
          <div
            className="p-6 rounded-2xl shadow-lg inline-flex items-center justify-center
                       bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo"
          >
            <MdError size={48} className="text-whiteText" />
          </div>
        </div>

        <div className="mb-6">
          <h1
            className="text-6xl font-bold mb-2 
                       bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo
                       bg-clip-text text-transparent"
          >
            404
          </h1>
          <p className="text-2xl font-semibold text-blackText dark:text-whiteText">
            Page Not Found
          </p>
        </div>

        <p className="mb-8 text-base leading-relaxed text-grayText">
          Oops! It looks like something went wrong or this page doesn't exist.
          Don't worry, our team is already on it. Please try refreshing the page
          or go back home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleHome}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium
                       transition duration-300 hover:opacity-90
                       bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo text-whiteText"
          >
            <IoMdHome size={20} />
            Back Home
          </button>
        </div>

        <p className="mt-8 text-sm text-grayText">
          Error Code: <span className="text-lightBlue">ERR_404</span>
        </p>
      </div>
    </main>
  );
};

export default Notfound;
