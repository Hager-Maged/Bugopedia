import { Avatar } from "@material-tailwind/react";

const LeaderBoardSlider = ({ name, points }) => {
  return (
    <div className="flex flex-col items-center gap-1 pt-5 text-center w-96">
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
      />
      <h1 className="text-light-textColor dark:text-dark-textColor">{name}</h1>
      <p className="text-orangeColor ">{points ?? 0}</p>
    </div>
  );
};

export default LeaderBoardSlider;
