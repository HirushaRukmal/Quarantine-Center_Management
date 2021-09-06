const mongoose = require("mongoose");

const orderschema = mongoose.Schema({
  orderID: {
    type: String,

    required: [true, "Order must have a name"],
  },
  total: {
    type: Number,

    required: [true, "Order must have a total"],
  },
  orderedDate: {
    type: Date,
    default: new Date(),
  },
  deliveryDate: {
    type: String,
  },
  status: {
    type: Number,
    Default: 1,
  },
  patientID: {
    type: String,
    required: [true, "Order must have a ordered person"],
  },
  instructions: {
    type: String,
  },
});

module.exports = mongoose.model("OrderModule", orderschema);
