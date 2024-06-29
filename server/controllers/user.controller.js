const { userModel } = require('../models/UserModel');

const userController = {
    getAll: async (req, res) => {
        try {
            const items = await userModel.find();
            res.send(items);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const item = await userModel.findById(id);
            res.send(item);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await userModel.findByIdAndDelete(id);
            const items = await userModel.find();
            res.send(items);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    add: async (req, res) => {
        try {
            const newUser = new userModel({ ...req.body, image: req.file ? req.file.filename : '' });
            await newUser.save();
            res.send('User Created');
        } catch (error) {
            res.status(404).send(error);
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            await userModel.findByIdAndUpdate(id, { ...req.body });
            const items = await userModel.find();
            res.send(items);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    register: (req, res) => {
        userModel.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.json(err));
    },
    login: (req, res) => {
        const { email, password } = req.body;
        userModel.findOne({ email, password }).then((user) => {
            if (user) {
                if (user.password === password) {
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

module.exports = { userController };
