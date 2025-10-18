import { Input } from "@material-tailwind/react";
import { useState } from "react";
import ButtonGradiant from "../../../Components/Buttons/ButtonGradiant";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Navigate, useNavigate } from "react-router-dom";
import AccountPop from "./AccountPop";

const Account = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [deleteAccFlag, setDeleteAccFlag] = useState(false);
  // Password Check
  const [lessThan , setLessThan] = useState(false);
  const [lettersAndNumber , setLettersAndNumber ] = useState(false)
  const [savedSuccess , setSavedSuccess ] = useState(false);

  const handleSave = () => {
    if(newPass.trim().length < 6 || newPass.trim() === "")
    {
      setLessThan(true);
    }
    else if(!(/[A-Za-z]/.test(newPass) && /\d/.test(newPass)))
    {
      setLettersAndNumber(true)
    }
    if (!lessThan && !lettersAndNumber)
    {
      setSavedSuccess(true);
      const navigate = useNavigate();
      navigate("/settings");
    }
  };
  const deleteAcc = () => {
    setDeleteAccFlag(!deleteAccFlag);
  };
  const handleDelete = () => {
    const navigate = useNavigate();
    navigate("/");
  };

  return (
    <div className="bg-white dark:bg-dark-divBackground flex flex-col gap-5 p-5 w-full rounded-xl">
      {deleteAcc && (
        <AccountPop
          open={deleteAccFlag}
          handleOpen={deleteAcc}
          handleConfirmDelete={handleDelete}
        />
      )}
      <h3 className="text-light-textColor font-semibold dark:text-dark-textColor">
        Account Settings
      </h3>
      <Input
        label="Email Address"
        placeholder="email@example.com"
        type="e-mail"
        className="text-light-textColor dark:text-dark-textColor"
      />
      <hr className="bg-grayText w-full h-1 opacity-50" />
      <h3 className="text-light-textColor font-semibold dark:text-dark-textColor">
        Change Password
      </h3>
      <Input
        label="Current Password"
        placeholder="email@example.com"
        type="password"
        className="text-light-textColor dark:text-dark-textColor"
      />
      <Input
        label="New Password"
        placeholder="email@example.com"
        type="password"
        className="text-light-textColor dark:text-dark-textColor"
      />
      <Input
        label="Confirm New Password"
        placeholder="email@example.com"
        type="password"
        className="text-light-textColor dark:text-dark-textColor"
      />
      <hr className="bg-grayText w-full h-1 opacity-50" />
      <p className="text-red-900 font-semibold">Danger Zone</p>
      <div className="flex flex-wrap gap-3 bg-mutedYellow justify-between w-full p-5 rounded-xl">
        <div>
          <h3 className="text-dark-textColor">Delete Account</h3>
          <p className="text-grayText">
            Permanently delete your account and all data
          </p>
        </div>
        <ButtonGradiant
          text="Delete Account"
          size="sm"
          onClickFun={deleteAcc}
        />
      </div>
      <div className="self-end pe-5">
        <ButtonGradiant text="Save Changes" onClickFun={handleSave}/>
      </div>
    </div>
  );
};

export default Account;
