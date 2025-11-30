import React, { useEffect, useState } from "react";

const BugOfTheWeek = () => {
  const [bugOfTheWeek, setBugOfTheWeek] = useState(null);

  useEffect(() => {
    const fetchBug = async () => {
      try {
        const res = await fetch(
          "https://project-backend-pi-weld.vercel.app/api/v1/home/get-bug-of-the-week"
        );
        const data = await res.json();
        setBugOfTheWeek(data.data);
      } catch (err) {
        console.error("Error fetching bug of the week:", err);
      }
    };

    fetchBug();
  }, []);

  if (!bugOfTheWeek) {
    return (
      <div className="p-3 bg-white border border-borderLight rounded-xl dark:bg-dark-divBackground dark:border-borderDark">
        <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
          Bug of the week
        </h3>
        <p className="text-grayText">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-white border border-borderLight rounded-xl dark:bg-dark-divBackground dark:border-borderDark">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Get Trending Bug
      </h3>
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor ">
        {bugOfTheWeek.title}
      </h3>
      <p className="text-grayText">
        Reported by{" "}
        <span className="text-orangeColor dark:text-secondaryColorTwo">
          {bugOfTheWeek.author}
        </span>
      </p>
    </div>
  );
};

export default BugOfTheWeek;
