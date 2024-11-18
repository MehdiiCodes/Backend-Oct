const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    brand: String,
    model: String,
    category: String,
    type: { type: String },
    price: { type: Number },
    image: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('products', mySchema);