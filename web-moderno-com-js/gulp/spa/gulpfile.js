const gulp = require('gulp');
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');
const util = require("gulp-util");

const { depsCSS, depsFonts } = require('./gulpTasks/deps');
const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');

function iniciarServidor(done) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
        .on('end', done);
}

function monitorarArquivos() {
    watch('src/**/*.html', appHTML);
    watch('src/**/*.scss', appCSS);
    watch('src/**/*.js', appJS);
    watch('src/assets/imgs/**/*.*', appIMG);
}

gulp.task("default", done => {
    if (util.env.production) {
        return gulp.series(gulp.parallel(depsCSS, depsFonts), gulp.parallel(appHTML, appCSS, appJS, appIMG))(done);
    } else {
        return gulp.series(gulp.parallel(depsCSS, depsFonts), gulp.parallel(appHTML, appCSS, appJS, appIMG), iniciarServidor, monitorarArquivos)(done);
    }
});
