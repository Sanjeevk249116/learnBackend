const mongoose = require("mongoose");
const subTodoSchema = new mongoose.Schema(
  {
    content: { tyepe: String, required: true },
    complete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const subTodosModel = mongoose.model("Subtodos", subTodoSchema);
module.exports = { subTodosModel };
