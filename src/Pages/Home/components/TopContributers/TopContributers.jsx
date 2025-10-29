import LeaderBoardSlider from "./LeaderBoardSlider";
import ButtonGradiant from "../../../../Components/Buttons/ButtonGradiant";
import { useNavigate } from "react-router-dom";

const TopContributers = ({ leaderBoard }) => {
  const navigate = useNavigate();

  const goLeaderboard = () => {
    navigate("/leaderboard");
  };
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
              name={person.name}
              key={person.id}
              points={person.points}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopContributers;
