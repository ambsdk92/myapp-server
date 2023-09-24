require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const server = require("./src/app");
const PORT = process.env.PORT || 4000;

const app = express();

console.log("Establishing database connection...");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongoose connection error:", error);
    process.exit(1);
  }
};

// app.use("/api", server);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("uncommented db conn");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});

// app.listen(PORT, () => {
//   console.log("listening for requests");
// });
