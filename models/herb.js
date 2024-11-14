const mongoose = require('mongoose');

const herbSchema = new mongoose.Schema({
  herb_name: { type: String, required: true },
  description: { type: String, required: true },
  uses: { type: String, required: true }
});

module.exports = mongoose.model('Herb', herbSchema);
