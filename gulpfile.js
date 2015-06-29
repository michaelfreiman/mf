var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('webserver', function() {
   gulp.src('./')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: false,
      directoryListing: true,
      path: '/',
      open: true
    }));
});
