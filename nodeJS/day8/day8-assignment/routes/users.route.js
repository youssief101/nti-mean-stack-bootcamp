const express = require("express");

const {getUsers, getUserById, saveUser, updateUser, deleteUser, login, refreshToken} = require("../controller/users.controller.js");
const {auth, restrictTo} = require("../middlewares/authentication.middleware.js")
const router = express.Router();

router.post("/", saveUser); // Registration: open to anyone
router.post("/login", login); // Login: open to anyone
router.post("/refresh-token", refreshToken); // Get a new access token: open to everyone


router.get("/", auth, restrictTo("admin"), getUsers);
router.get("/:id", auth, getUserById);

router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, restrictTo("admin"), deleteUser);

module.exports = router;
