const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  message: {
    type: String
  },
  product: {
    type: [String],
    required: true
  },
  cancel: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const payment = mongoose.model("Payment", PaymentSchema);

module.exports = payment;
