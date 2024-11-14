exports.api = function(req, res) {
    res.status(200).json({
      resources: [
        { resource: 'herbs', verbs: ['GET', 'POST', 'PUT', 'DELETE'] }
      ]
    });
  };