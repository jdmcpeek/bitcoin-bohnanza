var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var beans = require('./beans');

var deck = {};

deck.deckSchema = new Schema({
	channel: String,
	cards: Array
});

deck.new_deck = mongoose.model('Deck', this.deckSchema);

deck.totals = {
	"coffee": 24,
	"wax": 22,
	"blue": 20,
	"chili": 18,
	"stink": 16,
	"green": 14,
	"soy": 12,
	"blackeyed": 10,
	"red": 8,
	"garden": 6,
	"cocoa": 4
};


console.log(this.totals);

deck.makedeck = function() {
	var new_deck = new Deck('default_channel', []);
	for (var bohn in this.totals) {
		// if (typeof bohn != 'undefined' || typeof bohn != 'function') {
			for (var i = 0; i < this[bohn]; i++) {
				var new_card = new Bean(beans[bohn]);
				new_deck.push(new_card);
			}
		// }
	}
	return this;
	// return new_deck;
};

console.log(deck.makedeck());

module.exports = deck;
