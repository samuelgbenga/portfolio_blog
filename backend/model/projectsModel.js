import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  proj_language: String,
  proj_name: String,
  proj_tools: String,
  proj_ratings: Number,
  proj_link: String,
  blog_title: String,
  blog_desc: String,
  blog_content: String,
  blog_date: String,
  cert_title: String,
  cert_desc: String,
  cert_date: String,
  category: { type: String, required: true },
});

export const projectModel = mongoose.model("projectModel", projectSchema);
