// Karma configuration
// Generated on Tue Mar 21 2017 21:29:48 GMT+0100 (Romance Standard Time)
const path = require('path');
const webpackConfig = require('../webpack/webpack.config');
webpackConfig.resolve.alias = {
     'angular': path.resolve(path.join(__dirname, '..', 'node_modules', 'angular'))
};
webpackConfig.output = undefined;

module.exports = function (config) {
    config.set({

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine-jquery', 'jasmine'],

        files: [
            "unitFrontend.js"
        ],

        preprocessors: {
            "unitFrontend.js": [ "webpack", "sourcemap" ]
        },

        webpack: webpackConfig,

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],       

        // web server port
        port: 9876,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
    });
};