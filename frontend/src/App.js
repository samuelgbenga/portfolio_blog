import React, { useState } from "react";
import UserProfile from "./components/userProfile";
import UserPortfolio from "./components/userPortfolio";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const App = () => {
  const [dark, setDark] = useState(true);
  return (
    <div
      className={`w-full lg:min-h-screen bg-white-theme text-black ${
        dark && "dark"
      } relative`}
    >
      <div className="w-full flex flex-col min-h-screen lg:flex-row lg:justify-between relative dark:text-white dark:bg-dark-theme">
        <div className="lg:sticky lg:top-0 lg:h-screen  p-20  grow ">
          <UserProfile />
        </div>
        <div className="grow ">
          <UserPortfolio />
        </div>
      </div>
      <div
        className="fixed top-[92%] right-10  cursor text-[40px]"
        onClick={() => setDark((prev) => !prev)}
      >
        {dark ? (
          <BsFillSunFill className="text-white" />
        ) : (
          <BsFillMoonStarsFill className="" />
        )}
      </div>
    </div>
  );
};

export default App;
