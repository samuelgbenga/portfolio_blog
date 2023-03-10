import React, { useState, useEffect } from "react";
import UserProfile from "./components/userProfile";
import UserPortfolio from "./components/userPortfolio";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import axios from "axios";

const App = () => {
  const [dark, setDark] = useState(true);
  const [projects, setProjects] = useState([]);
  const [themeMode, setThemeMode] = useState(localStorage.theme);

  const handleTheme = () => {
    setDark((prev) => !prev);

    if (dark) {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    if (localStorage) {
      switch (localStorage.theme) {
        case "dark":
          setDark(true);
          break;
        case "light":
          setDark(false);
          break;
        default:
          break;
      }
    }
  }, [themeMode]);

  useEffect(() => {
    const handleConnect = async () => {
      axios
        .get("http://localhost:5000/projects")
        .then((data) => {
          setProjects(data.data);
        })
        .catch((err) => console.log(err));
    };
    handleConnect();
  }, []);

  const HomePage = () => {
    return (
      <div className=" w-full bg-white-theme dark:text-white dark:bg-dark-theme">
        <div className="max-w-[1350px] m-auto  min-h-screen gap-0 lg:grid lg:grid-cols-2 lg:justify-between relative ">
          <div className=" h-auto lg:top-0  lg:sticky lg:h-screen  ">
            <UserProfile />
          </div>
          <div className=" ">
            <UserPortfolio projects={projects} />
          </div>
        </div>
        <div
          className="fixed top-[92%] right-10  cursor text-[40px]"
          onClick={handleTheme}
        >
          {dark ? (
            <BsFillSunFill className="text-white" />
          ) : (
            <BsFillMoonStarsFill className="" />
          )}
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div
        className={`w-full lg:min-h-screen text-black ${
          dark && "dark"
        } relative `}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
