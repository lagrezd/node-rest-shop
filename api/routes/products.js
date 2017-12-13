const express = require('express');
const router = express.Router();

Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.getProduct(function(err, products) {
        if (err) {
            throw err;
        } else {
            res.status(200).json(products);
        }
    });
    /*res.status(200).json({
        message: 'Handling GET requests to /products'
    });*/
});

router.post('/', (req, res, next) => {
    const product = {
      name: req.body.name,
      price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST requests to /products',
      createProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You pass an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;