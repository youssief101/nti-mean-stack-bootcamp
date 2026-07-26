const express = require("express");

const {getToDos, getToDoById, saveToDo, updateToDo, deleteToDo} = require("../controller/todo.controller.js");
const {auth, restrictTo} = require("../middlewares/authentication.middleware.js")

const router = express.Router();

router.get("/", auth, getToDos);
router.get("/:id", auth, getToDoById);
router.post("/", auth, restrictTo("admin", "user"), saveToDo);
router.patch("/:id", auth, updateToDo);
router.delete("/:id", auth, restrictTo("admin"), deleteToDo);

module.exports = router;
