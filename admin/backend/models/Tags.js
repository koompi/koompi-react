const mongoose = require("mongoose");

const Tags = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
