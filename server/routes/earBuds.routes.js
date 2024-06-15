
const express = require("express")
const { earBudsController } = require("../controllers/earBuds.controller")
const router = express.Router()
const { upload } = require("../middlewares/multer")
router.get("/", earBudsController.getAll)
router.get("/:id", earBudsController.getById)
router.post("/",upload.single('image'), earBudsController.add)
router.delete("/:id", earBudsController.delete)
router.put("/:id", earBudsController.edit)

module.exports = router
