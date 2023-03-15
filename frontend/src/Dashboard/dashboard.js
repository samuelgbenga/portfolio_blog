import Login from "./login";
import useToken from "./useToken";
import { RiDashboardFill } from "react-icons/ri";
import { GrProjects, GrCertificate } from "react-icons/gr";
import { FaMicroblog } from "react-icons/fa";
import { useState } from "react";
import DefaultPage from "./dashboardCompo/DefaultPage";
import Project from "./dashboardCompo/Project";
import Blog from "./dashboardCompo/Blog";
import Cert from "./dashboardCompo/Cert";

const Dashboard = ({ projects }) => {
  const { token, setToken } = useToken();
  const [display, setDisplay] = useState({
    default: true,
    project: false,
    blog: false,
    cert: false,
  });

  if (token) {
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 120000);
  }

  if (!token) {
    return <Login setToken={setToken} />;
  }
  // handle onClick
  const handleOnClick = (name) => {
    Object.keys(display).forEach((elem) => {
      if (elem === name) {
        setDisplay((prev) => ({ ...prev, [name]: true }));
      } else {
        setDisplay((prev) => ({ ...prev, [elem]: false }));
      }
    });
  };

  return (
    <div className=" h-screen flex relative">
      <div className="uppercase p-16 pt-12 pl-6 sticky h-full bg-gray-200 m-auto ">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => handleOnClick("default")}
        >
          <RiDashboardFill />
          Dashboard
        </div>
        <div className="mt-5 ml-7 text-sm">
          <div
            className="flex items-center gap-2 my-3 cursor-pointer"
            onClick={() => handleOnClick("project")}
          >
            <GrProjects />
            Projects
          </div>
          <div
            className="flex items-center gap-2 my-3 cursor-pointer"
            onClick={() => handleOnClick("blog")}
          >
            <FaMicroblog />
            Blogposts
          </div>
          <div
            className="flex items-center gap-2 my-3 cursor-pointer"
            onClick={() => handleOnClick("cert")}
          >
            <GrCertificate />
            Certifications
          </div>
        </div>
      </div>

      <div className="px-6 py-12 grow ">
        <div className={` ${!display.default && "hidden"}`}>
          <DefaultPage />
        </div>
        <div className={` ${!display.project && "hidden"}`}>
          <Project projects={projects} />
        </div>
        <div className={` ${!display.blog && "hidden"}`}>
          <Blog projects={projects} />
        </div>
        <div className={` ${!display.cert && "hidden"}`}>
          <Cert projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
