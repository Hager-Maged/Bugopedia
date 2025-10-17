import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import AboutUs from "./Pages/About-us/AboutUs";
import Admin from "./Pages/Admin/Admin";
import BugSubmit from "./Pages/Bug-submit/BugSubmit";
import Bugs from "./Pages/Bugs/Bugs";
import Community from "./Pages/Community/Community";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Rewards from "./Pages/Rewards/Rewards";
import Profile from "./Pages/Profile/Profile";
import NavBar from "./Components/NavBar/Nav";
import Signin from "./Pages/Signin/Signin";
import FAQ from "./Pages/FAQ/FAQ";
import Signin from "./Pages/Signin/Signin";

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <div className="dark:bg-mainDarkModeColor">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/bugsubmit" element={<BugSubmit />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
