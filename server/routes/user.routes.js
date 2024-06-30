const express = require("express");
const { userController } = require("../controllers/user.controller");
const { upload } = require("../middlewares/multer");
const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/",upload.single('image'), userController.add)
router.delete("/:id", userController.delete);
router.put("/:id", userController.edit);

module.exports = router;
