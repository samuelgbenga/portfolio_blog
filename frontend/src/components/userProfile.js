import React from "react";
import { BsTwitter } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import Dp from "./../utils/dp.jpeg";

const userProfile = () => {
  return (
    <div className="p-8 py-6 ">
      <div>
        <h1 className="text-4xl font-bold py-6">Samuel Gbenga Joseph</h1>
        <h2 className="text-2xl font-medium py-3">
          Computer Science Graduate at Fulokoja
        </h2>
        <p className="text-sm font-medium py-3 leading-9">
          I build open-source front-end libraries at Algolia and host two tech
          podcasts: Developer Experience and Entre Devs. On my spare time, I
          share what I learn on my blog and speak at tech conferences around the
          world. <br />
          Ps: I dont do any of that the bio's not mine
        </p>

        <div className="hidden lg:flex flex-col gap-6 text-[11px] py-16">
          <div>01 _____ PROJECTS</div>
          <div>02 _____ BLOG_POSTS</div>
          <div>03 _____ CERTIFICATIONS</div>
        </div>
        <div className="flex gap-9 items-center py-6  lg:mt-20">
          {" "}
          <img
            src={Dp}
            alt="/"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div className="flex gap-3 items-center">
            <BsTwitter />{" "}
            <span className="flex items-center gap-1">
              Twitter
              <HiExternalLink />
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <AiOutlineGithub />{" "}
            <span className="flex items-center gap-1">
              Github
              <HiExternalLink />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
