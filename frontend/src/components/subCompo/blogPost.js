import React from "react";

import { Link } from "react-router-dom";

const blogPost = ({ id, title, description, date }) => {
  return (
    <div className="lg:even:relative lg:even:top-[45px] transition delay-100 duration-200 ease-in-out lg:hover:scale-110">
      <div className=" h-[12rem] bg-[#202022]  flex flex-col justify-around p-6 lg:h-[24rem] ">
        <div className="text-2xl font-bold uppercase">{title}</div>
        <Link to={`/content/${id}`}>{description}</Link>
        <div className="hidden"></div>
        <div className="text-sm">{date}</div>
      </div>
    </div>
  );
};

export default blogPost;
