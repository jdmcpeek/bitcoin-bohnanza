var assert = require("assert");
var game_model = require("../model/game");
var mongoose = require("mongoose");
var gameController = require("../public/javascripts/controller.js");

/*
  TODO
  - inject angular dependencies into these test cases. Must include controller.js from '/public/javascripts'
  - angular is not defined in /public/javascripts/controller.js. Find some way to inject that dependency as well.
*/

describe("controller", function(){

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('gameController', {$scope: scope});
  }));

  describe("#load", function(){

    it("should connect to a web socket and emit a 'ready' event with the channel name on load", function(){

    });

    it("should be associated with a particular channel", function(){

    });

    it("should define the $scope", function(){

    });

  });

  // Our controller will allow the player making changes to see immediate effects on the screen;
  // the controller will update immediately upon DOM events;
  // the only lag will happen for other players, and still they'll receive all updates at once,
  // so it will be unnoticeable.
  describe("#update", function(){

    it("should reflect both the database and the DOM at all times, exluding exceptions", function(){

    });

    describe("#send", function(){

      it("should write and emit queries based on DOM events", function(){

      });

    });

    describe("#receive", function(){
      // add functions to $scope to response to directives... these functions should io.emit to the server.
      it("should update $scope upon ng Directive events, then io.emit these changes to the server", function(){

      });

      it("should update upon receiving an update event from the server", function(){

      });

      it("should never change channels, even when receiving an update event with a new channel name", function(){

      });

    });

  });

});
