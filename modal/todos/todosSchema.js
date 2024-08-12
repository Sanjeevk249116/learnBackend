const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    complete: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    subTodos: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subtodos"
        }
    ],
  },
  { timestamps: true }
);

const todosModel = mongoose.model("todos", todoSchema);
module.exports = { todosModel };
