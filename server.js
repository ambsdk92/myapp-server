require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server = require("./src/app");
const PORT = process.env.PORT || 3000;

const app = express();

console.log("Establishing database connection...");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use("/api", server);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
