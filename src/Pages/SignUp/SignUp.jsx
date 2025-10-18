import { CardBody, Typography, Input, Button } from "@material-tailwind/react";
import Logo2 from "../../Media/Logo2.png";
import { FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  return (
    <section className="flex items-center justify-center w-full min-h-screen p-10 bg-darkModeBg">
      <div className="flex flex-col items-center w-full max-w-xl p-10 bg-white rounded-lg shadow-lg">
        <img src={Logo2} alt="Logo" className="w-auto h-40 mb-6" />

        <Typography variant="h3" color="blue-gray" className="mb-2">
          Create Account
        </Typography>
        <Typography className="text-gray-600 font-normal text-[18px] mb-6">
          Join the Bugopedia community today
        </Typography>
        <form className="w-full">
          <CardBody className="flex flex-col gap-4 p-0">
            <div className="relative w-full ">
              <label
                htmlFor="name"
                className="text-gray-900 font-normal text-[18px]"
              >
                User Name
              </label>
              <FaRegUser className="absolute left-3 top-[66%] -translate-y-1/2 text-gray-400  " />

              <Input
                id="name"
                type="text"
                placeholder="Johndeo"
                size="lg"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              />
            </div>
            <div className="relative ">
              <label
                htmlFor="email"
                className="text-gray-900 font-normal text-[18px]"
              >
                Email Address
              </label>
              <MdOutlineMail className="absolute left-3 top-[68%] -translate-y-1/2 text-gray-400 " />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                size="lg"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              />
            </div>
            <div className="relative ">
              <label
                htmlFor="pass"
                className="text-gray-900 font-normal text-[18px]"
              >
                Password
              </label>
              <TbLockPassword className="absolute left-3 top-[67%] -translate-y-1/2 text-gray-400 " />
              <Input
                id="pass"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                size="lg"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              />
              <div
                className="absolute right-3 top-[67%] -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5 " />
                ) : (
                  <EyeSlashIcon className="w-5 h-5 " />
                )}
              </div>
            </div>

            <div className="relative ">
              <label
                htmlFor="confPassword"
                className="text-gray-900 font-normal text-[18px]"
              >
                Confirm Password
              </label>
              <TbLockPassword className="absolute left-3 top-[67%] -translate-y-1/2 text-gray-400 " />
              <Input
                id="confPassword"
                size="lg"
                type={showConfPassword ? "text" : "password"}
                placeholder="********"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              />
              <div
                className="absolute right-3 top-[67%] -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowConfPassword(!showConfPassword)}
              >
                {showConfPassword ? (
                  <EyeIcon className="w-5 h-5 " />
                ) : (
                  <EyeSlashIcon className="w-5 h-5 " />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-gray-300 rounded checked:bg-gray-800 checked:border-gray-800"
                />
                <span className="ml-2 text-gray-600 text-m">
                  I agree to the{" "}
                  <span className="text-[#ff6b35]">Terms of Service</span> and{" "}
                  <span className="text-[#ff6b35]">Privacy Policy</span>
                </span>
              </label>
            </div>

            <button
              type="button"
              className="flex items-center justify-center w-full gap-2 py-3 text-white transition-all rounded-md shadow-md bg-mainGradient hover:shadow-lg hover:scale-[1.02] focus:scale-[0.98] active:scale-[0.96]"
            >
              Create Account <FaArrowRight />
            </button>
          </CardBody>

          <div className="flex items-center justify-center mt-6 mb-4">
            <p className="text-grayText">Or sign up with</p>
          </div>
          <div className="flex gap-4">
            <Button className="flex items-center justify-center flex-1 gap-2 py-3 text-black bg-gray-200 hover:bg-gray-300">
              <FaGithub /> Github
            </Button>
            <Button className="flex items-center justify-center flex-1 gap-2 py-3 text-black bg-gray-200 hover:bg-gray-300">
              <FaGoogle /> Google
            </Button>
          </div>

          <div className="flex items-center justify-center mt-6 mb-4">
            <p className="text-gray-700 ">
              Already have an account ?{" "}
              <Link to="/signin" className="font-bold text-orangeColor">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SignUp;
