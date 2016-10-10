angular.module('myApp')
.directive('myDir', function() {
  return {
    templateUrl: 'dirTmpl.html',
    restrict: 'E'
  }
})
