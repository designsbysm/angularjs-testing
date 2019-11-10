const { dest, src } = require("gulp");
const { isDev, isProd } = require("./tools/environment");
const { paths } = require("./tools/paths");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const gulpif = require("gulp-if");
const pump = require("pump");
const stream = require("merge-stream")();
const terser = require("gulp-terser");

const isEmpty = body => !body || Object.keys(body).length === 0;

const initBuild = ({ css, icons, js, webfonts }) => {
  const buildVendor = () => {
    if (!isEmpty(js)) {
      stream.add(
        pump(
          [
            src(js, { sourcemaps: isDev() }),
            concat("vendor.min.js"),
            gulpif(isProd(), terser()),
            dest(paths.dist.client.js, { sourcemaps: "." }),
          ],
          err => {
            if (err) {
              log.error(err.message);
            }
          },
        ),
      );
    }

    if (!isEmpty(css)) {
      stream.add(
        pump(
          [
            src(css, { sourcemaps: isDev() }),
            concat("vendor.min.css"),
            cleanCSS({ compatibility: "ie8" }),
            dest(paths.dist.client.css, { sourcemaps: "." }),
          ],
          err => {
            if (err) {
              console.error(err.message);
            }
          },
        ),
      );
    }

    if (!isEmpty(icons)) {
      stream.add(
        pump([
          src(icons),
          dest(paths.dist.client.icons), 
        ], err => {
          if (err) {
            console.error(err.message);
          }
        }),
      );
    }

    if (!isEmpty(webfonts)) {
      stream.add(
        pump([
          src(webfonts),
          dest(paths.dist.client.webfonts), 
        ], err => {
          if (err) {
            console.error(err.message);
          }
        }),
      );
    }

    return stream.isEmpty() ? null : stream;
  };

  return buildVendor;
};

exports.init = initBuild;
