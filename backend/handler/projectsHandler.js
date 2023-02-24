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
    language,
    path,
    ratings,
    tools,
    link,
    category,
    title,
    date,
    content,
    description,
  } = req.body;

  let newProject;
  try {
    newProject = new projectModel({
      language,
      path,
      ratings,
      tools,
      link,
      category,
      title,
      date,
      content,
      description,
    });
    await newProject.save();
  } catch (error) {
    console.log(error);
  }
  if (newProject) {
    res.status(200).json({ message: "succesufully added" });
    return console.log("project succesufully added");
  }
  res.status(400).json({ message: "project not added" });
  return console.log("project not added");
};
