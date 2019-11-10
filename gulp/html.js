const { dest, src, watch } = require("gulp");
const { paths } = require("./tools/paths");
const changed = require("gulp-changed");
const htmlmin = require("gulp-htmlmin");
const pump = require("pump");

const compressHTML = callback => {
  pump(
    [
      src([ `${paths.src.client.root}/**/*.html` ]),
      changed(paths.dist.client.root),
      htmlmin({ collapseWhitespace: true, removeComments: true }),
      dest(paths.dist.client.root),
    ],
    err => {
      if (err) {
        console.error(err.message);
      }

      callback();
    },
  );
};

const watchHTML = callback => {
  watch([ `${paths.src.client.root}/**/*.html` ], compressHTML);
  callback();
};

exports.compress = compressHTML;
exports.watch = watchHTML;
