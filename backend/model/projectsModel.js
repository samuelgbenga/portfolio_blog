import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  language: String,
  path: String,
  ratings: Number,
  tools: String,
  link: String,
  title: String,
  description: String,
  content: String,
  date: String,
  type: String,
  name: String,
  date_recieved: String,
  category: String,
});

export const projectModel = mongoose.model("projectModel", projectSchema);
