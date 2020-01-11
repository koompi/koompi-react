const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  department: {
    type: String,
    required: true
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

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
