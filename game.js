var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bean_model = require('./bean');
var bean_schema = bean_model.schema;
var player_model = require('./player');
var player_schema = player_model.schema;

// To do this "better" we could take advantage of the fact that "order" only
// really matters for the deck and hands.
var schema = new Schema({
  //for now the name is the game ID
  _id:            String,
  round:          Number,
  current_player: Number,
  deck:           [bean_schema],
  discard:        [bean_schema],
  players:        [player_schema]
});

//Populate this.deck
schema.methods.generate_deck = function () {
  totals = {
    "coffee": 24,
    "wax": 22,
    "blue": 20,
    "chili": 18,
    "stink": 16,
    "green": 14,
    "soy": 12,
    "black-eyed": 10,
    "red": 8,
    "garden": 6,
    "cocoa": 4
  };
  for (var bean_type in totals) {
    for (var i=0; i < totals[bean_type]; i++) {
      var new_bean = new bean_model({type: bean_type});
      this.deck.push(new_bean);
    }
  }
};

//Shuffles this.deck
schema.methods.shuffle_deck = function () {
  //http://goo.gl/Uh6MLE
  var index = this.deck.length, temp, rnd_index;

  while(0 !== index){
    rnd_index = Math.floor(Math.random() * index);
    index -=1;

    temp = this.deck[index];
    this.deck[index] = this.deck[rnd_index];
    this.deck[rnd_index] = temp;
  }
};

//Pops the first n cards off the deck and returns them in an array
schema.methods.draw_n = function(number) {
    var return_array = [];
    for(var i=0; i<number; i++) {
      return_array.push(this.deck.shift());
    }
    return return_array;
};

//Takes the all the beans in the discard pile moves them into the deck again
schema.methods.recycle = function() {
  //This style for-loop acts funny... if cards is an array I would expect card
  //to be an element
  while(this.discard.length > 0) {
    this.deck.push(this.discard.shift());
  }
  this.round++;
};

module.exports = mongoose.model('Game', schema);
