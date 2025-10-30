import React from "react";
import { FaArrowRight, FaRegLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuBug } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "/images/Logo.png";

const Landingpart = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/home", { replace: true });
  const goAboutUs = () => navigate("/aboutus", { replace: true });
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-1 px-4 space-y-5 text-center bg-gradient-to-br from-[#1a1625] via-[#2d1f4a] to-[#1a1625] pb-14">
      <img src={Logo} alt="Logo" className="object-contain w-28 h-28 mt-7" />
      <h1 className="text-6xl md:text-7xl text-whiteText">Debug Together,</h1>
      <h2 className="pb-2 text-5xl text-transparent md:text-6xl bg-secondaryGradient bg-clip-text">
        Grow Together
      </h2>
      <p className="text-lg md:text-xl text-grayText">
        Join thousands of developers solving bugs collaboratively. Share, learn,
        and build better software together.
      </p>
      <div className="relative w-full max-w-4xl mx-auto">
        <input
          className="w-full py-2 pl-12 pr-3 text-sm transition duration-300 border rounded-md shadow-sm h-14 text-orangeColor bg-darkModeBg placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow hover:border-orange"
          placeholder="Search for bugs, errors, or solutions..."
        />
        <button
          className="absolute left-3 top-3 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <CiSearch />
        </button>
      </div>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          to="/home"
          className="flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg hover:opacity-90 hover:scale-120 bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo text-whiteText"
        >
          <button
            onClick={goHome}
            className="flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg hover:opacity-90 hover:scale-120 bg-gradient-to-r from-secondaryColorOne to-secondaryColorTwo text-whiteText"
          >
            Start Debugging
            <FaArrowRight />
          </button>
        </Link>
        <button
          onClick={goAboutUs}
          className="px-8 py-4 font-semibold border-2 rounded-lg border-whiteText text-whiteText hover:opacity-40"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Landingpart;
