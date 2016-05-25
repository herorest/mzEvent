var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('jshint', function () {
    return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify', function (){
    return gulp.src('./src/*.js')
               .pipe(concat('Event.min.js'))
               .pipe(gulp.dest('js'))
               .pipe(uglify())
               .pipe(gulp.dest('js'));
});

gulp.task('default', ['jshint', 'minify']);
