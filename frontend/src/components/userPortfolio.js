import React from "react";
import Projects from "./subCompo/projects";
import BlogPost from "./subCompo/blogPost";

const userPortfolio = ({ projects }) => {
  return (
    <div className="max-w-full  flex flex-col gap-16 items-center py-12 px-6">
      <div className="w-[96%] grid grid-cols-1 gap-2">
        <div className="text-[12px] mb-6 lg:hidden">PROJECTS</div>

        {projects &&
          projects.map((project) => {
            if (project.category === "project")
              return (
                <Projects
                  key={project._id}
                  language={project.language}
                  path={project.path}
                  tools={project.tools}
                  link={project.link}
                  ratings={project.ratings}
                />
              );
            return <></>;
          })}
      </div>

      <div className="w-[96%] grid grid-cols-1 gap-2">
        <div className="text-[12px] mb-6 lg:hidden">BLOG_POST</div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2  ">
          {projects &&
            projects.map((project) => {
              if (project.category === "blogpost")
                return (
                  <BlogPost
                    key={project._id}
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    content={project.content}
                  />
                );
              return <></>;
            })}
        </div>
      </div>
    </div>
  );
};

export default userPortfolio;
