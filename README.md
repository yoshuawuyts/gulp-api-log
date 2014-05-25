# gulp-api-log
Log the gulp cli responses when consuming the api programmatically.

See [gulp/489](https://github.com/gulpjs/gulp/issues/489) for more information.

## Usage
````js
var gulp = require('./gulpfile.js');
var glog = require('gulp-api-log');

glog(gulp);
gulp.start(program.task);
````

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)