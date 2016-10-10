angular.module('myApp')
.directive('myDir', function() {
  return {
    template: '<form name="form">Username: <input type="text" />Password: <input type="text" /><button type="submit" ng-click="showAlert()">Submit</button></form>'
  }
})
