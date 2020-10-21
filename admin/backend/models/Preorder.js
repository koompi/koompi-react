const mongoose = require("mongoose");

const PreorderSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  user_message: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const preorder = mongoose.model("Preorder", PreorderSchema);

module.exports = preorder;
