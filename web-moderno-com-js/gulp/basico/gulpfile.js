const gulp = require("gulp");

gulp.task("antes1", async () => {
    console.log('Antes 1!!!');
});

gulp.task("antes2", async () => {
    console.log('Antes 2!!!');
});

gulp.task("copiar", gulp.series('antes1', 'antes2', async () => {
    gulp.src("pastaA/*.txt")
        .pipe(gulp.dest("pastaB"))
}));

gulp.task("fim", async () => {
    console.log('Fim!!!');
});

gulp.task("default", gulp.series('copiar', 'fim'));