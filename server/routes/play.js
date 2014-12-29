// Include Express
var express = require('express');

var game_model = require('../model/game');

// Initialize the Router
var router = express.Router();

router.get('/', function(req, res){
  console.log('is this thing on?');

  game_model.findOne({
    channel: req.params.channel
  }, function (err, game) {
    if (err) error(err);
    if (game === null) res.status(404).send('No such game!');
    else {
      //gotta watch for no-sql injection
      res.json({
        channel: req.params.channel,
        game: game.strip
      });
    }
  });
});
