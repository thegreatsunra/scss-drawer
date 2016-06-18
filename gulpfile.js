var gulp   = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    del = require('del');

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass({
      includePaths: ['bower_components']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./.tmp/css'));
});

gulp.task('serve', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: ['.tmp', 'public', 'bower_components']
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['serve', 'watch']);

gulp.task('clean', function() {
  return del.sync('dist');
})

gulp.task('copy', ['clean'], function() {
  gulp.src(['.tmp/**/*', 'public/**/*'])
  .pipe(gulp.dest('dist'));
  gulp.src(['bower_components/font-awesome/fonts/*'])
  .pipe(gulp.dest('dist/font-awesome/fonts'));
});

gulp.task('dist', ['clean', 'copy']);
