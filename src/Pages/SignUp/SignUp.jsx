import { CardBody, Typography, Button } from "@material-tailwind/react";
import { FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MainInput from "../../Components/Input/MainInput";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../Context/Data";

export function SignUp() {
  const { register } = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "User name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number and a special character (no spaces).";

    if (!formData.confPassword)
      newErrors.confPassword = "Please confirm your password";
    else if (formData.password !== formData.confPassword)
      newErrors.confPassword = "Passwords do not match";

    if (!formData.agree)
      newErrors.agree = "You must agree to the terms and privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    const { success, message } = register(
      formData.name,
      formData.email,
      formData.password
    );

    if (success) {
      navigate("/signin");
    } else {
      alert(message); 
    }
  }
};

  return (
    <section className="flex items-center justify-center w-full p-6 h-4/6 sm:p-8 lg:p-7 bg-darkModeBg">
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center w-full max-w-md px-6 py-6 bg-white border rounded-lg shadow-lg border-secondaryColorTwo dark:bg-mainDarkModeColor sm:px-8 sm:py-8"
      >
        <img src="/images/Logo2.png" alt="Logo" className="w-auto h-40 mb-6" />

        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2 dark:text-white"
        >
          Create Account
        </Typography>
        <Typography className="text-gray-600 font-normal text-[18px] mb-6">
          Join the Bugopedia community today
        </Typography>

        <form className="w-full" onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4 p-0">
            {/* User name */}
            <MainInput
              type="text"
              label="User Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}

            {/* Email */}
            <MainInput
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}

            {/* Password */}
            <div className="relative">
              <MainInput
                type={showPassword ? "text" : "password"}
                label="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <div
                className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}

            {/* Confirm Password */}
            <div className="relative">
              <MainInput
                type={showConfPassword ? "text" : "password"}
                label="Confirm Password"
                value={formData.confPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confPassword: e.target.value })
                }
              />
              <div
                className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer text-gray-500"
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
              <p className="text-sm text-red-500">{errors.confPassword}</p>
            )}

            {/* Terms */}
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
              <p className="mb-2 text-sm text-red-500">{errors.agree}</p>
            )}

            {/* Submit */}
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
          <div className="flex flex-wrap gap-4">
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
