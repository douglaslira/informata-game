var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins         = gulpLoadPlugins();

gulp.task('copy', function() {
    gulp.src(['assets/images/**/*']).pipe(gulp.dest('build/images'));
});

gulp.task('usemin', function() {
    gulp.src('index.html').pipe(plugins.usemin({
        js: [plugins.uglify()]
    })).pipe(gulp.dest('build'));
});

gulp.task('default', ['copy', 'usemin']);