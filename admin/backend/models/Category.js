const mongoose = require("mongoose");

const Category = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
