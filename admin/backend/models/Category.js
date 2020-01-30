const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  created_by: {
    type: String,
    required: true
  },
  updated_by: {
    type: String,
    default: ""
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  },
  updated_at: {
    type: Date,
    default: ""
  }
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
