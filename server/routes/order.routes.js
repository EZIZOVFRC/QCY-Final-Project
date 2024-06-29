const express = require("express");
const { orderController } = require("../controllers/order.controller");
const router = express.Router();

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/register", orderController.register);
router.post("/login", orderController.login);
router.delete("/:id", orderController.delete);
router.put("/:id", orderController.edit);

module.exports = router;
