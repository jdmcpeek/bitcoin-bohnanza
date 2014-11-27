var mongoose = require('mongoose');
var plot_model = require('./plot');
var player_model = require('./player');
var game_model = require('./game');

mongoose.connect('mongodb://localhost/test');
db = mongoose.connection;
db.on('open', function callback() {

  exports.create_game = function(channel_name, player_name) {
    var new_player = player_model.create({name: player_name});
    var new_game = game_model.create({channel: channel_name, players: [new_player]});
    console.log("create_game");
    return new_game;
  };

  exports.save_game = function(game, cb) {
    game.save(function(err, game){
      if(err) console.error(err);
      cb(game);
    });
    console.log("Saved!");
  };

  exports.find_game = function(channel_name, cb) {
    console.log("find_game");
    game_model.findOne({channel: channel_name},
      function (err, game) {
      if(err) console.error(err);
      cb(game);
    });
  };
});
db.on('error', console.error.bind(console, 'connection error:'));
