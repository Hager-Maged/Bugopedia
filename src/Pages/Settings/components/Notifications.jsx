import React from "react";
import { Switch } from "@material-tailwind/react";
import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";

const Notifications = () => {
  return (
    <div className="bg-white dark:bg-dark-divBackground flex flex-col gap-5 p-5 w-full rounded-xl">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Notifications Preferences
      </h3>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-light-textColor dark:text-dark-textColor">
            Email Notifications
          </h3>
          <p className="text-grayText">Receive notifications via email</p>
        </div>
        <Switch color="orange" defaultChecked />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-light-textColor dark:text-dark-textColor">
            Push Notifications
          </h3>
          <p className="text-grayText">Receive push notifications in browser</p>
        </div>
        <Switch color="orange" defaultChecked />
      </div>
      <hr className="text-grayText opacity-50 h-2" />
      <h3 className="text-light-textColor dark:text-dark-textColor">
        Activity Notifiactions
      </h3>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-light-textColor dark:text-dark-textColor">
            Bug Updates
          </h3>
          <p className="text-grayText">When someone replies to your bugs</p>
        </div>
        <Switch color="orange" defaultChecked />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-light-textColor dark:text-dark-textColor">
            Community Activity
          </h3>
          <p className="text-grayText">Updates from discussions you follow</p>
        </div>
        <Switch color="orange" defaultChecked />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-light-textColor dark:text-dark-textColor">
            Weekly Digest
          </h3>
          <p className="text-grayText">Summary of top bugs and discussions</p>
        </div>
        <Switch color="orange" defaultChecked />
      </div>
      <div className="self-end">
        <ButtonGradiant text="Save Preferences" />
      </div>
    </div>
  );
};

export default Notifications;
