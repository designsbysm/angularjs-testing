const { dest, src, watch } = require("gulp");
const { isDev } = require("./tools/environment");
const { paths } = require("./tools/paths");
const changed = require("gulp-changed");
const config = require("./ts-server.json");
const pump = require("pump");
const ts = require("gulp-typescript");
const tsProject = ts.createProject(config);

const buildServer = callback => {
  pump(
    [
      src([
        `${paths.src.server.root}/**/*.js`,
        "!/**/~*", 
      ], {
        sourcemaps: isDev(),
      }),
      changed(paths.dist.root, { extension: ".js" }),
      tsProject(),
      dest(paths.dist.root, { sourcemaps: "." }),
    ],
    err => {
      if (err) {
        console.error(err.message);
      }

      callback();
    },
  );
};

const watchServer = callback => {
  watch([ `${paths.src.server.root}/**/*.js` ], buildServer);
  callback();
};

exports.build = buildServer;
exports.watch = watchServer;
