const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
  lang: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Language = mongoose.model("Language", LanguageSchema);

module.exports = Language;
