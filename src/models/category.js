const mongoose = require('mongoose');

// Create schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamp: true,
    skipVersioning: true,
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;