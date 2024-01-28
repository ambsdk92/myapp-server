const todoModel = require("../models/todo-model");
const mongoose = require("mongoose");

const getTodoList = async (req, res) => {
  try {
    const todoList = await todoModel.find().sort({ createdAt: -1 });
    res.status(200).json(todoList);
  } catch (err) {
    res.status(400).json(err.errors);
  }
};

const createTodo = async (req, res) => {
  const { itemName, status } = req.body;
  try {
    const todo = await todoModel.create({
      itemName,
      status,
    });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err.errors);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ _message: "todo not found" });

  try {
    const todo = await todoModel.findOneAndDelete({ _id: id });
    if (!todo) return res.status(404).json({ _message: "todo not found" });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ _message: "todo not found" });

  try {
    const todo = await todoModel.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!todo) return res.status(404).json({ _message: "todo not found" });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getTodoList, createTodo, deleteTodo, updateTodo };
