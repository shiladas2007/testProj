/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var del = require("del");

var paths = {
    scripts: ["scripts/**/*.js", "scripts/**/*.ts", "scripts/**/*.map"],
};

gulp.task("clean", function () {
    return del(["wwwroot/scripts/**/*"]);
});
var print = require('gulp-print');

gulp.task('message', function () {
    return gulp.src('package.json')
        .pipe(print(function () { return 'HTTP Server Started'; }));
});

gulp.task("default", function () {
    gulp.src(paths.scripts).pipe(gulp.dest("wwwroot/scripts"));
});