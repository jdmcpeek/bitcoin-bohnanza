var mongoose = require('mongoose');
var beans = require('./bean');
var pile = {}; //this is more like a collection.
var Schema = mongoose.Schema;

pile.schema = new Schema({
	cards: [beans.schema]
});

//Adds new cards into the pile (don't forget to shuffle)!
//cards - array of beans
pile.schema.methods.add = function(cards) {
	//This style for-loop acts funny...
	//if cards is an array I would expect card to be an element
	for(var card in cards) {
		this.cards.push(cards[card]);
	}
}

//Pops the first card off the pile and returns it
pile.schema.methods.draw = function() {
		//what happens if there are no cards left in pile?
		return this.cards.pop();
}

//Shuffles this.cards
pile.schema.methods.shuffle = function() {
	//http://goo.gl/Uh6MLE
	var index = this.cards.length, temp, rnd_index;

	while(0 !== index){
		rnd_index = Math.floor(Math.random() * index);
		index -=1;

		temp = this.cards[index];
		this.cards[index] = this.cards[rnd_index];
		this.cards[rnd_index] = temp;
	}
}

//Private constructor!
pile.model = mongoose.model('Pile', pile.schema);

//Creates a new pile and then populates this.cards with the appropriate beans
pile.init = function() {
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
	var new_pile = new pile.model({cards: []});
	for (var bohn in totals) {
		for (var i=0; i < totals[bohn]; i++) {
			var new_card = beans.new(bohn);
			new_pile.cards.push(new_card);
		}
	}
	return new_pile;
};


module.exports = pile;
