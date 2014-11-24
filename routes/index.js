var express = require('express');
var router = express.Router();

var game = require('../game');

var test = game.init("?");
console.log(test);
console.log(test.piles[0].cards[0]);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'weB-ohnanza' });
});

/* create a new session, possibly a socket.io channel */
router.post('/play/:session', function(req, res) {
  var session = req.params.session;
  //var deck = deck.makedeck;
  res.render('play');
  /* make a new game
  * save that game to the db
  * make dem moves
  */

  //I'm not sure this code should live here, but this is demonstrative
  // mongoose.connect('mongodb://localhost/test');
  // var db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function callback () {
  //   console.log("Instantiating deck.")
  //   var new_deck = new deck.model;
  //   console.log("Generating new deck:");
  //   new_deck.init();
  //   new_deck.shuffle();
  //   console.log("Drawing 3 cards");
  //   var beans = [];
  //   for(var i=0; i < 3; i++) {
  //     beans[i] = new_deck.draw();
  //     console.log(beans[i]);
  //   }
  //   console.log("Putting them back");
  //   new_deck.add(beans);
  //   for(var i=1; i <= 3; i++) {
  //     console.log(new_deck.cards[new_deck.cards.length-i]);
  //   }
  //   //ignoring error handling
  //   new_deck.save();
  //   console.log("Saved new deck.");
  // });

  // add to database

});

/* transact between players */

// router.get('/generate', function(req, res) {
// 	res.render
// });

module.exports = router;
