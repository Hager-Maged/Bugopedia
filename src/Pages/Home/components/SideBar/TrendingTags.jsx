import React, { useEffect, useState } from "react";

const TrendingTags = () => {
  const [trendingTags, setTrendingTags] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          "https://project-backend-pi-weld.vercel.app/api/v1/home/get-trending-categories"
        );
        const data = await res.json();
        setTrendingTags(data.data);
      } catch (err) {
        console.error("Error fetching trending tags:", err);
      }
    };

    fetchTrending();
  }, []);

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
                #{tag.category}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingTags;
