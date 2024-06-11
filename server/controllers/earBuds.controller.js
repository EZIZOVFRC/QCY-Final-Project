
const { earBuds } = require("../models/earBuds.model")

const earBudsController = {
    getAll: async (req, res) => {
        try {
            const items = await earBuds.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await earBuds.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newearBuds = new earBuds({ ...req.body })
            await newearBuds.save()
            const items = await earBuds.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await earBuds.findByIdAndDelete(id)
            const items = await earBuds.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await earBuds.findByIdAndUpdate(id, { ...req.body })
            const items = await earBuds.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { earBudsController }
