var mongoose = require('mongoose');
var plot_model = require('./plot');
var player_model = require('./player');
var game_model = require('./game');
var model = {};

model.create_game = function(channel_name, player_name) {
  var new_player = player_model.create({name: player_name});
  var new_game = game_model.create({channel: channel_name, players: [new_player]});
  return new_game;
};

model.save_game = function(game,cb) {
  game.save(function(err, game){
    if(err) console.error(err);
    if(cb !== undefined) cb(game);
  });
};

model.find_game = function(channel_name, cb) {
  game_model.findOne({channel: channel_name},
    function (err, game) {
    if(err) console.error(err);
    cb(game);
  });
};

module.exports = model;
