import React from "react";
import NavBar from "../NavBar/Nav";
import { Link } from "react-router-dom";
import Logo from "../../Media/Logo.png";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 pt-20 bg-white border dark:bg-mainDarkModeColor border-slate-200">
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <h5 className="text-xl font-semibold text-slate-800 dark:text-white">
              Bugopedia
            </h5>
          </div>
          <p className="text-sm text-slate-600 text-grayText">
            A community-driven platform for debugging and learning together.
          </p>
        </div>

        <div>
          <h6 className="mb-3 text-base font-semibold text-slate-800 text-blackText dark:text-whiteText">
            Quick Links
          </h6>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hove r:text-black"
              >
                Browse Bugs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hover:text-black"
              >
                Submit Bug
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hover:text-black"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hover:text-black"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mb-3 text-base font-semibold text-slate-800 text-blackText dark:text-whiteText">
            Community
          </h6>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hover:text-black"
              >
                Guidelines
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hover:text-black"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hover:text-black"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-slate-500 text-grayText hover:text-black"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mb-3 text-base font-semibold text-blackText dark:text-whiteText ">
            Connect
          </h6>
          <div className="flex gap-3">
            <Link
              to="#"
              className="p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white "
            >
              <i className=" fa-brands fa-github">
                <FaGithub className="w-6 h-6 text-blackText dark:text-whiteText" />
              </i>
            </Link>
            <Link
              to="#"
              className="p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white"
            >
              <i className="fa-brands fa-twitter">
                <FaTwitter className="w-6 h-6 text-blackText dark:text-whiteText " />
              </i>
            </Link>
            <Link
              to="#"
              className="p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-white"
            >
              <i className="fa-solid fa-envelope">
                <FaEnvelope className="w-6 h-6 text-blackText dark:text-whiteText" />
              </i>
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-5 mt-10 border-t border-slate-200">
        <p className="text-sm text-center text-slate-500 dark:text-white">
          © 2025 Bugopedia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
