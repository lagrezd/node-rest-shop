const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const Product = module.exports = mongoose.model('Product', productSchema);

// Get Product
module.exports.getProduct = function (callback, limit) {
    Product.find(callback).limit(limit);
}


