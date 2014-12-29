'use strict';

/**
 * @ngdoc function
 * @name weBohnanzaApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the weBohnanzaApp
 */
angular.module('weBohnanzaApp')
  .controller('PlayCtrl', function ($scope, $http, $location) {
    // database, url, page attributes will all be syncopated.

    /**
     * TODO What must be done on full page reload?
     - check to see if the game associated with the url actually exists. If not, redirect.
     - if the game does exist, access the database and populate the $scope with its specific properties
     - who handles the first step after that? The server does, through a get request.
          There will be a route for /play/:channel on the server which will handle accessing the db
          and loading the controller. Controller contents might all lie within a .success callback, like so:

          var request = $http.get('/play/$location');
          request.success = function(data){
            $scope.gameObject = data.game...
            $scope.gameFunctions = function(){}...
          }
          or something like that.
          Actually, the only data needed in the success block is $scope.gameObject = data.game...
          once defined, we can work with the game object outside of the block.

      - add a 'waiting for load' animation... loading the game object will probably take longer than loading the frontend stuff.

     */

     $scope.hello = 'hello world';

     var request = $http.get($location.path());
     request.success(function(data){
       console.log(data);
     });



  });
