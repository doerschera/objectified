var objects = require('../data/object.js');
var stats = require('../data/stats.js');

module.exports = function(app) {
  app.get('/api/objects', function(req, res) {
    res.json(objects);
  })

  app.get('/api/stats', function(req, res) {
    res.json(stats);
  })

  app.post('/api/new', function(req, res) {
    var user = req.body.selections;
    var bestScore = 100;
    var objectIndex;
    var itemCount = 0;

    objects.forEach(function(item) {
      var scores = item.scores;
      var currentScore = 0;

      for(var i = 0; i < scores.length; i++) {
        var diff = Math.abs(scores[i] - user[i]);
        currentScore += diff;
      }

      if(currentScore < bestScore) {
        bestScore = currentScore;
        objectIndex = itemCount;
      }

      itemCount++;
    })

    console.log(objects[objectIndex].name);



    res.json(objects[objectIndex]);
  })
}
