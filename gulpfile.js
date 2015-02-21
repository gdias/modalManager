var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require("vinyl-source-stream"),
	rename = require("gulp-rename"),
	watch = require('gulp-watch'),
	connect = require('gulp-connect'),
	watchify = require('watchify'),
	livereload = require('gulp-livereload'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  streamify = require('gulp-streamify'),
  sourcemaps = require('gulp-sourcemaps'),
  mochify = require('mochify');

gulp.task('server', function() {
  connect.server({
  	root : 'app',
  	port : 3330,
  	livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
  .pipe(connect.reload())
  .pipe(plumber());
});

gulp.task('browserify', function(){
  browserifyShare();
});

function browserifyShare() {
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  b = watchify(b);
  
  b.on('update', function(){
    bundleShare(b);
  });

  b.add('./src/main.js');
  bundleShare(b);
}

function bundleShare(b){
  b.bundle()
  .pipe(source('./script.js'))
  .pipe(streamify(sourcemaps.init()))
  .pipe(streamify(uglify()))
  .pipe(streamify(sourcemaps.write()))
  .pipe(gulp.dest('./app/js'))
  .pipe(livereload())
  .pipe(connect.reload());
}

gulp.task('test', function(){
  var a = mochify('./test/*.js', {
    reporter : 'spec',
    watch: true
  }).bundle();
});


gulp.task('watch', ['browserify','test'], function() {
	gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./src/*.js'], ['browserify', 'html']);
});


gulp.task('default', ["server", "watch"]);
