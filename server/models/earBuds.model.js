
const mongoose = require("mongoose")

const earBuds = mongoose.model("earBuds", new mongoose.Schema({
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

module.exports = { earBuds }
