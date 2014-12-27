'use strict';

/**
 * @ngdoc overview
 * @name weBOhnanzaApp
 * @description
 * # weBOhnanzaApp
 *
 * Main module of the application.
 */
angular
  .module('weBOhnanzaApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
