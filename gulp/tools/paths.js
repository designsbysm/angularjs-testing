const dist = "build";
const distClient = `${dist}/client`;
const src = "src";
const srcClient = `${src}/client`;

exports.paths = {
  dist: {
    client: {
      css: `${distClient}/css`,
      icons: `${distClient}/css/icons`,
      img: `${distClient}/img`,
      js: `${distClient}/js`,
      root: distClient,
      webfonts: `${distClient}/webfonts`,
    },
    root: dist,
  },
  node: "./node_modules/",
  src: {
    client: {
      img: `${srcClient}/img`,
      js: `${srcClient}/js`,
      root: srcClient,
      styles: `${srcClient}/styles`,
    },
    root: src,
    server: {
      root: `${src}/server`,
    },
  },
  vendor: "./vendor/",
};
