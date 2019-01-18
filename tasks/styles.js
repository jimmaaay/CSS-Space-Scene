
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');

// Compiles SCSS to css
const styles = function styles() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error',  sass.logError))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(sourcemaps.write('.'),{
      includeContent: true,
    })
    .pipe(gulp.dest('dist/styles'));
};

module.exports = styles;