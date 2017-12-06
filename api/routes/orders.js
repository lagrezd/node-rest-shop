const express = require('express');
const router = express.Router();
Order = require('../models/order');

// Hnadle incoming GET requests to /orders
router.get('/', (req, res, next) => {
    Order.getOrder(function(err, orders) {
        if (err) {
            throw err;
        } else {
            res.status(200).json(orders);
        }
    });
    /*res.status(200).json({
        message: 'Orders were fetched'
    });*/
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders was created'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Order details',
        orderId: id
    });
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Order deleted',
        orderId: id
    });
});

module.exports = router;