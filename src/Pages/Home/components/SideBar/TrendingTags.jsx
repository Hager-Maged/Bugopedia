import React from "react";

const TrendingTags = () => {
  const trendingTags = ["Python", "Frontend", "React"];

  return (
    <div className="flex flex-col gap-3 p-3 border border-grayText rounded-xl bg-light-divBackground dark:bg-dark-divBackground">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Trending tags
      </h3>
      <div className="flex flex-wrap gap-3">
        {trendingTags.map((tag, index) => {
          return (
            <div
              className="p-2 bg-light-backGround dark:bg-dark-backGround rounded-xl"
              key={index}
            >
              <h3 className="text-sm text-light-textColor dark:text-dark-textColor">
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
