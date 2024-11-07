const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
    requires: [true, "Please enter id "],
  },
  title: {
    type: String,
    requires: [true, "Please enter students title"],
  },
  description: {
    type: String,
    requires: [true, "Please enter description "],
  },
  completed: {
    type: Boolean,
    requires: true,
    default: false,
  },
});

const Todo = mongoose.model("Product", TodoSchema);
module.exports = Todo;
