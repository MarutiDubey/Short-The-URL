import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortcode: String,
  longurl: String
});

export const Url = mongoose.model("Url", urlSchema);
