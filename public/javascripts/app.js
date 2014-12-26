angular.module('bohnanza', [
  'bohnanza.controllers',
  'bohnanza.services',
  'bohnanza.directives'
]).
config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'index.jade',
      controller: 'mainPageCtrl'
    }).
    when('/play/:channel', {
      templateUrl: 'play.jade'
    }).
    otherwise({
      redirectTo: '/'
    });
});
