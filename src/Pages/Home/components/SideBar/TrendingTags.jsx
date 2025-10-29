import React from "react";

const TrendingTags = () => {
  const trendingTags = ["Python", "Frontend", "React"];

  return (
    <div className="flex flex-col gap-3 p-3 bg-white border border-borderLight rounded-xl dark:bg-dark-divBackground dark:border-borderDark">
      <h3 className="font-semibold text-light-textColor dark:text-dark-textColor">
        Trending tags
      </h3>
      <div className="flex flex-wrap gap-3">
        {trendingTags.map((tag, index) => {
          return (
            <div
              className="p-2 bg-light-backGround dark:bg-lightPink rounded-xl"
              key={index}
            >
              <h3 className="text-sm text-orangeColor dark:text-secondaryColorTwo">
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
