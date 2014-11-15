var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'BitCoin Bohnanza' });
});

/* GET game page */
router.get('/play', function(req, res) {
	
	var json = { title: "Bohnanza!!!!!!" };
	
	res.render('play', json);

});

/* transact between players */

// router.get('/generate', function(req, res) {
// 	res.render
// });

module.exports = router;
