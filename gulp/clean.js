const del = require("del");
const { paths } = require("./tools/paths");

const clean = () => {
  return del([ `${paths.dist.root}/**/*` ]);
};

exports.run = clean;
