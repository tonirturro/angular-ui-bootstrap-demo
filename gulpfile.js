const path = require('path');
const gulp = require('gulp');
const KarmaServer = require('karma').Server;
const karmaConfig = path.resolve(__dirname, 'test/karma.conf.js');

gulp.task('test', (done) => {
    new KarmaServer({
        configFile: karmaConfig,
        singleRun: true
    }, done).start();
});

gulp.task('unit', (done) => {
    new KarmaServer({
        configFile: karmaConfig,
        singleRun: false
    }, done).start();
});