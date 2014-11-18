var beans = require('./beans');

// console.log(beans.coffee("hey"));

var deck = {};

deck.coffee = { "total": 24, "cards": [] };
deck.wax = { "total": 22, "cards": [] };
deck.blue = { "total": 20, "cards": [] };
deck.chili = { "total": 18, "cards": [] };
deck.stink = { "total": 16, "cards": [] };
deck.green = { "total": 14, "cards": [] };
deck.soy = { "total": 12, "cards": [] };
deck.blackeyed = { "total": 10, "cards": [] };
deck.red = { "total": 8, "cards": [] };
deck.garden = { "total": 6, "cards": [] };
deck.cocoa = { "total": 4, "cards": [] };


deck.makedeck = function() {

	for (var bohn in this) {
		if (typeof bohn != 'undefined' || typeof bohn != 'function') {
			for (var i = 0; i < this[bohn].total; i++) {
				var new_card = beans[bohn](bohn);
				this[bohn].cards.push(new_card);
			}
		}
	}

	return this.red;
};

console.log(deck.makedeck());

module.exports = deck;
