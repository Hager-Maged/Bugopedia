import { useEffect, useState } from "react";
import LeaderBoardSlider from "./LeaderBoardSlider";
import ButtonGradiant from "../../../../Components/Buttons/ButtonGradiant";
import { useNavigate } from "react-router-dom";

const TopContributers = ({}) => {
  const navigate = useNavigate();
  const [leaderBoard, setLeaderBoard] = useState([]);

  const goLeaderboard = () => {
    navigate("/leaderboard");
  };

  useEffect(() => {
    const fetchTopContributors = async () => {
      try {
        const res = await fetch(
          "https://project-backend-pi-weld.vercel.app/api/v1/home/get-top-contributors"
        );
        const data = await res.json();
        setLeaderBoard(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTopContributors();
  }, []);

  return (
    <div className="w-full p-3 mt-5 bg-white  dark:bg-dark-divBackground rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-light-textColor dark:text-dark-textColor">
          Top contributors this week
        </h3>
        <ButtonGradiant text="Leaderboard" onClickFun={goLeaderboard} />
      </div>
      <div className="flex items-center justify-center w-full gap-5 overflow-auto">
        {leaderBoard.map((person) => {
          return (
            <LeaderBoardSlider
              key={person._id}
              name={person.username}
              points={person.points}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopContributers;
