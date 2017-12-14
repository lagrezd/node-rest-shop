const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', productSchema);


/*const Product = module.exports = mongoose.model('Product', productSchema);

// Get Product
module.exports.getProduct = function (callback, limit) {
    Product.find(callback).limit(limit);
}*/


