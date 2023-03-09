import React from "react";
import { AiFillStar } from "react-icons/ai";
const projects = ({ language, path, tools, link, ratings }) => {
  return (
    <div>
      <div className=" h-[12rem] bg-[#202022] flex flex-col justify-around p-6 transition delay-100 duration-200 ease-in-out lg:hover:scale-110">
        <div className="text-sm uppercase">{language}</div>
        <div className="text-lg">{path}</div>
        <div className="text-base">{tools}</div>
        <div className="flex items-center gap-1 text-sm">
          <AiFillStar /> {ratings}
        </div>
      </div>
    </div>
  );
};

export default projects;
