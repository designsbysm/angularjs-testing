describe("app controller", () => {
  let $controller;
  let $rootScope;
  let $scope;
  let Controller;

  beforeEach(() => {
    angular.mock.module("UnitTesting");
    angular.mock.inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;

      $scope = $rootScope.$new();
      Controller = $controller("AppController", { $scope });
    });
  });

  describe("should exist", () => {
    it("controller", () => {
      expect(Controller)
        .toBeDefined();
    });

    it(".someFunction()", () => {
      expect($scope.someFunction)
        .toBeDefined();
    });
  });
});
