var mongoose = require('mongoose');
var players = {};
var beans = require('./beans');
var Schema = Schema({
  name: String,
  hand: [beans.Schema],
  plot0: [beans.Schema],
  plot1: [beans.Schema],
  //plot2: can be added on update.
  //http://docs.mongodb.org/manual/reference/operator/update/set/
  gold: Number
});

players.player = mongoose.model('Player', playerSchema);
module.exports = players;
