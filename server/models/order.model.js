const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  orderHeadphones: [
    {
      headphone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'headphones',
      },
      count: {
        type: Number,
        default: 1,
      },
    },
  ],
  orderEarbuds: [
    {
      earBuds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'earBuds',
      },
      count: {
        type: Number,
        default: 1,
      },
    },
  ],
  orderWatches: [
    {
      watches: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'watches',
      },
      count: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const orderModel = mongoose.model('Order', orderSchema);
module.exports = { orderModel };
