const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    image: String,
}, { timestamps: true });

module.exports = mongoose.model('products', productSchema);