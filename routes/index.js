var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'BitCoin Bohnanza' });
});

/* GET game page */
router.get('/play', function(req, res) {
	res.render('play', { title: "Play Bohnanza" });
});

module.exports = router;
