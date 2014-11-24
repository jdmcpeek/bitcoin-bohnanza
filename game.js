var mongoose = require('mongoose');
var beans = require('./bean');
var piles = require('./pile');
var players = require('./player');
var Schema = mongoose.Schema;
var game = {};

//Do I let store Discard and Deck together
//or do I use a ref.
game.schema = new Schema({
  _id:      String,
  //piles[0] = deck
  //piles[1] = discard
  piles:     [piles.schema],
  players:   [players.schema]
});

/*
game.schema = new Schema({
  _id:      String,
  deck:     [beans.schema],
  discard:  [beans.schema],
  players:  [players.schema]
});

*/
//Constructor!
model = mongoose.model('Game', game.schema);

game.init = function(name){
  var deck = new piles.init();
  deck.shuffle();
  var params = {_id: name, piles: [deck, new piles.model()], players: []}
  return new model(params);
}

module.exports = game;
