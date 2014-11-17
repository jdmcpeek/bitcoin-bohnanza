var beans = {};

beans.protobean = function(name, total, num1, num2, num3, num4, owner) {
	this.name = name;
	this.total = total;
	this.num1 = num1;
	this.num2 = num2;
	this.num3 = num3;
	this.num4 = num4;
	this.owner = (typeof(owner) === "undefined") ? "deck" : owner;
};

beans.coffee = function(card) {
	var card = new this.protobean("coffee bean", 24, 4, 7, 10, 12);
	return card;
};

console.log(beans.coffee("coffee1"));


beans.wax = function(card) {
	var card = new this.protobean("wax bean", 22, 4, 7, 9, 11);
	return card;
}

beans.blue = function(card) {
	var card = new this.protobean("blue bean", 20, 4, 6, 8, 10);
	return card;
}

beans.chili = function(card) {
	var card = new this.protobean("chili bean", 18, 3, 6, 8, 9);
	return card;
}

beans.stink = function(card) {
	var card = new this.protobean("stink bean", 16, 3, 5, 7, 8);
	return card;
}

beans.green = function(card) {
	var card = new this.protobean("green bean", 14, 3, 5, 6, 7);
	return card;
}

beans.soy = function(card) {
	var card = new this.protobean("soy bean", 12, 2, 4, 6, 7);
	return card;
}

beans.blackeyed = function(card) {
	var card = new this.protobean("blackeyed bean", 10, 2, 4, 5, 6);
	return card;
}

beans.red = function(card) {
	var card = new this.protobean("red bean", 8, 2, 3, 4, 5);
}

beans.garden = function(card) {
	var card = new this.protobean("garden bean", 1000, 2, 3, 1000);
	return card;
}

beans.cocoa = function(card) {
	var card = new this.protobean("cocoa bean", 1000, 2, 3, 4);
	return card;
}

console.log(beans.cocoa("what"));

	

	// function Deck()

module.exports = beans;



