const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  link: {
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
});

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);

module.exports = SocialMedia;
