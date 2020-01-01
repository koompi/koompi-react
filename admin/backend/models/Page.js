const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Page = mongoose.Model("Page", PageSchema);

module.exports = Page;
