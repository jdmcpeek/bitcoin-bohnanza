var express = require('express');
var router = express.Router();

var deck = require('../deck');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'BitCoin Bohnanza' });
});

/* GET game page */ // (deprecated, to be deleted)
// router.get('/play', function(req, res) {
//
// 	var json = { title: "Bohnanza!!!!!!" };
// 	res.render('play', json);
//
// });


/* create a new session, possibly a socket.io channel */
router.post('/play/:session', function(req, res) {
  var session = req.params.session;
  var deck = deck.makedeck;
  res.render('game');
  // add to database

});

/* transact between players */

// router.get('/generate', function(req, res) {
// 	res.render
// });

module.exports = router;
