const { dest, src, watch } = require("gulp");
const { isDev, isProd } = require("./tools/environment");
const { paths } = require("./tools/paths");
const config = require("./ts-ng.json");
const gulpif = require("gulp-if");
const ngAnnotate = require("gulp-ng-annotate");
const pump = require("pump");
const terser = require("gulp-terser");
const ts = require("gulp-typescript");
const tsProject = ts.createProject(config);

const buildClient = callback => {
  pump(
    [
      src([
        `${paths.src.client.js}/module.js`,
        `${paths.src.client.js}/**/*.js`,
        "!/**/~*", 
      ], {
        sourcemaps: isDev(),
      }),
      tsProject(),
      ngAnnotate(),
      gulpif(isProd(), terser()),
      dest(paths.dist.client.js, {
        sourcemaps: ".",
      }),
    ],
    err => {
      if (err) {
        console.error(err.message);
      }

      callback();
    },
  );
};

const watchClient = callback => {
  watch([ `${paths.src.client.js}/**/*.js` ], buildClient);
  callback();
};

exports.build = buildClient;
exports.watch = watchClient;
