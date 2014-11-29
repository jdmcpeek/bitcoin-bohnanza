var example = require('../../game_example.js');

'use strict';

var game = angular.module('game', []);

game.controller('gameController', function($scope) {
  $scope.example = example;


});
