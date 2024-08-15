const mongoose = require("mongoose");

const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.type.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchemas = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    orderItem: {
      type: [orderItemsSchema],
      required: [true, "password is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchemas);
module.exports = { Order };
