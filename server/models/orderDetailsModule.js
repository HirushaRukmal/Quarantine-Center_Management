const mongoose = require("mongoose");

const orderdetailsschema = mongoose.Schema({
  orderDetailID: {
    type: String,

    required: [true, "Order detais must have a details id"],
  },
  foodID: {
    type: String,

    required: [true, "Order detais must have a food id"],
  },
  orderID: {
    type: String,

    required: [true, "Order detais must have a order id"],
  },
  price: {
    type: Number,

    required: [true, "Order detais must have a food price"],
  },

  status: {
    type: Number,
    Default: 1,
  },
});

module.exports = mongoose.model("OrderDetailsModule", orderdetailsschema);
