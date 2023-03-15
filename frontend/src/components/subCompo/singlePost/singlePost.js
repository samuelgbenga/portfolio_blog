import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = ({ projects }) => {
  let { id } = useParams();

  if (!id) {
    return <div>page not found!</div>;
  }

  return (
    <div>
      {projects &&
        projects.map((project, i) => {
          if (project._id === id)
            return <div key={i}>{project.blog_content}</div>;
          return <div key={i}></div>;
        })}
    </div>
  );
};

export default SinglePost;
