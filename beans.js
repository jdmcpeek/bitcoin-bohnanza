var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bohnanza');
var db = mongoose.connection;

var beansSchema = new mongoose.Schema({
	name: 'string',
	owner: 'string',
	one_gold: 'number',
	two_gold: 'number',
	three_gold: 'number',
	four_gold: 'number'
});

var Bean = new mongoose.model('Bean', beansSchema);





var beans = {};

beans.protobean = function(name, num1, num2, num3, num4, owner) {
	this.name = name;
	this.num1 = num1;
	this.num2 = num2;
	this.num3 = num3;
	this.num4 = num4;
	this.owner = (typeof(owner) === "undefined") ? "deck" : owner;
};

beans.coffee = function(card) {
	var card = new this.protobean("coffee bean", 4, 7, 10, 12);
	return card;
};


beans.wax = function(card) {
	var card = new this.protobean("wax bean", 4, 7, 9, 11);
	return card;
};

beans.blue = function(card) {
	var card = new this.protobean("blue bean", 4, 6, 8, 10);
	return card;
};

beans.chili = function(card) {
	var card = new this.protobean("chili bean", 3, 6, 8, 9);
	return card;
};

beans.stink = function(card) {
	var card = new this.protobean("stink bean", 3, 5, 7, 8);
	return card;
};

beans.green = function(card) {
	var card = new this.protobean("green bean", 3, 5, 6, 7);
	return card;
};

beans.soy = function(card) {
	var card = new this.protobean("soy bean", 2, 4, 6, 7);
	return card;
};

beans.blackeyed = function(card) {
	var card = new this.protobean("blackeyed bean", 2, 4, 5, 6);
	return card;
};

beans.red = function(card) {
	var card = new this.protobean("red bean", 2, 3, 4, 5);
	return card;
};

beans.garden = function(card) {
	var card = new this.protobean("garden bean", 1000, 2, 3, 1000);
	return card;
};

beans.cocoa = function(card) {
	var card = new this.protobean("cocoa bean", 1000, 2, 3, 4);
	return card;
};


module.exports = beans;
