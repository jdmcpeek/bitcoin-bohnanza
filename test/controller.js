var assert = require("assert");
var game_model = require("../model/game");
var mongoose = require("mongoose");
var gameController = require("../public/javascripts/controller.js");


describe("controller", function(){

  describe("#load", function(){
    it("should connect to a web socket on load", function(){

    });

    it("should emit a 'ready' event with the channel name on load", function(){

    });

    it("should be associated with a particular channel", function(){

    });

    it("should define the $scope", function(){

    });

  });


  describe("#update", function(){

    it("should reflect both the database and the DOM at all times, exluding exceptions", function(){

    });

    describe("#send", function(){

      it("should write and emit queries based on DOM events", function(){

      });

    });

    describe("#receive", function(){

      it("should update upon receiving an update event", function(){

      });

      it("should never change channels, even when receiving an update event with a new channel name", function(){

      });

    });

  });

});
