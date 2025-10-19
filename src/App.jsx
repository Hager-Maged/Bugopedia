import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
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

function App() {
  return (
    <div>
      <Footer />

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
        <Route path="/Tech" element={<Tech />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Header />
    </div>
  );
}

export default App;
