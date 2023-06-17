const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'))

sass.compiler = require("node-sass")

gulp.task("copiarHtml", async () => {
    return gulp.src("src/index.html")
        .pipe(gulp.dest("build"))
})

gulp.task("sassDev", async () => {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename('estilo.min.css'))
        .pipe(gulp.dest("build/css"))
})

gulp.task("default", gulp.parallel("copiarHtml", "sassDev"))