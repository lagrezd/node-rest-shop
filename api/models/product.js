const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
});

module.exports = mongoose.model('Product', productSchema);


/*const Product = module.exports = mongoose.model('Product', productSchema);

// Get Product
module.exports.getProduct = function (callback, limit) {
    Product.find(callback).limit(limit);
}*/


