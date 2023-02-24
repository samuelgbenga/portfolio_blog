import React from "react";

const blogPost = ({ title, content, description, date }) => {
  return (
    <div className="lg:even:relative lg:even:top-[45px]">
      <div className=" h-[12rem] bg-[#202022]  flex flex-col justify-around p-6 lg:h-[24rem] ">
        <div className="text-2xl font-bold uppercase">{title}</div>
        <div>{description}</div>
        <div className="text-sm">{date}</div>
      </div>
    </div>
  );
};

export default blogPost;
