const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

/**
 * Connect to Mongoose
 *
 * db: shop
 * collections: products, orders
 * object: name
 */
mongoose.connect('mongodb://localhost/shop');
const db = mongoose.connection;

// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        err: {
            message: error.message
        }
    })
});


module.exports = app;