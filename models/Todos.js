const { Schema, model } = require("mongoose");

const todoShcema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
});

module.exports = model("todos", todoShcema);
