'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json','sendtotelegram.js','telegram32.png','telegram48.png','telegram.png','options.html','options.js'];
var xpiName = 'Sendtotelegram.xpi';

gulp.task('default', function () {
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest('.'));
});