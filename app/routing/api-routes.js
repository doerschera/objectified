var objects = require('../data/object.js');

module.exports = function(app) {
  app.get('/api/objects', function(req, res) {
    res.json(objects);
  })

  app.post('/api/new', function(req, res) {
    var user = [];
    console.log(req.body);
    user.push(req.body);
    res.json(user);
  })
}
