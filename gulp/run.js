require("dotenv")
  .config();
const { series } = require("gulp");
const { paths } = require("./tools/paths");
const browserSync = require("browser-sync");
const nodemon = require("gulp-nodemon");

const webServer = callback => {
  const options = {
    files: [ `${paths.dist.root}/**/*` ],
    notify: false,
    port: process.env.CLIENT_PORT,
    proxy: `http://localhost:${process.env.SERVER_PORT}/`,
  };

  setTimeout(() => {
    browserSync(options);
    callback();
  }, 1000);
};

const nodeServer = callback => {
  let called = false;
  const options = {
    exec: "node",
    ext: "js",
    ignore: [ paths.dist.client.root ],
    script: `${paths.dist.root}/server.js`,
    watch: [ paths.dist.root ],
  };

  nodemon(options)
    .on("start", () => {
      if (!called) {
        called = true;
        callback();
      }
    });
};

exports.web = series(nodeServer, webServer);
exports.node = nodeServer;
