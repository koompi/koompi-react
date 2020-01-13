const mongoose = require("mongoose");

const RetailerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: null
  },
  phoneNumber: {
    type: String,
    default: null
  },
  created_by: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Retailer = mongoose.model("Retailer", RetailerSchema);

module.exports = Retailer;
