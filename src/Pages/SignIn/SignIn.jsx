import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaGoogle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Signin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])(?!.*\s).{8,}$/;

    if (!passwordRegex.test(user.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number and a special character (no spaces).";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleUser = () => {
    const isValid = validate();
    if (!isValid) {
      console.log("invalid user!");
    } else {
      localStorage.setItem("isLogged", "true");
      navigate("/home");
    }
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen p-4 bg-darkModeBg">
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center w-full max-w-md px-6 py-6 bg-white border rounded-lg shadow-lg border-secondaryColorTwo dark:bg-mainDarkModeColor sm:px-8 sm:py-8"
      >
        <img
          src="/images/Logo2.png"
          alt="Logo"
          className="w-auto h-24 mb-4 sm:h-28 lg:h-32"
        />
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-1 text-xl text-center sm:text-2xl dark:text-white"
        >
          Welcome Back!
        </Typography>
        <Typography className="mb-6 text-sm font-normal text-center text-grayText sm:text-base">
          Sign in to continue to Bugopedia.
        </Typography>

        <form className="flex flex-col w-full gap-3">
          <div className="relative mb-1">
            <Input
              type="email"
              label="Email Address"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              size="lg"
              className="w-full py-2 !bg-white placeholder:text-pargraph placeholder:text-md dark:text-white border border-gray-300"
              labelProps={{
                className: `!text-md !text-black ${
                  errors.email ? "!text-red-500" : ""
                }`,
              }}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="relative mb-3">
            <Input
              type={passwordShown ? "text" : "password"}
              label="Password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              size="lg"
              className="w-full py-2 !bg-white placeholder:text-pargraph placeholder:text-md dark:text-white border border-gray-300 pr-10"
              labelProps={{
                className: `!text-md !text-black ${
                  errors.password ? "!text-red-500" : ""
                }`,
              }}
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
            {errors.password && (
              <p className="mt-1 mb-4 text-sm text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center justify-between gap-2 mb-4 sm:flex-row">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 border rounded checked:bg-white checked:border-whiteText"
              />
              <span className="ml-2 text-sm text-black dark:text-white">
                Remember Me
              </span>
            </label>
            <Typography
              as="a"
              href="#"
              variant="small"
              className="text-sm font-medium text-black underline sm:text-base dark:text-white"
            >
              Forgot password?
            </Typography>
          </div>

          <button
            type="button"
            onClick={handleUser}
            className="flex items-center justify-center w-full gap-2 py-2.5 text-whiteText transition-all rounded-md shadow-md bg-mainGradient hover:shadow-lg hover:scale-[1.02] focus:scale-[0.98] active:scale-[0.96]"
          >
            Sign In <FaArrowRight />
          </button>

          <div className="flex items-center justify-center mt-5 mb-3">
            <p className="text-sm text-grayText sm:text-base">
              Or continue with
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="flex items-center justify-center flex-1 gap-2 py-2 text-black bg-gray-200 hover:bg-gray-300">
              <FaGithub /> Github
            </Button>
            <Button className="flex items-center justify-center flex-1 gap-2 py-2 text-black bg-gray-200 hover:bg-gray-300">
              <FaGoogle /> Google
            </Button>
          </div>

          <Typography
            variant="small"
            className="mt-5 text-sm font-normal text-center text-grayText sm:text-base"
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
