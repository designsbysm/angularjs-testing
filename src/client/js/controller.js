angular
  .module("UnitTesting")
  .controller("AppController", function ($scope) {
    $scope.someFunction = () => { };
    $scope.someFunction();
  });
