const mongoose = require("mongoose");

const LegalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  created_by: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
});

const Legal = mongoose.model("Legal", LegalSchema);

module.exports = Legal;
