var objects = require('./app/data/object.js');
var array = ['2', '3', '5', '4', '2'];

  var bestScore = 100;
  var objectIndex;
  var itemCount = 0;

objects.forEach(function(item) {
  var scores = item.scores;
  var currentScore = 0;

  console.log(item.name)

  for(var i = 0; i < scores.length; i++) {
    var diff = Math.abs(scores[i] - array[i]);
    currentScore += diff;
  }

  console.log(currentScore);

  if(currentScore < bestScore) {
    bestScore = currentScore;
    objectIndex = itemCount;
  }

  console.log(bestScore);
  itemCount++;
})

console.log(objects[objectIndex].name);
