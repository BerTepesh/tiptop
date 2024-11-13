module.exports = {
	build: {
		static: 	'./public',
		html: 		'./public',
		styles: 	'./public/css/',
		scripts: 	'./public/js/',
		img: 			'./public/images/',
		icons: 		'./public/images/',
		fonts: 		'./public/fonts/'
	},
	src: {
		static: 	'./src/static/**/*.*',
		html: 		'./src/html/*.twig',
		sass: 		'./src/stylesheets/*.scss',
		scripts: 	'./src/javascripts/',
		img: 			'./src/images/**/*.{gif,png,jpg,svg,webp}',
		imgf: 		'./src/imagesf/**/*.{gif,png,jpg,svg,webp}',
		icons: 		'./src/icons/**/*.svg',
		fonts: 		'./src/fonts/**/*.*'
	},
	watch: {
		static: 	'./src/static/**/*.*',
		html: 		'./src/html/**/*.twig',
		styles: 	'./src/stylesheets/**/*.scss',
		scripts: 	'./src/javascripts/**/*.js',
		img: 			'./src/images/**/*.*',
		imgf: 		'./src/imagesf/**/*.*',
		icons: 		'./src/icons/**/*.*',
		fonts: 		'./src/fonts/**/*.*'
	},
};