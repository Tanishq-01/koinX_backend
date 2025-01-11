const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    coin: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    marketCap: {
        type: Number,
        required: true
    },
    priceChange24h : {
        type: Number,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('crypto', cryptoSchema, 'crypto_data')