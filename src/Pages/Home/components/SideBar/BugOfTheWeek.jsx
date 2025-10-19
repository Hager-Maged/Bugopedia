import React from "react";

const BugOfTheWeek = () => {
  const bugOfTheWeek = {
    title: "Display of store items is broken on Firefox",
    author: "User Name",
  };
  return (
    <div className="border border-grayText rounded-xl flex flex-col p-3 gap-3 bg-light-divBackground dark:bg-dark-divBackground">
      <h3 className="text-light-textColor dark:text-dark-textColor font-semibold">
        Bug of the week
      </h3>
      <h3 className="text-light-textColor dark:text-dark-textColor font-semibold">
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
