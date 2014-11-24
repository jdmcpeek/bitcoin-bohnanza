var mongoose = require('mongoose');
var beans = {};
var Schema = mongoose.Schema;

beans.beansSchema = new Schema({
	type: String,
	gold_I: Number,
	gold_II: Number,
	gold_III: Number,
	gold_IV: Number
});

// This is essentialy a private constructor
var model = mongoose.model('Bean', beans.beansSchema);

beans.new = function (type) {
	// if type isn't a key in types this is gonna be ugly.
	types = {
		"black-eyed": {
			"type": "blackeyed",
			"gold_I": 2,
			"gold_II": 4,
			"gold_III": 5,
			"gold_IV": 6
		},

	 "blue": {
			"type": "blue",
			"gold_I": 4,
			"gold_II": 6,
			"gold_III": 8,
			"gold_IV": 10
		},

		"chili" : {
			"type": "chili",
			"gold_I": 3,
			"gold_II": 6,
			"gold_III": 8,
			"gold_IV": 9
		},

		"cocoa" : {
			"type": "garden",
			"gold_I": 1000,
			"gold_II": 2,
			"gold_III": 3,
			"gold_IV": 4
		},

		"coffee" : {
			"type": "coffee",
			"gold_I": 4,
			"gold_II": 7,
			"gold_III": 10,
			"gold_IV": 12
		},

		"garden" : {
			"type": "garden",
			"gold_I": 1000,
			"gold_II": 2,
			"gold_III": 3,
			"gold_IV": 1000
		},

		"green" : {
			"type": "green",
			"gold_I": 3,
			"gold_II": 5,
			"gold_III": 6,
			"gold_IV": 7
		},

		"soy" : {
			"type": "soy",
			"gold_I": 2,
			"gold_II": 4,
			"gold_III": 6,
			"gold_IV": 7
		},

		"stink" : {
			"type": "stink",
			"gold_I": 3,
			"gold_II": 5,
			"gold_III": 7,
			"gold_IV": 8
		},

		"red" : {
			"type": "red",
			"gold_I": 2,
			"gold_II": 3,
			"gold_III": 4,
			"gold_IV": 5
		},

		"wax" : {
			"type": "wax",
			"gold_I": 4,
			"gold_II": 7,
			"gold_III": 9,
			"gold_IV": 11
		}
	};

	return new model(types[type]);
};

module.exports = beans;
