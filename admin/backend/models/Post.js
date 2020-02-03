const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  created_by: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumnail: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  keywords: {
    type: [String]
  },
  meta_desc: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: null
  },
  updated_by: {
    type: String,
    default: null
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
