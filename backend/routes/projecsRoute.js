import express from "express";
import {
  addProjects,
  deleteProject,
  editProject,
  getProjects,
} from "../handler/projectsHandler.js";

const projectsRoute = express();

projectsRoute.get("/projects", getProjects);
projectsRoute.post("/addProjects", addProjects);
projectsRoute.post("/delete", deleteProject);
projectsRoute.post("/update/:id", editProject);

export default projectsRoute;
