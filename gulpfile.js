// tells Node to look for this package
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');



// TASKS
// gulp.task('hello', function() {
//   console.log('Hello Zell');
// });


// Preprocessing with Gulp
// gulp.task('sass', function(){
//   return gulp.src('src/scss/styles.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass and creates a css folder with styles.css file
//     .pipe(gulp.dest('src/css'))
// });


// Gulp watch syntax
// gulp.watch('src/scss/**/*.scss', ['sass']);

// gulp.task('watch', ['browserSync', 'sass'], function (){ //gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
//   gulp.watch('src/scss/**/*.scss', ['sass']);
//   // Reloads the browser whenever HTML or JS files change
//   gulp.watch('index.html', browserSync.reload);
//   gulp.watch('src/js/**/*.js', browserSync.reload);
// });

// the same as above. we can just use gulp instead of gulp watch and get the same result
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})


// Globbing in Node
// gulp.task('sass', function(){
//   return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass and creates a css folder with styles.css file
//     .pipe(gulp.dest('src/css'))
// });

// Updating sass task for Browser Sync
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


// Letting Browser Sync know where the root of the server should be
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});


// Optimizing CSS and JS files
// gulp.task('useref', function(){
//   return gulp.src('src/*.html')
//     .pipe(useref())
//     .pipe(gulp.dest('dist'))
// });

gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});


// Optimizing images
gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});


// Copying Fonts to Dist
gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})


// Cleaning up generated files automatically
gulp.task('clean:dist', function() {
  return del.sync('dist');
})


gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})
