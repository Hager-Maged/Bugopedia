import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };










  
};
export default useTheme;
