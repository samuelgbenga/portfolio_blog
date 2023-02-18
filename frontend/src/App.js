import React from "react";
import UserProfile from "./components/userProfile";
import UserPortfolio from "./components/userPortfolio";

const App = () => {
  return (
    <div className="w-full lg:min-h-screen bg-dark-theme text-white">
      <div className="w-full flex flex-col min-h-screen lg:flex-row lg:justify-between relative">
        <div className="lg:sticky lg:top-0 lg:h-screen  p-20  grow">
          <UserProfile />
        </div>
        <div className="grow ">
          <UserPortfolio />
        </div>
      </div>
    </div>
  );
};

export default App;
