'use strict';

/**
 * @ngdoc function
 * @name weBohnanzaApp.controller:newGameCtrl
 * @description
 * # newGameCtrl
 * Controller of the weBohnanzaApp
 */
angular.module('weBohnanzaApp')
  .controller('newGameCtrl', function ($scope, $http, $window) {
    var newGame = $scope.newGame = {};

    newGame.createGame = function(){
      console.log(newGame);

      var request = $http.post('/newgame', newGame);

      request.success(function (data) {
        console.log(data.msg);
        // redirect to the /play page on success
        $window.location = '/#/play/' + newGame.gameName; // TODO: create a template for all urls matching this pattern
      });

      request.error(function (data) {
        console.log(data.msg);
        console.log('failure to reach success block');
      });

    };

  });
