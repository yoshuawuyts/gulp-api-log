/**
 * Module dependencies
 */

var prettyTime = require('pretty-hrtime');
var gutil = require('gulp-util');
var chalk = require('chalk');

/**
 * Exports
 */

module.exports = logEvents;

/**
 * Logger
 *
 * Pass it an instance of gulp (or gulpfile) to pretty print responses to stdout.
 * Enables the programmatic consumption of gulp(1).
 * Extracted from https://github.com/gulpjs/gulp/blob/master/bin/gulp.js#L102.
 *
 * @params {Function} gulp
 * @api public
 */

function logEvents(gulp) {
  // total hack due to fucked up error management in orchestrator
  gulp.on('err', function(){});

  gulp.on('task_start', function(e) {
    gutil.log('Starting', "'" + chalk.cyan(e.task) + "'...");
  });

  gulp.on('task_stop', function(e) {
    var time = prettyTime(e.hrDuration);
    gutil.log('Finished', "'" + chalk.cyan(e.task) + "'", 'after', chalk.magenta(time));
  });

  gulp.on('task_err', function(e) {
    var msg = formatError(e);
    var time = prettyTime(e.hrDuration);
    gutil.log("'" + chalk.cyan(e.task) + "'", 'errored after', chalk.magenta(time), chalk.red(msg));
  });

  gulp.on('task_not_found', function(err) {
    gutil.log(chalk.red("Task '" + err.task + "' was not defined in your gulpfile but you tried to run it."));
    gutil.log('Please check the documentation for proper gulpfile formatting.');
    process.exit(1);
  });
};