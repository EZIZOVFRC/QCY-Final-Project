
const express = require("express")
const { earBudsController } = require("../controllers/earBuds.controller")
const router = express.Router()

router.get("/", earBudsController.getAll)
router.get("/:id", earBudsController.getById)
router.post("/", earBudsController.add)
router.delete("/:id", earBudsController.delete)
router.put("/:id", earBudsController.edit)

module.exports = router
