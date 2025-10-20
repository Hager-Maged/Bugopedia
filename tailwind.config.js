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
        light: {
          backGround: "#fdf0e7",
          textColor: "#1a1625",
          divBackground: "white",
        },
        dark: {
          backGround: "#1a1625",
          textColor: "#fdf0e7",
          divBackground: "#252037",
        },
        mainDarkModeColor: "#252037",
        darkModeBg: "#1a1625",
        secondaryColorOne: "#e7704f",
        secondaryColorTwo: "#ef3c6a",
        whiteText: "#fdf0e7",
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
        pargraph: "#9ca3af",
        card: "#251f37",
        tabs: "#2d2640",
        borderLight: "#e6e6e6",
        brown:"#a1581c",
        borderDark: "#3d3554"
      },
      backgroundImage: {
        mainGradient: "linear-gradient(to right, #ff6a34 , #ff3266 )",
        secondaryGradient: "linear-gradient(45deg , #cb542a , #7d48a5)",
        gradientThree: "linear-gradient(180deg , #cd3e44 , #a43f81)",
        lightGradiantToRight: "linear-gradient(to right , #fd693b , #ff3666)",
        gradientThree: "linear-gradient(180deg , #cd3e44 , #a43f81)",
        lightGradiantToRight: "linear-gradient(to right , #fd693b , #ff3666)",
        purpleCard: "linear-gradient(135deg, #9D50BB, #6E48AA)",
      },
      screens: {
        xsm: "350px",
        // Extra Small Devices
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
});
