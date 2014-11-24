var mongoose = require('mongoose');
var players = {};
var beans = require('./beans');
var playerSchema = Schema({
  name: String,
  hand: [beans.schema],
  plot0: [beans.schema],
  plot1: [beans.schema],
  //plot2: can be added on update.
  //http://docs.mongodb.org/manual/reference/operator/update/set/
  gold: Number
});

players.player = mongoose.model('Player', playerSchema);
module.exports = players;
