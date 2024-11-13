const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			imageminPngquant = require('imagemin-pngquant'),
			imagemin 			= require('gulp-imagemin');
			// webp 					= require('gulp-webp');
			
module.exports = function imagesf() {
	return gulp.src(paths.src.imgf)
		.pipe(plumber())
		.pipe(imagemin([
			imageminPngquant({
				speed: 1,
				quality: [0.35, 1] //lossy settings
			})
		]))
    // .pipe(webp({quality: 100}))
		.pipe(gulp.dest(paths.build.img))
}