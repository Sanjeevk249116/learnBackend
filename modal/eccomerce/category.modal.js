const mongoose = require("mongoose");

const categorySchemas = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
   
  },
  { timestamps: true }
);

const Cateogory = mongoose.model("Cateogory", categorySchemas);
module.exports = { Cateogory };
