import React from "react";

const TrendingTags = () => {
  const trendingTags = ["Python", "Frontend", "React"];

  return (
    <div className="border border-grayText rounded-xl flex flex-col p-3 gap-3 bg-light-divBackground dark:bg-dark-divBackground">
      <h3 className="text-light-textColor dark:text-dark-textColor font-semibold">
        Trending tags
      </h3>
      <div className="flex flex-wrap gap-3">
        {trendingTags.map((tag , index) => {
          return (
            <div className="bg-light-backGround dark:bg-dark-backGround p-2 rounded-xl" key={index}>
              <h3 className="text-light-textColor dark:text-dark-textColor text-sm">
                #{tag}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingTags;
