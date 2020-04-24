const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    email: {type: String},
    gallons: {type: Number, required: true},
    delivery: {type: Date, required: true},
    address: {type: String, required: true},
    price: {type: String},
    total: {type: String},
});

module.exports = mongoose.model('Quote', quoteSchema);