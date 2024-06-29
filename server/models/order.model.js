const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  orderHeadphones: [
    {
      headphone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'headphones',
        required: true,
      },
      count: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  orderEarbuds: [
    {
      earBuds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'earBuds',
        required: true,
      },
      count: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],orderWatches: [
    {
      watches: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'watches',
        required: true,
      },
      count: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

const orderModel = mongoose.model('Order', orderSchema);
module.exports = { orderModel };
