const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todo.controller");

router.post("/", TodoController.create);
router.get("/", TodoController.getAll);
router.get("/:id", TodoController.getTodoById);
router.put("/:id", TodoController.updateTodoById);
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;
