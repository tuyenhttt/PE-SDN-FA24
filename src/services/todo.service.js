const Todo = require("../models/todo.model");

const create = async (newTodo) => {
  return await Todo.create(newTodo);
};

const findAll = async () => {
  return await Todo.find();
};

const getTodoById = async (todoId) => {
  return await Todo.findById(todoId);
};

const updateTodoById = async (todoId, todo) => {
  return await Todo.findByIdAndUpdate(todoId, todo);
};

const deleteTodoById = async (todoId) => {
  return await Todo.findByIdAndDelete(todoId);
};

module.exports = {
  create,
  findAll,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
