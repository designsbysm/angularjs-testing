const { SpecReporter } = require("jasmine-spec-reporter");

require("dotenv")
  .config();

exports.config = {
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: [
        "--headless",
        "--disable-gpu",
        "--window-size=1280x900",
      ],
    },
  },
  framework: "jasmine",
  onPrepare() {
    jasmine.getEnv()
      .addReporter(new SpecReporter());
  },
  suites: {
    full: "./tests/e2e/**/*.js",
  },
};
