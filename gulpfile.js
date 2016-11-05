var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var server = require('live-server');

var config = {
	css: {
		src: './sass/**/*.scss',
		dest: './dist/css'
	},
	js: {
		src: './app/**/*.ts',
		dest: './dist/js'	
	},
	html: {
		src: './app/**/*.html'	
	},
	vendor: {
		css: {
			src: [
				'./node_modules/toastr/build/toastr.min.css',
				'./node_modules/font-awesome/css/font-awesome.min.css'
			],
			dest: './dist/vendor/css'
		},
		fonts: {
			src: './node_modules/font-awesome/fonts/*',
			dest: './dist/vendor/fonts'
		},
		js: {
			src: [
				'./node_modules/core-js/client/shim.min.js',
				'./node_modules/zone.js/dist/zone.js',
				'./node_modules/reflect-metadata/Reflect.js',
				'./node_modules/systemjs/dist/system.src.js',
				'./node_modules/jquery/dist/jquery.min.js',
				'./node_modules/toastr/build/toastr.min.js'
			],
			dest: './dist/vendor/js'
		}	
	}
};

function handleError(error){
	console.log(error.message);
	this.emit('end');
}

//compilation
gulp.task('styles', function(){
	gulp.src(config.css.src)
		.pipe(sass().on('error', handleError))
		.pipe(gulp.dest(config.css.dest));
});

gulp.task('scripts', function(){
	var project = ts.createProject('tsconfig.json');
	
	return gulp.src(config.js.src)
		.pipe(project())	
		.on('error', handleError)
		.pipe(gulp.dest(config.js.dest));
		
});

//vendor assets
gulp.task('css:move', function(){
	return gulp.src(config.vendor.css.src)
		.pipe(gulp.dest(config.vendor.css.dest));
});

gulp.task('fonts:move', function(){
	return gulp.src(config.vendor.fonts.src)
		.pipe(gulp.dest(config.vendor.fonts.dest));
});

gulp.task('js:move', function(){
	return gulp.src(config.vendor.js.src)
		.pipe(gulp.dest(config.vendor.js.dest));
});

gulp.task('move', ['css:move','js:move','fonts:move']);

//watch
gulp.task('styles:watch', ['styles'], function(){
	gulp.watch(config.css.src, ['styles']);
});

gulp.task('scripts:watch', ['scripts'], function(){
	gulp.watch(config.js.src, ['scripts']);
});

gulp.task('watch', ['styles:watch', 'scripts:watch']);

//environments
gulp.task('development', ['move', 'watch', 'server']);
gulp.task('production', ['move', 'styles', 'scripts', 'server']);

//server
gulp.task('server', function(){
	var params = {
		logLevel: 0,
		ignore: 'api',
		host: 'localhost'
	};
	
	server.start(params);
});

gulp.task('default', ['development']);