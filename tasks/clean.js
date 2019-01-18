const del = require('del');

// Deletes files which will be remade later on in the build
module.exports = function clean(done) {
  del(['dist'])
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
    });
};