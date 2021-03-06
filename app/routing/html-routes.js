var path = require('path');

module.exports = function(app) {

  app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

  app.get('/quiz', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/quiz.html'));
	});

  app.get('/stats',function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/stats.html'));
	});

  app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/404.html'));
	});
}
