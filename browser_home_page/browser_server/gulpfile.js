const gulp = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('script', function () {
  gulp
    .src('src/*.js') // 源文件
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    ) //es6转es5
    .pipe(uglify()) // 使用插件
    .pipe(gulp.dest('dist'))
})
