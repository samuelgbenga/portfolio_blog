import React, { useState, useEffect } from "react";
import UserProfile from "./components/userProfile";
import UserPortfolio from "./components/userPortfolio";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const App = () => {
  const [dark, setDark] = useState(true);
  const [themeMode, setThemeMode] = useState(localStorage.theme);

  const handleTheme = () => {
    setDark((prev) => !prev);

    if (dark) {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    if (localStorage) {
      switch (localStorage.theme) {
        case "dark":
          setDark(true);
          break;
        case "light":
          setDark(false);
          break;
        default:
          break;
      }
    }
  }, [themeMode]);

  return (
    <div
      className={`w-full lg:min-h-screen bg-white-theme text-black ${
        dark && "dark"
      } relative`}
    >
      <div className="w-full grid min-h-screen lg:grid-cols-2 lg:justify-between relative dark:text-white dark:bg-dark-theme">
        <div className="lg:sticky lg:top-0 lg:h-screen  ">
          <UserProfile />
        </div>
        <div className="">
          <UserPortfolio />
        </div>
      </div>
      <div
        className="fixed top-[92%] right-10  cursor text-[40px]"
        onClick={handleTheme}
      >
        {dark ? (
          <BsFillSunFill className="text-white" />
        ) : (
          <BsFillMoonStarsFill className="" />
        )}
      </div>
      {console.log(themeMode)}
    </div>
  );
};

export default App;
