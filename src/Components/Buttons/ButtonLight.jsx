import { Button } from "@material-tailwind/react";
const ButtonLight = ({ text, onClickFun, size }) => {
  return (
    <Button
      className="bg-white outline-orangeColor text-orangeColor"
      size={size}
      onClick={onClickFun}
    >
      {text}
    </Button>
  );
};

export default ButtonLight;
