
const express = require("express")
const { newsController } = require("../controllers/news.controller")
const { upload } = require("../middlewares/multer")
const router = express.Router()

router.get("/", newsController.getAll)
router.get("/:id", newsController.getById)
router.post("/",upload.single('image'), newsController.add)
router.delete("/:id", newsController.delete)
router.put("/:id", newsController.edit)

module.exports = router
