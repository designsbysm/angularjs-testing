describe("Testing App", () => {
  beforeAll(() => {
    browser.get("http://localhost:3000/");
  });

  it("should have a title", () => {
    expect(browser.getTitle())
      .toEqual("AngularJS Testing");
  });
});
