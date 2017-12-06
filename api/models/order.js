const mongoose = require('mongoose');

// Order Schema
const orderSchema = mongoose.Schema({
   name: {
       type: String,
       require: true
   }
});

const Order = module.exports = mongoose.model('Order', orderSchema);

// Get Orders
module.exports.getOrder = function (callback, limit) {
    Order.find(callback).limit(limit);
}
