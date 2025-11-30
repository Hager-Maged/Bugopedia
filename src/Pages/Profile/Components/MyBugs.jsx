import React, { useState } from "react";
import OpenBug from "./OpenBug";
import { FaBugSlash } from "react-icons/fa6";
import useData from "../../../hooks/useFetch";
import { useAuth } from "../../../Context/Data";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const MyBugs = () => {
  const { user } = useAuth();
  const userId = user?.id;

  const {
    data: bugs,
    loading,
    error,
    refetch,
  } = useData(
    `https://project-backend-pi-weld.vercel.app/api/v1/profile/mybugs/${userId}`
  );

  const [openBug, setOpenBug] = useState(false);
  const [selectedBug, setSelectedBug] = useState(null);

  const [openConfirm, setOpenConfirm] = useState(false);
  const [bugToDelete, setBugToDelete] = useState(null);

  const handleOpenBug = (bug) => {
    setSelectedBug(bug);
    setOpenBug(!openBug);
  };

  const handleOpenConfirm = (bugId) => {
    setBugToDelete(bugId);
    setOpenConfirm(true);
  };

  const confirmDelete = async () => {
    if (!bugToDelete) return;

    try {
      await fetch(
        `https://project-backend-pi-weld.vercel.app/api/v1/profile/bug/${bugToDelete}`,
        { method: "DELETE" }
      );

      setOpenConfirm(false);
      setBugToDelete(null);
      refetch(); 
    } catch (err) {
      console.error(err);
    }
  };

  if (!userId) return <p>Loading user...</p>;
  if (loading) return <p>Loading bugs...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!bugs || bugs.length === 0) return <p>No bugs found</p>;

  return (
    <div className="flex flex-col max-w-5xl gap-3 p-3 mx-auto sm:p-6 !bg-white dark:!bg-darkModeBg">
      {bugs.map((item) => (
        <div
          key={item._id}
          onClick={() => handleOpenBug(item)}
          className="flex flex-col gap-3 p-4 transition-all duration-200 border cursor-pointer shadow-lg sm:flex-row sm:items-center sm:justify-between rounded-2xl hover:shadow-lg border-secondaryColorTwo dark:!bg-mainDarkModeColor dark:!border-darkModeBg hover:scale-105"
        >
          <div className="flex flex-col gap-1 sm:max-w-5xl">
            <p className="text-sm font-semibold !text-blackText dark:!text-white sm:text-base md:text-lg">
              {item.title}
            </p>

            <span
              className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-full w-max ${
                item.state === "solved"
                  ? "!bg-green-100 !text-green-800 dark:!bg-green-800 dark:!text-green-100"
                  : "!bg-yellow-100 text-yellow-800 dark:!bg-yellow-800 dark:!text-yellow-100"
              }`}
            >
              {item.state}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-blue-gray-800 sm:text-sm sm:justify-end dark:!text-lightPink">
            <p className="whitespace-nowrap">{item.votes} votes</p>
            <p className="whitespace-nowrap">{item.replies} comments</p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenConfirm(item._id);
              }}
              className="flex items-center gap-1 px-2 py-1 text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {selectedBug && (
        <OpenBug
          open={openBug}
          handleOpen={handleOpenBug}
          title={selectedBug.title}
          likesCount={selectedBug.votes}
          commentsCount={selectedBug.replies}
          solved={selectedBug.state === "solved"}
          comments={selectedBug.replyDetails || []}
        />
      )}

      <Dialog
        open={openConfirm}
        handler={() => setOpenConfirm(false)}
        className="dark:!bg-mainDarkModeColor dark:!text-white !bg-white !text-black"
      >
        <DialogHeader className="dark:!text-white !text-black">
          Confirm Delete
        </DialogHeader>

        <DialogBody className="dark:!text-lightPink !text-black">
          Are you sure you want to delete this bug? 
        </DialogBody>

        <DialogFooter className="flex gap-2">
          <Button
            variant="text"
            color="gray"
            onClick={() => setOpenConfirm(false)}
            className="dark:!text-lightPink"
          >
            Cancel
          </Button>

          <Button
            variant="gradient"
            color="red"
            onClick={confirmDelete}
            className="!bg-red-600 hover:!bg-red-700"
          >
            Yes, Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default MyBugs;
