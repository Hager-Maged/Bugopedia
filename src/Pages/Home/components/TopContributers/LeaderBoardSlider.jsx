import { Avatar } from "@material-tailwind/react";

const LeaderBoardSlider = ({ name, points }) => {
  return (
    <div className="flex flex-col items-center pt-5 gap-1 w-96 text-center">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
      <h1 className="text-light-textColor dark:text-dark-textColor">{name}</h1>
      <p className="text-grayText">{points}</p>
    </div>
  );
};

export default LeaderBoardSlider;
