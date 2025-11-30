  import React from "react";
  import { IoMdHome } from "react-icons/io";
  import { MdError } from "react-icons/md";
  import { useNavigate } from "react-router-dom";
  import { useEffect } from "react";

  const Notfound = ({ setHideNav }) => {
    const navigate = useNavigate();
    const handleHome = () => navigate("/");
    useEffect(() => {
    setHideNav(true); 
  }, [setHideNav]);


    return (
      <main className="flex items-center justify-center min-h-screen px-4 transition-colors duration-300 bg-whiteText dark:bg-darkModeBg">
        <div className="w-full max-w-md text-center">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center p-6 shadow-lg rounded-2xl bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo">
              <MdError className="text-whiteText text-8xl" />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="mb-2 text-6xl font-bold text-transparent bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo bg-clip-text">
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

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleHome}
              className="flex items-center justify-center gap-2 px-6 py-3 font-medium transition duration-300 rounded-lg hover:opacity-90 bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo text-whiteText"
            >
              <IoMdHome className="text-3xl " />
              Back Home
            </button>
          </div>
        </div>
      </main>
    );
  };

  export default Notfound;
