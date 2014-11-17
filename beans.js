module.exports = {
	function Bean(name, total, num1, num2, num3, num4, owner="deck") {
		this.name = name;
		this.total = total;
		this.num1 = num1;
		this.num2 = num2;
		this.num3 = num3;
		this.num4 = num4;
		this.owner = owner
	};

	var coffee = new Bean("coffee bean", 24, 4, 7, 10, 12);
	var wax = new Bean("wax bean", 22, 4, 7, 9, 11);
	var blue = new Bean("blue bean", 20, 4, 6, 8, 10);
	var chili = new Bean("chili bean", 18, 3, 6, 8, 9);
	var stink = new Bean("stink bean", 16, 3, 5, 7, 8);
	var green = new Bean("green bean", 14, 3, 5, 6, 7);
	var soy = new Bean("soy bean", 12, 2, 4, 6, 7);
	var blackeyed = new Bean("blackeyed bean", 10, 2, 4, 5, 6);
	var red = new Bean("red bean", 8, 2, 3, 4, 5);
	var garden = new Bean("garden bean", 1000, 2, 3, 1000);
	var cocoa = new Bean("cocoa bean", 1000, 2, 3, 4);







}