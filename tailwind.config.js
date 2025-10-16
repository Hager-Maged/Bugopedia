const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./vite-project/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./vite-project/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDarkModeColor: "#252037",
        darkModeBg: "#1a1625",
        secondaryColorOne: "#e7704f",
        secondaryColorTwo: "#ef3c6a",
        whiteText: "#1a1625",
        grayText: "#9ca3af",
        blackText: "#1a1625",
        orangeColor: "#ff6b35",
        mutedBlue: "#162556",
        lightBlue: "#2b7fff",
        mutedYellow: "#432004",
        lightYellow: "#f0b100",
        lightPurple: "#ad46ff",
        mutedPurple: "#3c0366",
        lightPink: "#ffdcdd",
      },
      backgroundImage: {
        mainGradient: "linear-gradient(to right, #ff6a34 , #ff3266 )",
        secondaryGradient: "linear-gradient(45deg , #cb542a , #7d48a5)",
        gradientThree : "linear-gradient(180deg , #cd3e44 , #a43f81)",
        lightGradiantToRight : "linear-gradient(to right , #fd693b , #ff3666)"
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
});
