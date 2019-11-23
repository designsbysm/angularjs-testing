describe("spinner directive", () => {
  let $scope;
  let Controller;

  beforeEach(() => {
    angular.mock.module("UnitTesting");
    angular.mock.inject((_$controller_, _$rootScope_) => {
      const $controller = _$controller_;
      const $rootScope = _$rootScope_;

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
