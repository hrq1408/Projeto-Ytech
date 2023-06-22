var gulp = require('gulp'),
sass = require('gulp-sass')(require('sass')),
rename = require('gulp-rename');



sass.compiler = require("node-sass"); //SASS Compiler

/*
 * Variables
 */
// Sass Sourc
var scssFiles = './src/sass/**';

var configuration = {
  eslint: {
    "extends": "airbnb-base",
    'rules': {
    }
  },
  paths: {
    src: {
      css: ["./src/sass/style.scss"],
      csswatch: ["./src/sass/**/**"],      
      js: ["./src/js/main.js"],
      jsatf: ["./src/js/main.atf.js"],
      img: ["./src/img/**"]
    },
    dist: {

    }
  }
};

// CSS destination
var cssDest = './src/css';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

gulp.task("sass", function() {
  return gulp.src(configuration.paths.src.css)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});


// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, gulp.series('sass'));

});

// Default task - Run with command 'gulp'
gulp.task('default', gulp.series('sass', 'watch'));

