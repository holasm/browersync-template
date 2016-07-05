var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
      port: 3000,
      server: './'
  });

  gulp.watch(
  	[
  		'./styles/**/*.scss',
  		'./*.html'
  	]
  )
  .on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync'])