/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/26
 * Time: 0:18
 */

const gulp = require("gulp");
const del = require("del");

gulp.task("default",function () { });

gulp.task('clean:build',function(cb:Function) {
    let delDirectories = ['app','config','lib','test','build'];
    delDirectories.forEach(function(directory:string) {
        del([`${directory}/**/*.js`,`${directory}/**/*.js.map`])
            .then(function(paths){
                console.info('Delete [.js] & [.js.map] files from ./'+directory+'.\n',paths.join('\n'));
            })
    })
});