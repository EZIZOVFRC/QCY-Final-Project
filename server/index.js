
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const multer = require('multer')
const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use('/public', express.static('public/images'));

mongoose.connect(process.env.sec).then(() => {
    console.log("qosuldu")
    })
    
app.listen(8080, () => {
    console.log("isleyir")
})

const headphonesRouter = require("./routes/headphones.routes");
app.use("/api/headphones", headphonesRouter);

const watchesRouter = require("./routes/watches.routes");
app.use("/api/watches", watchesRouter);

const newsRouter = require("./routes/news.routes");
app.use("/api/news", newsRouter);

const earBudsRouter = require("./routes/earBuds.routes");
app.use("/api/earBuds", earBudsRouter);
