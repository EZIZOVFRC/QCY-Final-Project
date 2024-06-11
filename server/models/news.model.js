
const mongoose = require("mongoose")

const news = mongoose.model("news", new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
}))

module.exports = { news }