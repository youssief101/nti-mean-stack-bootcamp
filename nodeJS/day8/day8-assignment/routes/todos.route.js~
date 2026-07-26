const express = require("express");

const {getToDos, getToDoById, saveToDo, updateToDo, deleteToDo} = require("../controller/todo.controller.js");

const router = express.Router();

router.get("/", getToDos);
router.get("/:id", getToDoById);
router.post("/", saveToDo);
router.patch("/:id", updateToDo);
router.delete("/:id", deleteToDo);

module.exports = router;
