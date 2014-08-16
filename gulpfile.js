var gulp       = require('gulp');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var less       = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var path       = require('path');

var paths = {
  less: ['./less/**/*.less'],
  scripts: [
    './public/js/vendor/jquery-1.11.1.min.js',
    './public/fancybox/source/jquery.fancybox.pack.js',
    './public/js/main.js'
  ]
};

gulp.task('less', function () {
  gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .on('error', function (error) {
        console.log(error); // Don't do anything because I don't give a shit
    })
    .pipe(gulp.dest('./public/css'));
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
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.scritps, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'less', 'scripts']);
