var app, gulp, rename, sass, del, eslint

gulp = require('gulp')
sass = require('gulp-sass')
rename = require('gulp-rename')
del = require('del')
eslint = require('gulp-eslint')

app = {
  src: {
    base: ['./src/**/*', '!./src/**/*.scss'],
    scss: ['./src/**/*.scss', '!./src/**/_*.scss'],
    js: ['./src/**/*.js', './src/**/*.wss']
  },
  dest: './dist'
}

gulp.task('watch:scss', function() {
  return gulp.watch([app.src.scss[0]], ['build:style'])
})
gulp.task('watch:base', function(){
  return gulp.watch(app.src.base, ['build:base'])
})
gulp.task('watch:lint', function(){
  return gulp.watch(app.src.js, ['lint'])
})

gulp.task('watch', ['watch:scss', 'watch:base', 'watch:lint'])

gulp.task('lint', function () {
  return gulp.src(app.src.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})


gulp.task('build:style', function() {
  return gulp.src(app.src.scss, {
  }).pipe(sass().on('error', sass.logError)).pipe(rename(function(path) {
    return path.extname = '.wxss'
  })).pipe(gulp.dest(app.dest))
})

gulp.task('build:base', function() {
  return gulp.src(app.src.base)
    .pipe(gulp.dest(app.dest))
})

gulp.task('clean', function(){
  return del.sync([app.dest])
})

gulp.task('default', ['clean', 'watch', 'build:style', 'build:base'])
