import { CardBody, Typography, Input, Button } from "@material-tailwind/react";
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
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    agree: false,
  });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    let newErrors = {};

    !formData.name.trim() ? (newErrors.name = "User name is required") : null;

    !formData.email.trim()
      ? (newErrors.email = "Email is required")
      : !isValidEmail(formData.email)
      ? (newErrors.email = "Please enter a valid email")
      : null;

    !formData.password
      ? (newErrors.password = "Password is required")
      : formData.password.length < 8
      ? (newErrors.password = "Password must be at least 8 characters")
      : null;

    !formData.confPassword
      ? (newErrors.confPassword = "Please confirm your password")
      : formData.password !== formData.confPassword
      ? (newErrors.confPassword = "Passwords do not match")
      : null;

    !formData.agree
      ? (newErrors.agree = "You must agree to the terms and privacy policy")
      : null;

    setErrors(newErrors);
    return Object.keys(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <section className="flex items-center justify-center w-full bg-gray-200 h-4/6 hp-6 sm:p-8 lg:p-7 dark:bg-darkModeBg">
      <div className="flex flex-col items-center w-full max-w-sm px-6 py-1 bg-white border rounded-lg shadow-lg border-secondaryColorTwo border- sm:max-w-lg lg:px-10 lg:py-4 sm:p-8 dark:bg-mainDarkModeColor">
        <img src="/images/Logo2.png" alt="Logo" className="w-auto h-40 mb-6" />

        <Typography variant="h3" color="blue-gray" className="mb-2 dark:text-white">
          Create Account
        </Typography>
        <Typography className="text-gray-600 font-normal text-[18px] mb-6">
          Join the Bugopedia community today
        </Typography>

        <form className="w-full" onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4 p-0">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="text-gray-900 font-normal text-[18px] dark:text-white"
              >
                User Name
              </label>
              <FaRegUser className="absolute left-3 top-[66%] -translate-y-1/2 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Johndoe"
                size="lg"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <div className="relative">
              <label
                htmlFor="email"
                className="text-gray-900 font-normal text-[18px] dark:text-white"
              >
                Email Address
              </label>
              <MdOutlineMail className="absolute left-3 top-[68%] -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                size="lg"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <div className="relative">
              <label
                htmlFor="pass"
                className="text-gray-900 font-normal text-[18px] dark:text-white"
              >
                Password
              </label>
              <TbLockPassword className="absolute left-3 top-[67%] -translate-y-1/2 text-gray-400" />
              <Input
                id="pass"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                size="lg"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <div
                className="absolute right-3 top-[67%] -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </div>
            </div>{" "}
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <div className="relative">
              <label
                htmlFor="confPassword"
                className="text-gray-900 font-normal text-[18px] dark:text-white"
              >
                Confirm Password
              </label>
              <TbLockPassword className="absolute left-3 top-[67%] -translate-y-1/2 text-gray-400" />
              <Input
                id="confPassword"
                size="lg"
                type={showConfPassword ? "text" : "password"}
                placeholder="********"
                className="w-full pl-12 placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.confPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confPassword: e.target.value })
                }
              />
              <div
                className="absolute right-3 top-[67%] -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowConfPassword(!showConfPassword)}
              >
                {showConfPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </div>
            </div>
            {errors.confPassword && (
              <p className="text-red-500 text-sm">{errors.confPassword}</p>
            )}
            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) =>
                    setFormData({ ...formData, agree: e.target.checked })
                  }
                  className="w-5 h-5 border border-gray-300 rounded checked:bg-gray-800 checked:border-gray-800"
                />
                <span className="ml-2 text-gray-600 text-m">
                  I agree to the{" "}
                  <span className="text-[#ff6b35]">Terms of Service</span> and{" "}
                  <span className="text-[#ff6b35]">Privacy Policy</span>
                </span>
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-sm mb-2">{errors.agree}</p>
            )}
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 py-3 text-white transition-all rounded-md shadow-md bg-mainGradient hover:shadow-lg hover:scale-[1.02] focus:scale-[0.98] active:scale-[0.96]"
            >
              Create Account <FaArrowRight />
            </button>
          </CardBody>

          <div className="flex items-center justify-center mt-6 mb-4">
            <p className="text-grayText">Or sign up with</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button className="flex items-center justify-center flex-1 gap-2 py-3 text-black bg-gray-200 hover:bg-gray-300">
              <FaGithub /> Github
            </Button>
            <Button className="flex items-center justify-center flex-1 gap-2 py-3 text-black bg-gray-200 hover:bg-gray-300">
              <FaGoogle /> Google
            </Button>
          </div>

          <div className="flex items-center justify-center mt-6 mb-4">
            <p className="text-gray-700 ">
              Already have an account?{" "}
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
