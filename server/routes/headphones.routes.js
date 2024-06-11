
const express = require("express")
const { headphonesController } = require("../controllers/headphones.controller")
const { upload } = require("../middlewares/multer")
const router = express.Router()

router.get("/", headphonesController.getAll)
router.get("/:id", headphonesController.getById)
router.post("/",upload.single('image'), headphonesController.add)
router.delete("/:id", headphonesController.delete)
router.put("/:id", headphonesController.edit)

module.exports = router
