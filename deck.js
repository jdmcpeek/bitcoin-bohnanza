var mongoose = require('mongoose');
var beans = require('./beans');
var deck = {};
var Schema = mongoose.Schema;
deck.deckSchema = new Schema({
	channel: String,
	cards: [beans.schema]
});

var model = mongoose.model('Deck', deck.deckSchema);
//do we want camel case, underscores, or just concat??
deck.makedeck = function() {
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
	var new_deck = new deck.model({channel: 'default_channel', cards: []});
	for (var bohn in deck.totals) {
		for (var i=0; i < deck.totals[bohn]; i++) {
			var new_card = beans.new(bohn);
			new_deck.cards.push(new_card);
		}
	}
	//Shuffle?
	return new_deck;
};

//I'm not sure this code should live here, but this is demonstrative
mongoose.connect('mongodb://localhost/test');
//mongoose.connect('mongodb://127.0.0.1:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("Generating new deck:");
	var new_deck = deck.makedeck();
	//ignoring error handling
	new_deck.save();
	console.log(new_deck);
	console.log("Saved new deck.");
});
module.exports = deck;
