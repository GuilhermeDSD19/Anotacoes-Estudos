const gulp = require("gulp");
const util = require("gulp-util");

require("./gulpTasks/app");
require("./gulpTasks/deps");
require("./gulpTasks/servidor");

gulp.task("default", done => {
    if (util.env.production) {
        return gulp.series('deps', 'app')(done);
    } else {
        return gulp.series('deps', 'app', 'servidor')(done);
    }
});
