import React from "react";

const BugOfTheWeek = () => {
  const bugOfTheWeek = {
    title: "Display of store items is broken on Firefox",
    author: "User Name",
  };
  return (
    <div className="flex flex-col gap-3 p-3 border border-grayText rounded-xl bg-light-divBackground dark:bg-dark-divBackground">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Bug of the week
      </h3>
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        {bugOfTheWeek.title}
      </h3>
      <p className="text-grayText">
        Reported by{" "}
        <span className="text-orangeColor">{bugOfTheWeek.author}</span>
      </p>
    </div>
  );
};

export default BugOfTheWeek;
