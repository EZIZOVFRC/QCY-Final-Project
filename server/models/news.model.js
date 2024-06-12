
const mongoose = require("mongoose")

const news = mongoose.model("news", new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    date: {
        type: String
    },
    desc: {
        type: String
    },
}))

module.exports = { news }