import { Input } from "@material-tailwind/react";

const MainInput=({label, className, type}) => {
  return (
    <div>
      <Input
        label={label}
        type={type}
        className={className}
        labelProps={{
          className: "!text-md dark:!text-white",
        }}
      />
    </div>
  );
}
export default MainInput;