const mongoose = require("mongoose");

const SoftwareSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  logo: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  created_by: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Software = mongoose.model("Software", SoftwareSchema);

module.exports = Software;
