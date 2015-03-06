'use strict';
var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('clean', function() {
  return gulp.src('./dist', {read: false})
  .pipe(rimraf());
});

gulp.task('assets', function() {
  return gulp.src('./src/assets/*/*.*')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('bundle', function() {
  return gulp.src('./src/game.js', {read: false})
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('game.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minify', function() {
  return gulp.src('./src/*.*')
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('default', ['bundle', 'minify']);

gulp.task('build', ['clean', 'assets', 'bundle', 'minify']);
