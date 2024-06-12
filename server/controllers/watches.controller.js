
const { watches } = require("../models/watches.model")

const watchesController = {
    getAll: async (req, res) => {
        try {
            const items = await watches.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await watches.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newheadphones = new watches({ ...req.body,image:req.file.filename })
            await newheadphones.save()
            res.send('Watch Created bro')
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await watches.findByIdAndDelete(id)
            const items = await watches.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await watches.findByIdAndUpdate(id, { ...req.body })
            const items = await watches.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { watchesController }
