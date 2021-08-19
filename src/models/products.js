const mongoose = require('mongoose');

// Create schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: Number,
        required: true,
        default: 1
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: String
}, {
    timestamp: true,
    skipVersioning: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;