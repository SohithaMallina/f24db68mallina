// controllers/herb.js
const Herb = require('../models/herbs');

// List all herbs
exports.herb_list = async (req, res) => {
  try {
    const herbs = await Herb.find();
    res.status(200).json(herbs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch herbs' });
  }
};

// Get a specific Herb by ID
exports.herb_detail = function(req, res) {
  Herb.findById(req.params.id, function(err, herb) {
    if (err || !herb) return res.status(404).json({ message: "Herb not found" });
    res.status(200).json(herb);
  });
};

// Create a new Herb
exports.herb_create_post = async (req, res) => {
  const newHerb = new Herb({
    herb_name: req.body.herb_name,
    price: req.body.price,
    functionality: req.body.functionality
  });
  try {
    await newHerb.save();
    res.status(201).json({ message: 'Herb created successfully', herb: newHerb });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create herb', error: err.message });
  }
};

// Delete a Herb by ID
exports.herb_delete = function(req, res) {
  Herb.findByIdAndDelete(req.params.id, function(err) {
    if (err) return res.status(500).json({ message: "Error deleting herb" });
    res.status(204).send();
  });
};

// Update a Herb by ID
exports.herb_update_put = function(req, res) {
  Herb.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, updatedHerb) {
    if (err) return res.status(500).json({ message: "Error updating herb" });
    res.status(200).json(updatedHerb);
  });
};
