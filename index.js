const express = require("express");

const mongoose = require("mongoose");
const app = express();

require("./models/Todos")

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


