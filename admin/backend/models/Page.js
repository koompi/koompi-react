const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  lang: {
    type: String,
    default: "en",
  },
  category: {
    type: String,
    required: true,
  },
  sectionNumber: {
    type: Number,
  },
  keywords: {
    type: [String],
  },
  meta_desc: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_by: {
    type: String,
    default: null,
  },
  updated_at: {
    type: Date,
    default: null,
  },
});

const Page = mongoose.model("Page", PageSchema);

module.exports = Page;
