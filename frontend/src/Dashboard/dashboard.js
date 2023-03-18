import Login from "./login";
import useToken from "./useToken";
import { RiDashboardFill } from "react-icons/ri";
import { GrProjects, GrCertificate } from "react-icons/gr";
import { FaMicroblog } from "react-icons/fa";
//import { useState } from "react";
import DefaultPage from "./dashboardCompo/DefaultPage";
import Project from "./dashboardCompo/Project";
import Blog from "./dashboardCompo/Blog";
import Cert from "./dashboardCompo/Cert";
import useDisplay from "./dashboardUtils/useDisplay";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const displayObject = {
  default: true,
  project: false,
  blog: false,
  cert: false,
};

const Dashboard = ({ projects, handleDelete, handleAddNew }) => {
  const { token, setToken } = useToken();
  const { display, setDisplay } = useDisplay();
  const [cdisplay, setcDisplay] = useState(
    localStorage.dashboardcDisplay
      ? JSON.parse(localStorage.dashboardcDisplay)
      : displayObject
  );

  if (token) {
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 2400000);
  }

  // handle onClick
  const handleOnClick = (name) => {
    Object.keys(displayObject).forEach((elem) => {
      if (elem === name) {
        setcDisplay((prev) => ({ ...prev, [name]: true }));
      } else {
        setcDisplay((prev) => ({ ...prev, [elem]: false }));
      }
    });
    localStorage.setItem("dashboardcDisplay", JSON.stringify(cdisplay));
  };

  useEffect(() => {
    setDisplay(cdisplay);
  }, [setDisplay, cdisplay]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

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
          <Link
            to="/"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            goto Home
          </Link>
        </div>
      </div>

      <div className="px-6 py-12 grow ">
        <div className={` ${!display.default && "hidden"}`}>
          <DefaultPage />
        </div>
        <div className={` ${!display.project && "hidden"}`}>
          <Project
            projects={projects}
            handleDelete={handleDelete}
            handleAddNew={handleAddNew}
          />
        </div>
        <div className={` ${!display.blog && "hidden"}`}>
          <Blog projects={projects} handleDelete={handleDelete} />
        </div>
        <div className={` ${!display.cert && "hidden"}`}>
          <Cert projects={projects} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
