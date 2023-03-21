import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePost = ({ projects }) => {
  let { id } = useParams();

  if (!id) {
    return <div>page not found!</div>;
  }

  return (
    <div className="w-full min-h-screen py-16 bg-white-theme dark:text-white dark:bg-dark-theme">
      <div className="max-w-3xl mx-auto ">
        {projects &&
          projects.map((project, i) => {
            if (project._id === id)
              return (
                <div key={i}>
                  <h1 className=" text-4xl mb-6 font-bold">
                    {project.blog_title}
                  </h1>
                  <p className="leading-8">{project.blog_content}</p>
                </div>
              );
            return <div key={i}></div>;
          })}
        <div className="mt-6">
          <Link to="/" className=" text-red-400 ">
            goto Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
