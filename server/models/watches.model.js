
const mongoose = require("mongoose")

const watches = mongoose.model("watches", new mongoose.Schema({
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

module.exports = { watches }
