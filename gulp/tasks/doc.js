var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');
var jsdoc2md = require('jsdoc-to-markdown');
var tap = require('gulp-tap');
var fs = require('fs');

gulp.task('doc:html', function (cb) {
    var config = require('../../jsdoc.conf.json');
    //gulp.src(['README.md', './src/**/*.js']).pipe(jsdoc(config, cb));
    gulp.src(['README.md', './src/*.js']).pipe(jsdoc(config, cb));
});


var runJsdoc2md = function (fileSource, outputPath) {
    var basename;
    return gulp.src(fileSource)
        .pipe(tap(function (file, t) {
            basename = file.relative.split('.js')[0];
            //console.log("outpath " + outputPath + " File " + file.path + "  " + basename);
            jsdoc2md.render({
                files: file.path
            }).then(output => fs.writeFile(outputPath + basename + '.md', output));
        }));
};

gulp.task('doc:api', function () {


    var fileSource = 'src/rup*.js';
    var outputPath = './doc/api/';

    runJsdoc2md(fileSource, outputPath);
    //rup_table
    fileSource = 'src/rup_table/rup*.js';
    //outputPath = './doc/api/table/';
    runJsdoc2md(fileSource, outputPath);
});

gulp.task('jsdocFile', function () {
    var filePath = 'src/rup_table/';
    var basename = 'rup.table.report';
    var outputPath = './doc/api/';
    jsdoc2md.render({
        files: filePath + basename + '.js'
    }).then(output => fs.writeFile(outputPath + basename + '.md', output));
});
