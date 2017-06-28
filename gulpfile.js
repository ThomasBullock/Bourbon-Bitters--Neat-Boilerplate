'use strict'

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	del = require('del'),
	babel = require("gulp-babel"),
	cleanCSS = require('gulp-clean-css'),
	htmlreplace = require('gulp-html-replace');		
	

var jsPaths = [
	// 'js/polyfills.js'
  // 'node_modules/jquery/dist/jquery.js',
  // 'js/smooth-scroll.js',
  // 'js/plugins.js',  
  'js/main.js'
];

gulp.task('clean', function(cb) {
    del(['js/**'], cb);
});

gulp.task("concatScripts", function(){
		return gulp.src(jsPaths)
		.pipe(maps.init())
		.pipe(concat('app.js'))
		.pipe(maps.write('./'))		
		.pipe(gulp.dest('js'));
});

gulp.task("transpile", ["concatScripts"], function () {
	  return gulp.src("js/app.js")
	    .pipe(babel())
	    .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ["transpile"], function(){
	return gulp.src("js/app.js")
		.pipe(uglify().on('error', function(e){
		            console.log(e);
		         }))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task("compileSass", function(){
	return gulp.src("src/sass/styles.scss")
	.pipe(maps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'));
});

gulp.task("minifyCss", ["compileSass"], function(){
	return gulp.src("css/styles.css")
	    .pipe(cleanCSS({compatibility: 'ie8'}))
	    .pipe(rename('styles.min.css'))
	    .pipe(gulp.dest('dist/css'));	
});

gulp.task('watchFiles', function() {
	gulp.watch('src/sass/**/*.scss', ['compileSass']);
	gulp.watch('src/javascript/main.js', ['concatScripts'])
});

gulp.task('htmlUpdate', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
        'css': 'styles.min.css',
        'js': 'js/app.min.js'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ["minifyScripts", "minifyCss", "htmlUpdate"], function(){
	console.log("Build has been created in /dist");
	return gulp.src(["js/app.min.js", "img/**", "fonts/**"] , { base: "./"})
			.pipe(gulp.dest('dist'));
});



