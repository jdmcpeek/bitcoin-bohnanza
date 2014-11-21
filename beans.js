var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bohnanza');
var db = mongoose.connection;

var beans = {};

beans.beanSchema = Schema({
	type: String,
	owner: String,
	gold_I: Number,
	gold_II: Number,
	gold_III: Number,
	gold_IV: Number
});

beans.protobean = mongoose.model('Bean', beanSchema);

beans.coffee = {
	type: 'coffee',
	owner: 'deck',
	gold_I: 4,
	gold_II: 7,
	gold_III: 10,
	gold_IV: 12
};

beans.wax = {
	type: 'wax',
	owner: 'deck',
	gold_I: 4,
	gold_II: 7,
	gold_III: 9,
	gold_IV: 11
};

beans.blue = {
	type: 'blue',
	owner: 'deck',
	gold_I: 4,
	gold_II: 6,
	gold_III: 8,
	gold_IV: 10
};

beans.chili = {
	type: 'chili',
	owner: 'deck',
	gold_I: 3,
	gold_II: 6,
	gold_III: 8,
	gold_IV: 9
};

beans.stink = {
	type: 'stink',
	owner: 'deck',
	gold_I: 3,
	gold_II: 5,
	gold_III: 7,
	gold_IV: 8
};

beans.green = {
	type: 'green',
	owner: 'deck',
	gold_I: 3,
	gold_II: 5,
	gold_III: 6,
	gold_IV: 7
};

beans.soy = {
	type: 'soy',
	owner: 'deck',
	gold_I: 2,
	gold_II: 4,
	gold_III: 6,
	gold_IV: 7
};

beans.blackeyed = {
	type: 'blackeyed',
	owner: 'deck',
	gold_I: 2,
	gold_II: 4,
	gold_III: 5,
	gold_IV: 6
};

beans.red = {
	type: 'red',
	owner: 'deck',
	gold_I: 2,
	gold_II: 3,
	gold_III: 4,
	gold_IV: 5
};

beans.garden = {
	type: 'garden',
	owner: 'deck',
	gold_I: 1000,
	gold_II: 2,
	gold_III: 3,
	gold_IV: 1000
};

beans.cocoa = {
	type: 'garden',
	owner: 'deck',
	gold_I: 1000,
	gold_II: 2,
	gold_III: 3,
	gold_IV: 4
};

module.exports = beans;



/*
Deprecated, will be replaced by mongoose models and objects, supra.
*/
// beans.protobean = function(name, num1, num2, num3, num4, owner) {
// 	this.name = name;
// 	this.num1 = num1;
// 	this.num2 = num2;
// 	this.num3 = num3;
// 	this.num4 = num4;
// 	this.owner = (typeof(owner) === "undefined") ? "deck" : owner;
// };
//
// beans.coffee = function(card) {
// 	var card = new this.protobean("coffee bean", 4, 7, 10, 12);
// 	return card;
// };
//
//
// beans.wax = function(card) {
// 	var card = new this.protobean("wax bean", 4, 7, 9, 11);
// 	return card;
// };
//
// beans.blue = function(card) {
// 	var card = new this.protobean("blue bean", 4, 6, 8, 10);
// 	return card;
// };
//
// beans.chili = function(card) {
// 	var card = new this.protobean("chili bean", 3, 6, 8, 9);
// 	return card;
// };
//
// beans.stink = function(card) {
// 	var card = new this.protobean("stink bean", 3, 5, 7, 8);
// 	return card;
// };
//
// beans.green = function(card) {
// 	var card = new this.protobean("green bean", 3, 5, 6, 7);
// 	return card;
// };
//
// beans.soy = function(card) {
// 	var card = new this.protobean("soy bean", 2, 4, 6, 7);
// 	return card;
// };
//
// beans.blackeyed = function(card) {
// 	var card = new this.protobean("blackeyed bean", 2, 4, 5, 6);
// 	return card;
// };
//
// beans.red = function(card) {
// 	var card = new this.protobean("red bean", 2, 3, 4, 5);
// 	return card;
// };
//
// beans.garden = function(card) {
// 	var card = new this.protobean("garden bean", 1000, 2, 3, 1000);
// 	return card;
// };
//
// beans.cocoa = function(card) {
// 	var card = new this.protobean("cocoa bean", 1000, 2, 3, 4);
// 	return card;
// };
