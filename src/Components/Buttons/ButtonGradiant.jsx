import { Button } from "@material-tailwind/react";

const ButtonGradiant = ({ text, onClickFun, size ,classs }) => {
  return (
    <Button
      className={`${classs} bg-lightGradiantToRight`}
      size={size}
      onClick={onClickFun}
    >
      {text}
    </Button>
  );
};

export default ButtonGradiant;
