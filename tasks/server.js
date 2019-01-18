const gulp = require('gulp');
const Browser = require('browser-sync');
const styles = require('./styles');
const html = require('./html');

module.exports = function server() {

  const browser = Browser.create();
  const reload = browser.reload;

  browser.init({
    server: 'dist',
    ghostMode: false,
  });


  gulp.watch('src/*.html').on('all', gulp.series(html, reload));
  gulp.watch('src/styles/**/*').on('all', gulp.series(styles, reload));
}