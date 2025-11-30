import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useAuth } from "../../../Context/Data";
import { useNavigate } from "react-router-dom";

const LoggedContent = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleSignOut = () => {
    logout();
    navigate("/home");
  };

  return (
    <>
      {/* NOTIFICATIONS */}
      <li>
        <Menu placement="bottom-end">
          <MenuHandler>
            <IoIosNotificationsOutline className="w-6 h-6 transition-transform duration-200 cursor-pointer text-blackText dark:text-whiteText hover:scale-110" />
          </MenuHandler>

          <MenuList className="w-64 p-2 text-gray-800 bg-white rounded-lg shadow-lg dark:text-gray-200 dark:bg-darkModeBg">
            <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-whiteText">
              <Typography variant="small" className="font-semibold">
                Tania sent you a message
              </Typography>
              <Typography className="text-xs text-gray-500 dark:text-gray-400">
                13 minutes ago
              </Typography>
            </MenuItem>

            <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-whiteText">
              <Typography variant="small" className="font-semibold">
                Natali replied to your email
              </Typography>
              <Typography className="text-xs text-gray-500 dark:text-gray-400">
                1 hour ago
              </Typography>
            </MenuItem>

            <MenuItem className="flex flex-col items-start gap-1 p-2 rounded-md hover:bg-mainGradient hover:!text-whiteText">
              <Typography variant="small" className="font-semibold">
                You received a payment
              </Typography>
              <Typography className="text-xs text-gray-500 dark:text-gray-400">
                5 hours ago
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </li>
      {/* NOTIFICATIONS */}

      {/* PROFIEL */}

      <li>
        <Menu placement="bottom-end">
          <MenuHandler>
            <div className=" w-[2.5em] h-[2.5em] flex-shrink-0">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="User Avatar"
                className="w-full h-full border-[0.15em] border-secondaryColorTwo dark:border-secondaryColorOne rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            </div>
          </MenuHandler>

          <MenuList className="p-2 !text-mainDarkModeColor !bg-white rounded-lg shadow-lg dark:!text-white dark:!bg-darkModeBg">
            <MenuItem className="p-0 !bg-transparent">
              <NavLink
                to="/profile"
                className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
              >
                <Typography
                  variant="small"
                  className="font-medium hover:bg-mainGradient hover:text-whiteText"
                >
                  My Profile
                </Typography>
              </NavLink>
            </MenuItem>

            <MenuItem className="p-0">
              <NavLink
                to="/settings"
                className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
              >
                <Typography variant="small" className="font-medium">
                  Settings
                </Typography>
              </NavLink>
            </MenuItem>

            <MenuItem className="p-0">
              <NavLink
                to="/support"
                className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
              >
                <Typography variant="small" className="font-medium">
                  Support
                </Typography>
              </NavLink>
            </MenuItem>

            <MenuItem className="p-0">
              <NavLink
                to="/faq"
                className="flex items-center w-full gap-2 p-2 transition-all duration-200 rounded-md hover:bg-mainGradient hover:text-whiteText"
              >
                <Typography variant="small" className="font-medium">
                  FAQ
                </Typography>
              </NavLink>
            </MenuItem>

            <hr className="my-2 border-gray-300 dark:border-gray-700" />

            <MenuItem className="p-0" onClick={handleSignOut}>
              <div className="flex items-center w-full gap-2 p-2 rounded-md hover:bg-red-100 transition-all duration-200">
                <Typography
                  variant="small"
                  className="font-medium text-red-600 dark:text-red-400"
                >
                  Sign Out
                </Typography>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </li>
    
    </>
  );
};

export default LoggedContent;
