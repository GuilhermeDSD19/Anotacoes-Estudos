const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

gulp.task("deps.css", async () => {
    return gulp.src([
        "node_modules/font-awesome/css/font-awesome.css",
    ])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat("depsmin.css"))
        .pipe(gulp.dest("build/assets/css"));
})

gulp.task("deps.fonts", async () => {
    return gulp.src(["node_modules/font-awesome/fonts/*.*",])
        .pipe(gulp.dest('build/assets/fonts'))
})

gulp.task("deps", gulp.series("deps.css", "deps.fonts"))