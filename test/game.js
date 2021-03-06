var assert = require("assert");
var game_model = require('../model/game');
var mongoose = require('mongoose');

describe('game', function(){
  mongoose.connect('mongodb://localhost/mocha');
  var db = mongoose.connection;
  beforeEach(function(done){
    game_model.remove({}, done);
  });

  describe("#create",function(){
    var game = game_model.create("channel", "player");

    it('should have a channel', function(){
      assert.equal(game.channel, "channel");
    });
    it('should have a round counter', function(){
      assert.equal(game.round, 0);
    });
    it('should have a current player', function(){
      assert.equal(game.current_player, 0);
    });
    it('should have a deck', function(){
      // going to keep this short just make sure it's an array with the right
      // number of elements
      assert.equal(game.deck.length, 154);
    });
    it('should have a discard pile', function(){
      // this is kinda lame, I need "deep equality..."
      assert.equal(game.discard.length, 0);
    });
    it('should have a player with a name', function(){
      assert.equal(game.players[0].name, "player");
      assert.equal(game.players[0].hand.length, 0);
      assert.equal(game.players[0].plots.length, 2);
      assert.equal(game.players[0].plots[0].beans.length, 0);
      assert.equal(game.players[0].plots[1].beans.length, 0);
      assert.equal(game.players[0].gold, 0);
    });
    it('should not fail to validate and save', function(done){
      game.save(function(err){
        if (err) throw done(err);
        done();
      });
    });
  });

  describe('#strip', function(){
    var game = game_model.create("channel", "player");
    var strip = game.strip;
    it('should have a channel', function(){
      assert.equal(strip.channel, "channel");
    });
    it('should have a round', function(){
      assert.equal(strip.round, 0);
    });
    it('should have a current_player', function(){
      assert.equal(strip.current_player, 0);
    });
    it('should have a player with a name but no hand', function(){
      assert.equal(game.players[0].name, game.players[0].name);
      assert.equal(strip.players[0].name, "player");
      assert.ok(strip.players[0].hand === undefined);
      assert.equal(strip.players[0].plots.length, 2);
      assert.equal(strip.players[0].plots[0].beans.length, 0);
      assert.equal(strip.players[0].plots[1].beans.length, 0);
      assert.equal(strip.players[0].gold, 0);
      });

    it('#toString', function(){
      var string = "{channel: 'channel', round: 0, current_player: 0, players: [{name: 'player', plots: [{ beans: [] },{ beans: [] }], gold: 0}]}";
      assert.equal(strip.toString(), string);
    });
    it('should not have a deck', function(){
      assert.ok(strip.hand === undefined);
    });
    it('should not have a discard', function(){
      assert.ok(strip.hand === undefined);
    });
  });

  describe('#add_player', function(){
    var game = game_model.create("channel", "player");
    it('should have one player before adding a player', function(){
      assert.equal(game.players.length, 1);
    });
    it('should have two players after adding a player', function(){
      game.add_player("player2");
      assert.equal(game.players.length, 2);
      assert.equal(game.players[1].name, "player2");
      assert.equal(game.players[1].hand.length, 0);
      assert.equal(game.players[1].plots.length, 2);
      assert.equal(game.players[1].plots[0].beans.length, 0);
      assert.equal(game.players[1].plots[1].beans.length, 0);
      assert.equal(game.players[1].gold, 0);
    });
    it('should not fail to validate and save', function(done){
      assert.notEqual(game.players[0].name, game.players[1].name);
      game.save(function(err){
        if (err)  done(err);
        done();
      });
    });
    it('should fail to validate and save if the names conflict', function(done){
      game = game_model.create("channel", "player");
      game.add_player("player");
      assert.equal(game.players[0].name, game.players[1].name);
      game.save(function(err, game){
          if(err) done(); //failed to save
          else done(Error("game saved with two players of the same name"));
      });
    });
  });
});
