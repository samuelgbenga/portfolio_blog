import React from "react";
import Projects from "./subCompo/projects";

const userPortfolio = ({ projects }) => {
  return (
    <div className="max-w-full  flex flex-col items-center py-12 px-6">
      <div className="w-[96%] grid grid-cols-1 gap-2">
        <div className="text-[12px] mb-6 lg:hidden">PROJECTS</div>

        {projects.map((project) => (
          <Projects key={project._id} />
        ))}
      </div>
      {console.log(projects)}
    </div>
  );
};

export default userPortfolio;
