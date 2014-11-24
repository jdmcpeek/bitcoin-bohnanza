var mongoose = require('mongoose');
var beans = {};
var Schema = mongoose.Schema;

beans.beans_schema = new Schema({
	//we really need only 1 id per type...
	_id: String,
	gold_I: Number,
	gold_II: Number,
	gold_III: Number,
	gold_IV: Number
});

// This is essentialy a private constructor
var model = mongoose.model('Bean', beans.beans_schema);

beans.new = function (type) {
	// if type isn't a key in types this is gonna be ugly.
	types = {
		"black-eyed": {
			"_id": "black-eyed",
			"gold_I": 2,
			"gold_II": 4,
			"gold_III": 5,
			"gold_IV": 6
		},

	 "blue": {
			"_id": "blue",
			"gold_I": 4,
			"gold_II": 6,
			"gold_III": 8,
			"gold_IV": 10
		},

		"chili" : {
			"_id": "chili",
			"gold_I": 3,
			"gold_II": 6,
			"gold_III": 8,
			"gold_IV": 9
		},

		"cocoa" : {
			"_id": "garden",
			"gold_I": 1000,
			"gold_II": 2,
			"gold_III": 3,
			"gold_IV": 4
		},

		"coffee" : {
			"_id": "coffee",
			"gold_I": 4,
			"gold_II": 7,
			"gold_III": 10,
			"gold_IV": 12
		},

		"garden" : {
			"_id": "garden",
			"gold_I": 1000,
			"gold_II": 2,
			"gold_III": 3,
			"gold_IV": 1000
		},

		"green" : {
			"_id": "green",
			"gold_I": 3,
			"gold_II": 5,
			"gold_III": 6,
			"gold_IV": 7
		},

		"soy" : {
			"_id": "soy",
			"gold_I": 2,
			"gold_II": 4,
			"gold_III": 6,
			"gold_IV": 7
		},

		"stink" : {
			"_id": "stink",
			"gold_I": 3,
			"gold_II": 5,
			"gold_III": 7,
			"gold_IV": 8
		},

		"red" : {
			"_id": "red",
			"gold_I": 2,
			"gold_II": 3,
			"gold_III": 4,
			"gold_IV": 5
		},

		"wax" : {
			"_id": "wax",
			"gold_I": 4,
			"gold_II": 7,
			"gold_III": 9,
			"gold_IV": 11
		}
	};

	return new model(types[type]);
};

module.exports = beans;
