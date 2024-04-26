angular.module('contactApp', [])
.controller('ContactController', function($scope) {
  $scope.submitForm = function() {
    if ($scope.name && $scope.email && $scope.message) {
      $scope.successMessage = 'Your message has been sent successfully!';
      $scope.errorMessage = '';
    } else {
      $scope.errorMessage = 'Please fill out all fields.';
      $scope.successMessage = '';
    }
  };
});