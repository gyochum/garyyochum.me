var gulp = require('gulp'),
		tsc = require('gulp-typescript'),
		inject = require('gulp-inject'),		
		sourcemaps = require('gulp-sourcemaps'),
		tslint = require('gulp-tslint'),
		del = require('del');

var gulpConfig = {
	
	//default base folders
	source: './src/',
	sourceApp: './src/app/',

	/*typescript************************/
	tsOutputPath: './src/assets/js',
	allJavaScript: ['./src/assets/js/**/*.js'],
	allTypeScript: './src/app/**/*.ts',

	typings: './src/definitions/',
	libraryTypeScriptDefinitions: './src/definitions/**/*.ts'
	
}		
		
var project = tsc.createProject({
		target: 'ES5',
		declaration: false,
		sourcemaps: true
});		

//tasks
gulp.task('compile-ts', function(){
	var source = [gulpConfig.allTypeScript, gulpConfig.libraryTypeScriptDefinitions]; //path to angular app ts files, ts definition files
	var result = gulp.src(source)
									.pipe(sourcemaps.init())
									.pipe(tsc(project));
	
console.log(gulpConfig.tsOutputPath);	
	result.dts.pipe(gulp.dest(gulpConfig.tsOutputPath));
	
	return result.js.pipe(sourcemaps.write('.'))
									.pipe(gulp.dest(gulpConfig.tsOutputPath));
});

gulp.task('watch', function(){
		gulp.watch([gulpConfig.allTypeScript], ['compile-ts']);
});

gulp.task('default', ['compile-ts']);
