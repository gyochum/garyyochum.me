var gulp = require('gulp'),
		tsc = require('gulp-typescript'),
		inject = require('gulp-inject'),
		config = require('./gulpfile.config'),
		sourcemaps = require('gulp-sourcemaps'),
		tslint = require('gulp-tslint'),
		del = require('del');
		
var cfgFile = new config();

//tasks
gulp.task('compile-ts', function(){
	
	
});

gulp.task('watch', function(){
		gulp.watch([cfgFile.allTypeScript], ['compile-ts']);
});

gulp.task('default', ['compile-ts']);
