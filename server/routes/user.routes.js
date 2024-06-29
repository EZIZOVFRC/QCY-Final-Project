const express = require("express");
const { userController } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.delete("/:id", userController.delete);
router.put("/:id", userController.edit);

module.exports = router;
