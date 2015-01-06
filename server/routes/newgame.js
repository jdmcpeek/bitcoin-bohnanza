// Include Express
var express = require('express');

var game_model = require('../model/game');

// Initialize the Router
var router = express.Router();

// This is... oddly enough, mapping to the /newgame.
// Even though it says '/' what it really means is the root url
// of the request it's handling.  So since it was called in our
// app.use('/newgame', newgame); Our function here sees '/' as
// '/newgame'

// Setup the Route
router.post('/', function (req, res) {

  console.log('test');

  // show the request body in the command line
  console.log(req.body);

  var game = game_model.create(req.body.gameName, req.body.leaderName);
  //
  game.save(function (err) {
    if (err) res.status(403).send(err.message);
    // else res.redirect(301, '/play/' + req.body.gameName); // redirect from server won't work. It has to be done on the client side.
  });

  // return a json response to angular
  res.json({
    'msg': 'success!'
  });

  // do I have to end the response?
});



// Expose the module
module.exports = router;
