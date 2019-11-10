/* eslint-disable no-undef */

angular
  .module("UnitTestin")
  .controller("AppController", ($scope, iconService) => {
    $scope.vm = {
      adminIcon: null,
      adminTitle: null
    };

    $scope.someFunction = () =>
      console.info(
        "some function",
        $scope.vm,
        iconService.getIcon("admin", "admin")
      );
    $scope.someFunction();
  });
