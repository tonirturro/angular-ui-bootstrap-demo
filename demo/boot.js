'use strict';
require('jquery');
var angular = require('angular');
require('angular-animate');
require('angular-route');
require('bootstrap/dist/css/bootstrap.css');
var ACCORDION = require('../src/accordion');
var MODAL = require('../src/modal');

var module = angular.module('ui.bootstrap.demo', [ 
    'ngAnimate',
    'ngRoute',
    ACCORDION,
    MODAL
 ]);

require('../src/accordion/docs/demo');
require('../src/modal/docs/demo')
require('./main');


module.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'basic'
        })
        .when('/accordion', {
            templateUrl: 'accordion'
        })
        .when('/modal', {
            templateUrl: 'modal'
        });
});

module.run(["$templateCache", function($templateCache) {
    $templateCache.put('basic', require('../src/basic/docs/demo.html'));
    $templateCache.put('accordion', require('../src/accordion/docs/demo.html'));
    $templateCache.put('modal', require('../src/modal/docs/demo.html'));
}]);
