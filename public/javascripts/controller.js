var gameApp = angular.module('game', [])
.controller('gameController', function($scope) {
  $scope.hello = "hi Mr. Developer";
});

// do I need to export this?
// module.exports = gameApp;
