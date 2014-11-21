var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bohnanza');
var db = mongoose.connection;

var players = {};

players.playerSchema = Schema({
  _id: Number,
  name: String,
  cards: Array
});

players.player = mongoose.model('Player', playerSchema);

module.exports = players; 
