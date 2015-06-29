var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('watch', function() {
  gulp.watch('styles/less/*.less', ['less']);
});

gulp.task('less', function () {
  return gulp.src('./styles/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('./styles/css/'));
});

gulp.task('default', ['watch', 'less']);
