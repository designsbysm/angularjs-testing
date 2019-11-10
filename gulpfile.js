const { series, parallel } = require("gulp");
const { paths } = require("./gulp/tools/paths");
const bulk = require("bulk-require");
const tasks = bulk(__dirname, [ "./gulp/**/*.js" ]).gulp;

const filesJS = [
  paths.node + "jquery/dist/jquery.js",
  paths.node + "angular/angular.js",
];

const vendorBuild = tasks.vendor.init({
  js: filesJS,
});

exports.clean = tasks.clean.run;

exports.build = series(
  this.clean,
  parallel(tasks.client.build, tasks.html.compress, tasks.server.build, vendorBuild),
);

exports.server = series(tasks.server.build, tasks.server.watch, tasks.run.node);

exports.default = series(this.build, parallel(tasks.client.watch, tasks.html.watch, tasks.server.watch), tasks.run.web);
