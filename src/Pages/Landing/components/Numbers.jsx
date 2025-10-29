import React from "react";

const Numbers = () => {
  return (
    <section className="py-16 bg-white border-y dark:bg-darkModeBg  dark:border-darkModeBg">
      <div className="container grid grid-cols-2 gap-6 px-6 mx-auto text-center md:grid-cols-4">
        {[
          {
            value: "50K+",
            label: "Active Developers",
            color: "text-secondaryColorOne",
            hoverBorder: "hover:border-secondaryColorOne",
          },
          {
            value: "125K+",
            label: "Bugs Solved",
            color: "bg-secondaryGradient bg-clip-text text-transparent",
            hoverBorder: "hover:border-secondaryColorTwo",
          },
          {
            value: "200K+",
            label: "Community Members",
            color: "text-secondaryColorTwo",
            hoverBorder: "hover:border-secondaryColorTwo",
          },
          {
            value: "500k+",
            label: "Daily Solutions",
            color:
              "bg-gradient-to-r from-secondaryColorTwo to-secondaryColorOne bg-clip-text text-transparent",
            hoverBorder: "hover:border-secondaryColorOne",
          },
        ].map((each, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border-2 border-text-gray ${each.hoverBorder}`}
          >
            <div className={`text-3xl md:text-4xl mb-2 ${each.color}`}>
              {each.value}
            </div>
            <p className="text-sm text-grayText">{each.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
