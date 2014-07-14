var gulp = require('gulp');

var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var less       = require('gulp-less');
var react      = require('gulp-react');
var sourcemaps = require('gulp-sourcemaps');
var path       = require('path');

var paths = {
  less: ['./less/**/*.less'],
  react: ['./public/js/**/*.jsx'],
  scripts: ['./public/js/vendor/react/react.js', './public/js/build/**/*.js']
};

gulp.task('less', function () {
  gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('react', function () {
  return gulp.src(paths.react)
    .pipe(react())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/build'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(concat('build.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write(sourcemaps.write('./maps')))
    .pipe(gulp.dest('./public/js'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.react, ['react']);
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.scritps, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'less', 'react', 'scripts']);
