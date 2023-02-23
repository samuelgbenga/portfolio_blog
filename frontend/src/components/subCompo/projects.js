import React from "react";
import { AiFillStar } from "react-icons/ai";
const projects = () => {
  return (
    <div>
      <div className=" h-[12rem] bg-[#202022] flex flex-col justify-around p-6">
        <div className="text-sm">TYPESCRIPT</div>
        <div className="text-lg">samuelgbenga/portfolio</div>
        <div className="text-base">
          Created, calculated, and format money in JavaScript and TypeScript
        </div>
        <div className="flex items-center gap-1 text-sm">
          <AiFillStar /> 4,000
        </div>
      </div>
    </div>
  );
};

export default projects;
