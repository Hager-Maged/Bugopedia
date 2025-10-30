import { Input } from "@material-tailwind/react";

const MainInput = ({ label, className, type, value, onChange }) => {
  return (
    <div>
      <Input
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        labelProps={{
          className: "!text-md dark:!text-white",
        }}
      />
    </div>
  );
};

export default MainInput;
