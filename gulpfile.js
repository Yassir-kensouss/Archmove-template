var gulp = require('gulp'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence');
    // browserSync = require('browser-sync').create();


// Html task

gulp.task('html' , async function(){

  return gulp.src('index.html')
        .pipe(gulp.dest('dist'))

});

// Useref task

gulp.task('useref' , async function(){

  return gulp.src('index.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js',uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css' , cssnano()))
        .pipe(gulp.dest('dist'))

});

// Imagemin task

gulp.task('images' , async function(){

  return gulp.src('./img/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
          interlaced: true
        })))
        .pipe(gulp.dest('dist/img'))

});

// Cleanning up
gulp.task('clean:dist', function() {
  return del.sync('dist');
});


// Run all tasks

gulp.task('build' , async function(done) {
  runSequence('clean:dist', 
    ['useref', 'images' , 'html'],
    done()
  )
});


// Watch task

gulp.task('watch' , function(){

  gulp.watch('index.html' , gulp.series('html'));
  gulp.watch('index.html' , gulp.series('useref'));

});