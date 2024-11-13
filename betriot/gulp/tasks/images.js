const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			imagemin 			= require('gulp-imagemin'),
			webp 					= require('gulp-webp');
			
module.exports = function images() {
	return gulp.src(paths.src.img)
		.pipe(plumber())
		.pipe(imagemin())
    .pipe(webp())
		.pipe(gulp.dest(paths.build.img))
}