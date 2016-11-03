var objects = require('../data/object.js');

module.exports = function(app) {
  app.get('/api/objects', function(req, res) {
    res.json(objects);
  })
}
