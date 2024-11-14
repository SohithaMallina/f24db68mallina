// models/herbs.js
const mongoose = require('mongoose');

const herbSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  functionality: { type: String, required: true }
});

const Herb = mongoose.model('Herb', herbSchema);

module.exports = Herb;
