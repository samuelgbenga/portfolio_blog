import { projectModel } from "../model/projectsModel.js";

export const getProjects = async (req, res) => {
  let projects;
  try {
    projects = await projectModel.find();
  } catch (error) {
    console.log(error);
  }
  if (projects) {
    return res.status(200).json(projects);
  }
  return console.log("unable to fetch for some unkown reason");
};

export const addProjects = async (req, res) => {
  const {
    proj_language,
    proj_name,
    proj_tools,
    proj_ratings,
    proj_link,
    blog_title,
    blog_desc,
    blog_content,
    blog_date,
    cert_title,
    cert_desc,
    cert_date,
    category,
  } = req.body;

  let newProject;
  try {
    newProject = new projectModel({
      proj_language,
      proj_name,
      proj_tools,
      proj_ratings,
      proj_link,
      blog_title,
      blog_desc,
      blog_content,
      blog_date,
      cert_title,
      cert_desc,
      cert_date,
      category,
    });
    await newProject.save();
  } catch (error) {
    res.status(400).json({ message: "project not added" });
    return console.log(error);
  }
  if (newProject) {
    res.status(200).json({ message: "succesufully added" });
    return console.log("project succesufully added");
  }
  res.status(400).json({ message: "project not added" });
  return console.log("project not added");
};
