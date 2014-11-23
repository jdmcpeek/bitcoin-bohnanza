var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bohnanza');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('opened db successfully');
	var Schema = mongoose.Schema;






});





var beans = {};

beans.beanSchema = new Schema({
	type: String,
	owner: String,
	gold_I: Number,
	gold_II: Number,
	gold_III: Number,
	gold_IV: Number
});

beans.protobean = mongoose.model('Bean', beans.beanSchema);


beans.coffee = {
	"type": "coffee",
	"owner": "deck",
	"gold_I": 4,
	"gold_II": 7,
	"gold_III": 10,
	"gold_IV": 12
};

var err = "failed to save";
var coffee = new beans.protobean(beans.coffee);
coffee.save(function (err, coffee) {
	if (err) return console.error(err);
	console.log(coffee._id());
});

console.log("test");

// for (var i; i < 5; i++) {
// 	new beans.protobean(beans.coffee);
// }
// console.log(coffee);

beans.wax = {
	"type": "wax",
	"owner": "deck",
	"gold_I": 4,
	"gold_II": 7,
	"gold_III": 9,
	"gold_IV": 11
};

beans.blue = {
	"type": "blue",
	"owner": "deck",
	"gold_I": 4,
	"gold_II": 6,
	"gold_III": 8,
	"gold_IV": 10
};

beans.chili = {
	"type": "chili",
	"owner": "deck",
	"gold_I": 3,
	"gold_II": 6,
	"gold_III": 8,
	"gold_IV": 9
};

beans.stink = {
	"type": "stink",
	"owner": "deck",
	"gold_I": 3,
	"gold_II": 5,
	"gold_III": 7,
	"gold_IV": 8
};

beans.green = {
	"type": "green",
	"owner": "deck",
	"gold_I": 3,
	"gold_II": 5,
	"gold_III": 6,
	"gold_IV": 7
};

beans.soy = {
	"type": "soy",
	"owner": "deck",
	"gold_I": 2,
	"gold_II": 4,
	"gold_III": 6,
	"gold_IV": 7
};

beans.blackeyed = {
	"type": "blackeyed",
	"owner": "deck",
	"gold_I": 2,
	"gold_II": 4,
	"gold_III": 5,
	"gold_IV": 6
};

beans.red = {
	"type": "red",
	"owner": "deck",
	"gold_I": 2,
	"gold_II": 3,
	"gold_III": 4,
	"gold_IV": 5
};

beans.garden = {
	"type": "garden",
	"owner": "deck",
	"gold_I": 1000,
	"gold_II": 2,
	"gold_III": 3,
	"gold_IV": 1000
};

beans.cocoa = {
	"type": "garden",
	"owner": "deck",
	"gold_I": 1000,
	"gold_II": 2,
	"gold_III": 3,
	"gold_IV": 4
};

module.exports = beans;
