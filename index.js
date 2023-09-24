require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const server = require("./src/app");
const PORT = process.env.PORT || 4000;

app.use(cors());

const app = express();

const connectDB = async () => {
  console.log("Establishing database connection...");

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1);
  }
};

app.use("/api", server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
