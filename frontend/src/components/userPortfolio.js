import React from "react";
import Projects from "./subCompo/projects";
import BlogPost from "./subCompo/blogPost";
import Certifications from "./subCompo/certifications";

const userPortfolio = ({ projects }) => {
  return (
    <div className="max-w-full  flex flex-col gap-16 items-center py-12 px-6">
      <div className="w-[96%] grid grid-cols-1 gap-2">
        <div className="text-[12px] mb-6 lg:hidden">PROJECTS</div>

        {projects &&
          projects.map((project, i) => {
            if (project.category === "project")
              return (
                <Projects
                  key={i}
                  language={project.proj_language}
                  path={project.proj_name}
                  tools={project.proj_tools}
                  link={project.proj_link}
                  ratings={project.proj_ratings}
                />
              );
            return <div key={i}></div>;
          })}
      </div>

      <div className="w-[96%] grid grid-cols-1 gap-2">
        <div className="text-[12px] mb-6 lg:hidden">BLOG_POST</div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2  ">
          {projects &&
            projects.map((project, i) => {
              if (project.category === "blogpost")
                return (
                  <BlogPost
                    key={i}
                    id={project._id}
                    title={project.blog_title}
                    description={project.blog_desc}
                    date={project.blog_date}
                  />
                );
              return <div key={i}></div>;
            })}
        </div>
      </div>

      <div className="w-[96%] grid grid-cols-1 gap-2">
        <div className="text-[12px] mb-6 lg:hidden">CERTIFICATIONS</div>
        <div className="grid grid-cols-1 gap-2 ">
          {projects &&
            projects.map((project, i) => {
              if (project.category === "certification")
                return (
                  <Certifications
                    key={i}
                    title={project.cert_title}
                    description={project.cert_desc}
                    date={project.cert_date}
                  />
                );
              return <div key={i}></div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default userPortfolio;
