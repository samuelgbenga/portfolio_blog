import React from "react";

const SingleProject = ({ project }) => {
  return (
    <div className="text-sm">
      <div className="w-full flex justify-around ">
        <div>{project._id}</div>
        <div>{project.proj_name}</div>
        <div>{project.proj_tools}</div>
        <div>{project.proj_link}</div>
        <div>{project.proj_ratings}</div>
      </div>
    </div>
  );
};

const Project = ({ projects }) => {
  return (
    <div>
      <div className="w-full  flex justify-around font-bold ">
        {" "}
        <div>Id</div>
        <div>Project Name</div>
        <div>Tools</div>
        <div>Project Url</div>
        <div>Ratings</div>
      </div>
      <div className="flex flex-col ">
        {projects.map((project, i) => {
          if (project.category === "project") {
            return <SingleProject key={i} project={project} />;
          }
          return <div key={i}></div>;
        })}
      </div>
    </div>
  );
};

export default Project;
