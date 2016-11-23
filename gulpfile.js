var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('./development/styles/main.sass')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1'],
    cascade: false
  }))
  .pipe(gulp.dest('./dist'))
})

gulp.task('jade', function() {
  return gulp.src('./development/templates/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'))
})


gulp.task('watch', function() {
  gulp.watch('./development/styles/*.sass', ['styles']);
  gulp.watch('./development/templates/*.jade', ['jade']);
})

gulp.task('default', ['styles', 'jade', 'watch']);