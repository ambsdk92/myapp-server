const express = require("express");
const todoRouter = express.Router();
const {
  getTodoList,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo-controller");

todoRouter.get("/", getTodoList);

todoRouter.post("/", createTodo);

todoRouter.delete("/:id", deleteTodo);

todoRouter.patch("/:id", updateTodo);

module.exports = todoRouter;
