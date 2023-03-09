import React from "react";
import { BsBriefcase } from "react-icons/bs";

const certifications = ({ title, description, date }) => {
  return (
    <div>
      <div className=" h-[9rem] w-full flex gap-8 ">
        <div className=" flex items-center ">
          <div className="p-8 md:p-12 bg-[#202022] rounded-[50%] text-2xl md:text-3xl transition delay-100 duration-200 ease-in-out lg:hover:scale-110">
            {" "}
            <BsBriefcase />
          </div>
        </div>
        <div className=" grow flex flex-col justify-center gap-2">
          <div className="text-3xl font-bold">{title}</div>
          <div className="text-sm  text-gray-400">{description}</div>
          <div className="text-sm ">Date issued: {date}</div>
        </div>
      </div>
    </div>
  );
};

export default certifications;
