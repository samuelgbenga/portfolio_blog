import express from "express";
import { addProjects, getProjects } from "../handler/projectsHandler.js";

const projectsRoute = express();

projectsRoute.get("/projects", getProjects);
projectsRoute.post("/addProjects", addProjects);

export default projectsRoute;
