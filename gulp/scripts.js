'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', ['scripts-bower'], function() {
    return gulp.src(
            path.join(conf.paths.src, '/js/app.js')
        )
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/scripts/')))
        .pipe(browserSync.reload({ stream: true }))
        .pipe($.size())
});

gulp.task('scripts-bower', function() {
    return gulp.src([
    		// put out-sourced (like bower) scripts here
    		path.join(conf.paths.bower, '/jquery/dist/jquery.min.js')
    	])
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/libs/')))
        .pipe(browserSync.reload({ stream: true }))
        .pipe($.size())
})
