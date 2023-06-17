const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const uglify = require("gulp-uglify")
const concat = require("gulp-concat")

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'));
});
