var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var process = require('child_process');

var config = {
	sass: {
		src: './sass/**/*.scss',
		dest: './dist/css'
	},
	css: {
		src: [
			'./node_modules/toastr/build/toastr.min.css',
			'./node_modules/font-awesome/css/font-awesome.min.css'
		],
		dest: './dist/css'
	},
	fonts: {
		src: './node_modules/font-awesome/fonts/*',
		dest: './dist/fonts'
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
	gulp.src(config.sass.src)
		//compile the sass files, logging any errors that occur
		.pipe(sass().on('error', sass.logError))
		//where the compiled css ends up
		.pipe(gulp.dest(config.sass.dest));
});

//vendor css
gulp.task('css', function(){
	return gulp.src(config.css.src)
		.pipe(gulp.dest(config.css.dest));
});

gulp.task('fonts', function(){
	return gulp.src(config.fonts.src)
		.pipe(gulp.dest(config.fonts.dest));
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

gulp.task('sass:watch', function(){
	gulp.watch(config.sass.src, ['sass']);
});