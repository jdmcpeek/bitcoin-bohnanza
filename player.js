var mongoose = require('mongoose');
var players = {};
var beans = require('./beans');
var player_schema = Schema({
  name: String,
  hand: [beans.beans_schema],
  plot0: [beans.beans_schema],
  plot1: [beans.beans_schema],
  //plot2: can be added on update.
  //http://docs.mongodb.org/manual/reference/operator/update/set/
  gold: Number
});

players.player = mongoose.model('Player', player_schema);
module.exports = players;
