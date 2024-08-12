const mongoose = require("mongoose");

const productSchemas = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Cateogory",
      required: true,
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchemas);
module.exports = { Product };
