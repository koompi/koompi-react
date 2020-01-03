const mongoose = require("mongoose");

const validateEmail = function(email) {
  var isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return isEmail.test(email);
};

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"]
  },
  password: {
    type: String,
    required: true,
    minlength: 60
  },
  avatar: {
    type: String,
    default: "/images/avatar.png"
  },
  approved: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
