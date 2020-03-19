const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
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
  color: {
    type: String,
    required: true
  },
  payBy: {
    type: String,
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
