const { orderModel } = require('../models/order.model');

const orderController = {
    getAll: async (req, res) => {
        try {
            console.log("Fetching all orders...");
            const items = await orderModel.find()
                .populate('orderHeadphones.headphone')
                .populate('orderEarbuds.earBuds')
                .populate('orderWatches.watches');
            res.send(items);
        } catch (error) {
            console.error("Error fetching orders: ", error);
            res.status(404).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            
            const item = await orderModel.findById(id)
                .populate('orderHeadphones.headphone')
                .populate('orderEarbuds.earBuds')
                .populate('orderWatches.watches');
            console.log("Order fetched: ", item);
            res.send(item);
        } catch (error) {
            console.error(`Error fetching order with ID ${id}: `, error);
            res.status(404).send(error);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Deleting order with ID: ${id}`);
            await orderModel.findByIdAndDelete(id);
            const items = await orderModel.find();
            console.log("Remaining orders: ", items);
            res.send(items);
        } catch (error) {
            console.error(`Error deleting order with ID ${id}: `, error);
            res.status(404).send(error);
        }
    },
    add: async (req, res) => {
        try {
            console.log("Adding new order: ", req.body);
            const newOrder = new orderModel({ ...req.body });
            await newOrder.save();
            console.log("Order created: ", newOrder);
            res.send('Order Created');
        } catch (error) {
            console.error("Error adding order: ", error);
            res.status(404).send(error);
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Editing order with ID: ${id}`);
            await orderModel.findByIdAndUpdate(id, { ...req.body });
            const items = await orderModel.find();
            console.log("Updated orders: ", items);
            res.send(items);
        } catch (error) {
            console.error(`Error editing order with ID ${id}: `, error);
            res.status(404).send(error);
        }
    }
};

module.exports = { orderController }
