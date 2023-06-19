const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

gulp.task("app.html", async () => {
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"))
})

gulp.task("app.css", async () => {
    return gulp.src("src/assets/sass/index.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest("build/assets/css"))
})

gulp.task("app.js", async () => {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
})

gulp.task("app.imgs", async () => {
    return gulp.src("src/assets/imgs/**/*.*")
        .pipe(gulp.dest("build/assets/imgs"))
})

gulp.task("app", gulp.series("app.html", "app.css", "app.js", "app.imgs"))