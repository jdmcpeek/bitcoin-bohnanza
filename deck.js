var beans = require('./beans');

// console.log(beans.coffee("hey"));

var deck = {}; 

deck.makedeck = function(coffee, wax, blue, chili, stink, green, soy, blackeyed, red, garden, cocoa) {
	for (var i = 0; i < coffee; i++) {
		var i = beans.coffee("coffee");
		console.log(i);
	}




}

console.log(deck.makedeck(7));


module.exports = deck;