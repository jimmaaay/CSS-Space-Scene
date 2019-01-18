const copy = require('copy');


module.exports = function html(done) {
  copy('./src/*.html', './dist', done);
}