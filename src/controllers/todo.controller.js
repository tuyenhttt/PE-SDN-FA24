const TodoService = require("../services/todo.service");
const apiResponse = require("../utils/api.response");

const create = async (req, res) => {
  try {
    const todo = await TodoService.create(req.body);
    if (!todo) {
      return res
        .status(401)
        .json(apiResponse(401, "Failed", "Create todo failed"));
    }
    res
      .status(200)
      .json(apiResponse(200, "Success", "Create todo success", todo));
  } catch (error) {
    res.status(500).json(apiResponse(500, "Failed", error.message));
  }
};

const getAll = async (req, res) => {
  try {
    const todo = await TodoService.findAll();
    if (!todo) {
      return res
        .status(400)
        .json(apiResponse(400, "failed", "List todo is empty"));
    }
    res
      .status(200)
      .json(apiResponse(200, "success", "List todo success", todo));
  } catch (error) {
    res.status(500).json(apiResponse(500, "Failed", error.message));
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await TodoService.getTodoById(req.params.id);
    if (!todo) {
      return res.status(404).json(apiResponse(404, "Failed", "Todo not found"));
    }
    res.status(200).json(apiResponse(200, "Success", "Todo", todo));
  } catch (error) {
    res.status(500).json(apiResponse(500, "Failed", error.message));
  }
};

const updateTodoById = async (req, res) => {
  try {
    const todo = await TodoService.updateTodoById(req.params.id, req.body);
    if (!todo) {
      return res.status(400).json(apiResponse(400, "failed", "Update failed"));
    }
    res.status(200).json(apiResponse(200, "Success", "Update success"));
  } catch (error) {
    res.status(500).json(apiResponse(500, "Failed", error.message));
  }
};

const deleteTodo = async (req, res) => {
  try {
    await TodoService.deleteTodoById(req.params.id);
    res.status(200).json(apiResponse(200, "Items deleted"));
  } catch (error) {
    res.status(500).json(apiResponse(500, "failed", error.message));
  }
};

module.exports = {
  create,
  getAll,
  getTodoById,
  updateTodoById,
  deleteTodo,
};
