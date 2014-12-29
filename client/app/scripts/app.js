'use strict';

/**
 * @ngdoc overview
 * @name weBohnanzaApp
 * @description
 * # weBohnanzaApp
 *
 * Main module of the application.
 */
angular
  .module('weBohnanzaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newgame', {
        templateUrl: 'views/newgame.html',
        controller: 'newGameCtrl'
      })
      .when('/play/:channel', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
