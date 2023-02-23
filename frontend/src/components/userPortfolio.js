import React from "react";
import Projects from "./subCompo/projects";

const userPortfolio = () => {
  return (
    <div className="max-w-full  flex flex-col items-center py-12 px-6">
      <div className="w-[96%] grid grid-cols-1 gap-2">
        <div className="text-[12px] mb-6 lg:hidden">PROJECTS</div>
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
};

export default userPortfolio;
