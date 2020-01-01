const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.Model("Post", PostSchema);

module.exports = Post;
