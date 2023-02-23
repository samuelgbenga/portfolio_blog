import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  language: String,
  path: String,
  ratings: Number,
  tools: String,
  link: String,
});

export const projectModel = mongoose.model("projectModel", projectSchema);
