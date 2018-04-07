const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
	browserSync.init({
		proxy: "http://localhost:3000",
		browser: "chrome"
	})
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('./public/bundle.js', browserSync.reload);
	gulp.watch('./src/components/*.css', browserSync.reload);
});
