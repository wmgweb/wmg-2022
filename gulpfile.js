"use strict";

// Load Plugins
const gulp 			= require('gulp');
const sass 			= require('gulp-sass')(require('sass'));
const globbing 		= require('gulp-css-globbing');
const terser     	= require('gulp-terser');
const concat		= require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');
const sourcemaps 	= require('gulp-sourcemaps');
const handlebars 	= require('gulp-handlebars');
const wrap 			= require('gulp-wrap');
const declare 		= require('gulp-declare');

// Set Vars
var config = {
	devSASS 	: '#dev/scss/',
	devJS 		: '#dev/js/',
	devBlocks 	: '#dev/blocks/',
	assetsCSS 	: 'build/assets/css/',
	assetsJS 	: 'build/assets/js/'
}

// Compile Dependencies
function dependencies(done) {
    gulp.src(['node_modules/handlebars/dist/handlebars.js']).pipe(gulp.dest(config.devJS + '/vendor/'));
    //gulp.src(['node_modules/slick-carousel/slick/slick.js']).pipe(gulp.dest(config.devJS + '/vendor/'));
    done();
}

function handlebarsTemplates() {
	return gulp.src(config.devBlocks + '*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'WMG.blocks',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('blocks.js'))
    .pipe(gulp.dest(config.assetsJS));

}


// Compile CSS
function css() {
	return gulp
		.src(config.devSASS + '*.scss')
		.pipe(sourcemaps.init())
		.pipe(globbing({
			extensions: ['.scss']
		}))
        .pipe(sass({
	        outputStyle: 'compressed'
	    }).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.assetsCSS));
};


// Compile JS
function js() {
	return gulp
		.src([config.devJS + '**/*.js'])
        .pipe(terser())
        .pipe(gulp.dest(config.assetsJS));
};


// Watch Files 
function watchFiles() {
	gulp.watch(config.devJS + '**/*.js', js);
	gulp.watch(config.devSASS + '**/*.scss', css);
	gulp.watch(config.devBlocks + '**/*.hbs', handlebarsTemplates);
}

const watch = gulp.series(watchFiles);
const dep 	= gulp.parallel(dependencies, css, js);

// Export Tasks
exports.css = css;
exports.js = js;
exports.handlebars = handlebarsTemplates;
exports.watch = watch;
exports.dep = dep;
exports.default = watch;