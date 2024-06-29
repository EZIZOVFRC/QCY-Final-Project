const { orderModel } = require('../models/UserModel');

const orderController = {
    getAll: async (req, res) => {
        try {
            const items = await orderModel.find().populate('orderHeadphones').populate('orderEarbuds').populate('orderWatches')
            res.send(items);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const item = await orderModel.findById(id).populate('orderHeadphones').populate('orderEarbuds').populate('orderWatches')
            res.send(item);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await orderModel.findByIdAndDelete(id);
            const items = await orderModel.find();
            res.send(items);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    add: async (req, res) => {
        try {
            const newUser = new orderModel({ ...req.body, image: req.file ? req.file.filename : '' });
            await newUser.save();
            res.send('User Created');
        } catch (error) {
            res.status(404).send(error);
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            await orderModel.findByIdAndUpdate(id, { ...req.body });
            const items = await orderModel.find();
            res.send(items);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    register: (req, res) => {
        orderModel.create(req.body)
            .then(order => res.json(order))
            .catch(err => res.json(err));
    },
    login: (req, res) => {
        const { email, password } = req.body;
        orderModel.findOne({ email, password }).then((order) => {
            if (order) {
                if (order.password === password) {
                    res.json('Login successful');
                } else {
                    res.json('Incorrect password');
                }
            } else {
                res.json('User not found');
            }
        });
    }
};

module.exports = { orderController };
