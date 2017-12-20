const mongoose = require('mongoose');

// Order Schema
const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

//const Order = module.exports = mongoose.model('Order', orderSchema);
module.exports = mongoose.model('Order', orderSchema);

// Get Orders
/*module.exports.getOrder = function (callback, limit) {
    Order.find(callback).limit(limit);
}*/
