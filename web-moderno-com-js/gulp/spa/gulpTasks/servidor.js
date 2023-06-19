const gulp = require("gulp");
const watch = require("gulp-watch");
const webserver = require("gulp-webserver");

gulp.task("monitorarMudancas", async () => {
    watch('src/**/*.html', () => gulp.series("app.html"));
    watch('src/**/*.scss', () => gulp.series("app.css"));
    watch('src/**/*.js', () => gulp.series("app.js"));
    watch('src/assets/imgs/**/*.*', () => gulp.series("app.imgs"));
});

gulp.task("servidor", gulp.series("monitorarMudancas", () => {
    return gulp.src("build").pipe(webserver({
        livereload: true,
        port: 8080,
        open: true
    }));
}));
