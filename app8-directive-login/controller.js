angular.module('myApp')
.controller('mainCtrl', function($scope) {
  $scope.showAlert = function() {
    alert('Login successful')
  }
})
