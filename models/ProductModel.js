const { Schema, model } = require('../connection');

const productSchema = new Schema({
    productName : { type: String, required: true },
    email : { type: String, unique: true },
    password : { type: String, required: true },
    price : { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('product', productSchema);