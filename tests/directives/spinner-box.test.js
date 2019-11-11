describe("spinner directive", () => {
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
      Controller = $controller("spinnerBoxController", { $scope });
    });
  });
  
  describe("should exist", () => {
    it("controller", () => {
      expect(Controller)
        .toBeDefined();
    });

    it(".spinnerTitle()", () => {
      expect($scope.spinnerTitle)
        .toBeDefined();
    });

    it(".spinnerShow()", () => {
      expect($scope.spinnerShow)
        .toBeDefined();
    });
  });
});
