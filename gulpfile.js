const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function() {
    console.log("FIRE");
    return gulp
        .src("./stylesheet/**/*.sass")
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(gulp.dest("./css"))
});

gulp.task("watch", ["sass"], function() {
    gulp.watch("./stylesheet/**/*.sass", ["sass"]);
});