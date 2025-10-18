import { Select, Option } from "@material-tailwind/react";
import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";

const Appearance = () => {
  return (
    <div className="bg-white dark:bg-dark-divBackground flex flex-col gap-10 p-5 w-full rounded-xl">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Appearance Settings
      </h3>
      <Select color="orange" label="Theme">
        <Option>Light</Option>
        <Option>Dark</Option>
      </Select>
      <Select color="orange" label="Language">
        <Option>English</Option>
        <Option>Arabic</Option>
      </Select>
      <div className="self-end">
        <ButtonGradiant text="Save Preferences" />
      </div>
    </div>
  );
};

export default Appearance;
