const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDarkModeColor: "#252037",
        darkModeBg: "#1a1625",
        secondaryColorOne: "#e7704f",
        secondaryColorTwo: "#ef3c6a",
        whiteText: "#f0f0f0",
        grayText: "#9ca3af",
        blackText: "#1a1625",
        orange: "#ff6b35",
        mutedBlue: "#162556",
        lightBlue: "#2b7fff",
        mutedYellow: "#432004",
        lightYellow: "#f0b100",
        lightPurple: "#ad46ff",
      },
      backgroundImage: {
        mainGradient: "linear-gradient(to right, #ef3c6a , #ef3c6a)",
        secondaryGradient: "linear-gradient(45deg , #cb542a , #7d48a5)",
      },
      clipPath: {
        wave: "ellipse(50% 100% at 50% 0%)",
      },
    },
  },
  plugins: [],
});
