describe("spinner service", () => {
  let spinnerService;

  beforeEach(() => {
    angular.mock.module("UnitTesting");
    angular.mock.inject(_spinnerService_ => {
      spinnerService = _spinnerService_;
    });
  });

  describe("should exist", () => {
    it("service", () => {
      expect(spinnerService)
        .toBeDefined();
    });

    it(".getShow()", () => {
      expect(spinnerService.getShow)
        .toBeDefined();
    });

    it(".getText()", () => {
      expect(spinnerService.getText)
        .toBeDefined();
    });

    it(".start()", () => {
      expect(spinnerService.start)
        .toBeDefined();
    });

    it(".stop()", () => {
      expect(spinnerService.stop)
        .toBeDefined();
    });

    it(".text()", () => {
      expect(spinnerService.text)
        .toBeDefined();
    });
  });
});
