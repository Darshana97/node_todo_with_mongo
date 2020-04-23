const express = require("express");

const mongoose = require("mongoose");
const app = express();

require("./models/Todos");

const mongoUrl =
  "mongodb+srv://darshana:achi@cluster0-cqpnt.azure.mongodb.net/test?retryWrites=true&w=majority";

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};

dbConnect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT} `);
});

const todoList = mongoose.model("todos");

// (async () => {
//   try {
//     const todo1 = new todoList({
//       fname: "Pubudu",
//       lname: "Bandara",
//     });
//     await todo1.save();
//     console.log("Data added");
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// (async () => {
//   try {
//     const all = await todoList.findById("5ea14cada62ad50b10a45c26");
//     console.log(all);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

(async () => {
  try {
    await todoList.findByIdAndDelete("5ea14d8003e3514810ac8f46");
    console.log("Data deleted");
  } catch (error) {
    console.log(error.message);
  }
})();
