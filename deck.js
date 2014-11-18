var beans = require('./beans');

// console.log(beans.coffee("hey"));

var deck = {};

deck.coffee = {};
deck.wax = {};
deck.blue = {};
deck.chili = {};
deck.stink = {};
deck.green = {};
deck.soy = {};
deck.blackeyed = {};
deck.red = {};
deck.garden = {};
deck.cocoa = {};



deck.makedeck = function(coffee, wax, blue, chili, stink, green, soy, blackeyed, red, garden, cocoa) {


	for (var bean in deck) {

		for (var i = 0; i < coffee; i++) {
			deck.coffee[i] = beans.coffee("coffee");
		}

	}




};


console.log(deck.makedeck(7));


module.exports = deck;
