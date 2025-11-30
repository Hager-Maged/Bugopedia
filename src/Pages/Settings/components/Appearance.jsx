import { Select, Option, useTheme } from "@material-tailwind/react";
import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";
import { useState } from "react";

const Appearance = () => {
  const { theme, toggleTheme } = useTheme();
  const [chosenTheme, setChosenTheme] = useState(theme);

  return (
    <div className="bg-white dark:bg-dark-divBackground flex flex-col gap-10 p-5 w-full rounded-xl">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Appearance Settings
      </h3>
      <Select color="orange" label="Theme">
        <Option value="light">Light</Option>
        <Option value="dark">Dark</Option>
      </Select>
      <div className="self-end">
        <ButtonGradiant text="Save Preferences" />
      </div>
    </div>
  );
};

export default Appearance;
