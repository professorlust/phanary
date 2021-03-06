var gulp = require('gulp');
var exec = require('child_process').exec;
var commands = [
    "handlebars app/assets/templates/searchResult.hbs -f app/assets/scripts/modules/templates/searchResult.js",
    "handlebars app/assets/templates/atmosphere.hbs -f app/assets/scripts/modules/templates/atmosphere.js",
    "handlebars app/assets/templates/track.hbs -f app/assets/scripts/modules/templates/track.js",
    "handlebars app/assets/templates/oneshot.hbs -f app/assets/scripts/modules/templates/oneshot.js"
];

gulp.task('templates', function() {
    commands.forEach(function(cmd) {
        exec(cmd, function(error, stdout, stderr) {
            console.log("Running: \'" + cmd + "\'");
            console.log("Output:\n" + stdout);
            console.log("Error:\n" + stderr);
        });
    });
});