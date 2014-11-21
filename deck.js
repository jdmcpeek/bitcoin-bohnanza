var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var beans = require('./beans');

var deck = {};

deck.deckSchema = new Schema({
	channel: String,
	cards: Array
});

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
process.exit();
deck.makedeck = function() {
	for (var bohn in this.totals) {
		if (typeof bohn != 'undefined' || typeof bohn != 'function') {
			for (var i = 0; i < this[bohn].total; i++) {
				var new_card = beans[bohn](bohn);
				this[bohn].cards.push(new_card);
			}
		}
	}
	return this;
};

console.log(deck.makedeck());

module.exports = deck;
