import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/Nav";
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
import Notfound from "./Pages/Notfound/Notfound";
import Tech from "./Pages/Tech/Tech";
import Signin from "./Pages/SignIn/SignIn";
import FAQ from "./Pages/FAQ/FAQ";
import SignUp from "./Pages/SignUp/SignUp";
import Post from "./Pages/Community/Components/Tabs_info/discussions/Post";
import Settings from "./Pages/Settings/Settings";
import Support from "./Pages/Support/Support";

function App() {
  const [hideNav, setHideNav] = useState(false);

  return (
    <div className="!bg-white dark:!bg-darkModeBg min-h-screen flex flex-col">
      {!(
        window.location.pathname == "/signin" ||
        window.location.pathname == "/signup" ||
        window.location.pathname == "/" ||
        hideNav
      ) && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/bugsubmit" element={<BugSubmit />} />
        <Route path="/bugs/:categoryName" element={<Bugs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/*" element={<Notfound setHideNav={setHideNav} />} />
      </Routes>
      {!(
        window.location.pathname == "/signin" ||
        window.location.pathname == "/signup" ||
        window.location.pathname == "/" ||
        hideNav
      ) && <Footer />}
    </div>
  );
}

export default App;
