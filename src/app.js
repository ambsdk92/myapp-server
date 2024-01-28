const express = require("express");
const userRouter = require("./routes/users-router");
const todoRouter = require("./routes/todo-router");
const app = express();
const json = express.json();

app.use(json);

app.use((req, res, next) => {
  console.log("Request log: ", req.path, req.method);
  next();
});

app.use("/users", userRouter);
app.use("/todo", todoRouter);

app.get("/about", (req, res) => {
  res.send({ data: "this is about response" });
});

module.exports = app;
