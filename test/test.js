var assert = require("assert");
var game_model = require('../model/game');
var player_model = require('../model/player');
var mongoose = require('mongoose');

describe('game', function(){
  mongoose.connect('mongodb://localhost/mocha');
  var db = mongoose.connection;
  beforeEach(function(done){
    game_model.remove({}, done);
  });
  describe("#create",function(){
    //test all the fields.... ugh
    var game = game_model.create("channel", "name");
    it('should have a channel', function(){
      assert.equal(game.channel, "channel");
    });
    it('should have a player with a name', function(){
      assert.equal(game.players[0].name, "name");
    });
    it('should have a deck', function(){
    });
  });
});
