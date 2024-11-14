var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var herbSchema = new Schema({
  herb_name: { type: String, required: true },
  price: { type: Number, required: true },
  functionality: { type: String, required: true }
});

module.exports = mongoose.model('herb', herbSchema);