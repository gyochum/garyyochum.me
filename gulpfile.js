var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var process = require('child_process');

var config = {
	sass: {
		src: './sass/**/*.scss',
		dest: './dist/css'
	},
	typescript: {
		src: './app/**/*.ts'	
	},
	js: {
		src: './app/**/*.js',
		dest: './dist/js'
	}	
};

//sass
gulp.task('sass', function(){
	//specify source of sass files to compile
	gulp.src('./src/sass/**/*.scss')
		//compile the sass files, logging any errors that occur
		.pipe(sass().on('error', sass.logError))
		//where the compiled css ends up
		.pipe(gulp.dest('./src/assets/css'));
});

//mongodb start
gulp.task('mongodb-start', function(){
	process.exec('start mongod --dbpath ./data', function(error, stdout, stderr){
		console.log(stdout);
	});
});

//typescript
gulp.task('ts:compile', function(){
	var project = ts.createProject('tsconfig.json');
	
	return gulp.src(config.typescript.src)
		.pipe(ts(project));
});
		