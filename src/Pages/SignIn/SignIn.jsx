import React from "react";
import Logo2 from "../../Media/Logo2.png";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Signin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleUser = () => {
    if (user.email == "admin@admin" && user.password == "123") {
      navigate("/");
    }
  };
  return (
    <section className="flex items-center justify-center w-full min-h-screen p-10 bg-darkModeBg">
      <div className="flex flex-col items-center w-full max-w-xl p-10 bg-white rounded-lg shadow-lg">
        <img src={Logo2} alt="Logo" className="w-auto h-40 mb-6" />

        <Typography variant="h3" color="blue-gray" className="mb-2">
          Welcome Back!
        </Typography>
        <Typography className="text-gray-600 font-normal text-[18px] mb-6">
          Sign in to continue to Bugopedia.
        </Typography>

        <form className="w-full">
          <div className="relative mb-6">
            <MdOutlineMail className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <Input
              id="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              size="lg"
              type="email"
              placeholder="you@example.com"
              className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{ className: "hidden" }}
            />
          </div>

          <div className="relative mb-6">
            <TbLockPassword className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <Input
              size="lg"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type={passwordShown ? "text" : "password"}
              placeholder="********"
              className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{ className: "hidden" }}
              icon={
                <i
                  onClick={() => setPasswordShown(!passwordShown)}
                  className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
                >
                  {passwordShown ? (
                    <EyeIcon className="w-5 h-5 text-gray-600" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5 text-gray-600" />
                  )}
                </i>
              }
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 border border-gray-300 rounded checked:bg-gray-800 checked:border-gray-800"
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>

            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium underline"
            >
              Forgot password?
            </Typography>
          </div>

          <button
            type="button"
            onClick={handleUser}
            className="flex items-center justify-center w-full gap-2 py-3 text-whiteText transition-all rounded-md shadow-md bg-mainGradient hover:shadow-lg hover:scale-[1.02] focus:scale-[0.98] active:scale-[0.96]"
          >
            Sign In <FaArrowRight />
          </button>

          <div className="flex items-center justify-center mt-6 mb-4">
            <p className="text-grayText">Or continue with</p>
          </div>

          <div className="flex gap-4">
            <Button className="flex items-center justify-center flex-1 gap-2 py-3 text-black bg-gray-200 hover:bg-gray-300">
              <FaGithub /> Github
            </Button>
            <Button className="flex items-center justify-center flex-1 gap-2 py-3 text-black bg-gray-200 hover:bg-gray-300">
              <FaGoogle /> Google
            </Button>
          </div>

          <Typography
            variant="small"
            color="gray"
            className="mt-6 text-base font-normal text-center"
          >
            Not registered?{" "}
            <Link to="/signup" className="font-bold text-orangeColor">
              Sign Up
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default Signin;
