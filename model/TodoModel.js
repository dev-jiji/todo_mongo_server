// mongoose 모듈
const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    completed: Boolean,
    uid:String,
    // 2.  objectId를 통해서 다른 Model 에 접근
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
    },
  },
  { collection: "todos" }
);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = { Todo };
