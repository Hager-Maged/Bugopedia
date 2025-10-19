import React from "react";
import { Avatar } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";


const Profile = () => {
  
  return (
    <div className="bg-white dark:bg-dark-divBackground flex flex-col gap-5 p-5 w-full rounded-xl">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Profile Information
      </h3>
      <div className="flex gap-4 items-center">
        <div>
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xl"
          />
        </div>
        <div>
          <div>
            <button className="btn bg-dark-textColor dark:bg-dark-divBackground text-light-textColor dark:text-dark-textColor p-3 rounded-xl shadow-none border-grayText border">
              Change Avatar
            </button>
            <p className="text-grayText">JPG , GIF or PNG , Max size of 2MB</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
        <div className="w-full">
          <Input label="Username" className="text-light-textColor dark:text-dark-textColor"/>
        </div>
        <div className="w-full">
          <Input label="Display Name" className="text-light-textColor dark:text-dark-textColor"/>
        </div>
      </div>
      <div className="w-full">
        <Input label="Bio" placeholder="Tell us about yourself" className="text-light-textColor dark:text-dark-textColor"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
        <div className="w-full">
          <Input label="Location" className="text-light-textColor dark:text-dark-textColor"/>
        </div>
        <div className="w-full">
          <Input label="Website" className="text-light-textColor dark:text-dark-textColor"/>
        </div>
      </div>
      <div className="w-full">
        <Input label="Skills ( Comma Seperated )" placeholder="Java , React , Node , .." className="text-light-textColor dark:text-dark-textColor" />
      </div>
      <div>
        <ButtonGradiant text="Save Changes"/>
      </div>
    </div>
  );
};

export default Profile;
