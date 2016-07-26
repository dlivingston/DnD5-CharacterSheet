var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var source = 'src/';
var dest = 'dist/';
var  bootstrapDir =  {
	in: './bower_components/bootstrap/'
};

var css = {
	in: source + 'sass/**/*.scss',
	out: source + 'css/',
	watch: source + 'sass/**/*',
	sassOpts: {
		outputStyle: 'compact',
		includePaths: [bootstrapDir.in + 'scss']
	}
}

gulp.task('html', function(){
	gulp.src('src/**/*.html')
	.pipe(connect.reload());
});

gulp.task('sass', function () {
	return gulp.src(css.in)
	.pipe(sass(css.sassOpts))
	.pipe(gulp.dest(css.out));
});

gulp.task('connect', function() {
	connect.server({
		root: source,
		livereload: true
	});
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
