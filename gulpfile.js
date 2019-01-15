'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
 
/* SCSS task */
gulp.task('sass', function () {
 return gulp.src('./sass/style.scss')
   .pipe(sass.sync().on('error', sass.logError))
   // .pipe(sass({outputStyle: 'compressed'}).sync().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

/* SVG Sprite */
const spriteConfig = {
    shape: {
      dimension: { 
        maxWidth: 32,
        maxHeight: 32
      },
      spacing: {
        padding: 10
      },
      dest: 'sass/sprite'
    },
    mode: {
      view: { 
        bust: false,
        render: {
          scss: true 
        }
      },
      symbol: true 
    }
};

gulp.task('svg', function() {
    return gulp.src('assets/svg/*.svg')
        .pipe(svgSprite(spriteConfig))
        .pipe(gulp.dest('sass/sprite'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
    gulp.watch('assets/svg', gulp.series('svg'));
});