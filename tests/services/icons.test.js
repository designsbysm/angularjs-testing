describe("icons service", () => {
  let iconService;

  beforeEach(() => {
    angular.mock.module("UnitTesting");
    angular.mock.inject(_iconService_ => {
      iconService = _iconService_;
    });

  });

  describe("should exist", () => {
    it("service", () => {
      expect(iconService)
        .toBeDefined();
    });

    it(".getIcon()", () => {
      expect(iconService.getIcon)
        .toBeDefined();
    });
  });
});
