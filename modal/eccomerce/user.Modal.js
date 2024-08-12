const mongoose = require("mongoose");

const userSchemas = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchemas);
module.exports = { User };
