var assert = require("assert"),
  player_model = require("../model/player"),
  plot_model = require("../model/plot"),
  bean_model = require("../model/bean");

describe("Model: player", function() {
  describe(".create", function(){
    var player = player_model.create("player");
    it("should return a player with a name", function () {
      assert.equal(player.name, "player");
    });

    it("should return a player with a hand", function(){
      assert.equal(player.hand.length, 0);
    });

    it("should return a player with 2 plots", function(){
      assert.equal(player.plots.length, 2);
    });

    it("should return a player with 0 gold", function(){
      assert.equal(player.gold, 0);
    });
  });
});

describe("Model: plots", function(){
  describe("constructor", function(){
    var plot = new plot_model();
    it("should return a plot with no beans", function(){
      assert.equal(plot.beans.length, 0);
    });

  });
});
