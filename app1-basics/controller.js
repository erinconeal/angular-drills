angular.module('myApp')
.controller('mainController', function($scope) {
  $scope.name = 'erin';

  $scope.changeName = function(name) {
    $scope.name = name;
    $scope.newName = '';
  }
})
