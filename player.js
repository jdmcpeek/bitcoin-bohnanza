var mongoose = require('mongoose');
var beans = require('./bean');
var Schema = mongoose.Schema;
var player = {};

player.schema = new Schema({
  //could hold _id = name
  name: String,
  hand: [beans.schema],
  plot0: [beans.schema],
  plot1: [beans.schema],
  //plot2: can be added on update.
  //http://docs.mongodb.org/manual/reference/operator/update/set/
  gold: Number
});

player.model = mongoose.model('Player', player.schema);
module.exports = player;
