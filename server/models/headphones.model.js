
const mongoose = require("mongoose")

const headphones = mongoose.model("headphones", new mongoose.Schema({
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

module.exports = { headphones }
