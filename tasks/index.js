const gulp = require('gulp');
const server = require('./server');
const html = require('./html');
const clean = require('./clean');
const styles = require('./styles');

module.exports.dev = gulp.series(
  clean,
  html,
  styles,
  server,
);

module.exports.build = gulp.series(
  clean,
  html,
  styles,
);