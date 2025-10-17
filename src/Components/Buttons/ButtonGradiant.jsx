import { Button } from "@material-tailwind/react";

const ButtonGradiant = ({ text, onClickFun, size }) => {
  return (
    <Button
      className="bg-lightGradiantToRight"
      size={size}
      onClick={onClickFun}
    >
      {text}
    </Button>
  );
};

export default ButtonGradiant;
