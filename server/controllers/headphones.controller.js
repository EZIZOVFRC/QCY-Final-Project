
const { headphones } = require("../models/headphones.model")

const headphonesController = {
    getAll: async (req, res) => {
        try {
            const items = await headphones.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await headphones.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newheadphones = new headphones({ ...req.body,image:req.file.filename })
            await newheadphones.save()
            // const items = await headphones.find()
            // res.send(items)
            res.send('Item Created bro')
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await headphones.findByIdAndDelete(id)
            const items = await headphones.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await headphones.findByIdAndUpdate(id, { ...req.body })
            const items = await headphones.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { headphonesController }
