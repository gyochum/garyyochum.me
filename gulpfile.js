var gulp = require('gulp');
var sass = require('gulp-sass');
var typscript = require('gulp-typescript');

//sass
gulp.task('sass', function(){
	//specify source of sass files to compile
	gulp.src('./src/sass/**/*.scss')
		//compile the sass files, logging any errors that occur
		.pipe(sass().on('error', sass.logError))
		//where the compiled css ends up
		.pipe(gulp.dest('./src/assets/css'));
});

//typescript
gulp.task('typescript', function(){
	var project = typscript.createProject('./src/tsconfig.json');
	var result = project.src()
		.pipe(typscript(project));
		
		
	process.stdout.write(result);
	
	
	return result.js;
});
		