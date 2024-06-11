
const express = require("express")
const { watchesController } = require("../controllers/watches.controller")
const router = express.Router()

router.get("/", watchesController.getAll)
router.get("/:id", watchesController.getById)
router.post("/", watchesController.add)
router.delete("/:id", watchesController.delete)
router.put("/:id", watchesController.edit)

module.exports = router
