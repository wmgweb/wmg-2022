"use strict";

// Set Vars
var config = {
	devSASS 	: '#dev/scss/',
	devJS 		: '#dev/js/',
	devBlocks 	: '#dev/blocks/',
	dist 		: 'dist/',
	distCSS 	: 'dist/css/',
	distJS 		: 'dist/js/'
}

// Load Plugins
const gulp 				= require('gulp');
const sass 				= require('gulp-sass')(require('sass'));
const globbing 			= require('gulp-css-globbing');
const terser     		= require('gulp-terser');
const concat			= require('gulp-concat');
const autoprefixer  	= require('gulp-autoprefixer');
const sourcemaps 		= require('gulp-sourcemaps');
const gulpHandlebars	= require('gulp-handlebars');
const wrap 				= require('gulp-wrap');
const declare 			= require('gulp-declare');
const rename 			= require('gulp-rename');

// Add Dependencies
function dependencies(done) {
    gulp.src(['node_modules/handlebars/dist/handlebars.js']).pipe(gulp.dest(config.devJS + '/vendor/'));
    gulp.src(['node_modules/slick-carousel/slick/slick.js']).pipe(gulp.dest(config.devJS + '/vendor/'));
    gulp.src(['node_modules/masonry-layout/dist/masonry.pkgd.js']).pipe(gulp.dest(config.devJS + '/vendor/'));
    done();
}


// Compile CSS
function css() {
	return gulp
		.src(config.devSASS + 'global.scss', config.devSASS + 'blocks.scss')
		.pipe(sourcemaps.init())
		.pipe(globbing({
			extensions: ['.scss']
		}))
    	.pipe(sass({
	      	outputStyle: 'compressed'
	  	}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.distCSS));
};


// Compile JS
function js() {
	return gulp
		.src([config.devJS + 'vendor/**/*.js', config.devJS + 'block-output.js'])
		.pipe(concat('main.js'))
	    .pipe(gulp.dest(config.distJS));
};

// Compile Handlebars Templates
function handlebarsTemplates() {
	return gulp
		.src(config.devBlocks + '*.hbs')
	    .pipe(gulpHandlebars())
	    .pipe(wrap('Handlebars.template(<%= contents %>)'))
	    .pipe(declare({
	      namespace: 'WMG.blocks',
	      noRedeclare: true, // Avoid duplicate declarations
	    }))
	    .pipe(concat('handlebars-blocks.js'))
	    .pipe(gulp.dest(config.distJS));
}

// Compile all CSS into one file
function cssCombine() {
	return gulp
		.src(config.devSASS + 'main.scss')
		.pipe(globbing({
			extensions: ['.scss']
		}))
	    .pipe(sass({
	        outputStyle: 'compressed'
	    }).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(config.dist));
};

// Compile all JS into one file
function jsCombine() {
	return gulp
		.src([config.distJS + 'main.js', config.distJS + 'handlebars-blocks.js'])
		.pipe(concat('main.js'))
        .pipe(gulp.dest(config.dist));
}


// Watch Files 
function watchFiles() {
	gulp.watch(config.devBlocks + '**/*.hbs', gulp.series(handlebarsTemplates, jsCombine));
	gulp.watch(config.devJS + '**/*.js', gulp.series(js, jsCombine));
	gulp.watch(config.devSASS + '**/*.scss', gulp.series(css, cssCombine));
}

const watch = gulp.series(watchFiles);
const dep 	= gulp.parallel(dependencies);
const build = gulp.parallel(dependencies, css, cssCombine, js, handlebarsTemplates, jsCombine);

// Export Tasks
exports.css = css;
exports.cssCombine = cssCombine;
exports.js = js;
exports.jsCombine = jsCombine;
exports.handlebars = handlebarsTemplates;
exports.watch = watch;
exports.dep = dep;
exports.build = build;
exports.default = watch;