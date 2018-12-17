'use strict';
require('jquery');
var angular = require('angular');
require('angular-animate');
require('angular-route');
require('bootstrap/dist/css/bootstrap.css');
var ACCORDION = require('../src/accordion');
var ALERT = require('../src/alert');
var BUTTONS = require('../src/buttons');
var CAROUSEL = require('../src/carousel');
var COLLAPSE = require('../src/collapse');
var MODAL = require('../src/modal');

var module = angular.module('ui.bootstrap.demo', [ 
    'ngAnimate',
    'ngRoute',
    ACCORDION,
    ALERT,
    BUTTONS,
    CAROUSEL,
    COLLAPSE,
    MODAL
 ]).filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});;

require('../src/accordion/docs/demo');
require('../src/alert/docs/demo');
require('../src/buttons/docs/demo');
require('../src/carousel/docs/demo');
require('../src/collapse/docs/demo');
require('../src/modal/docs/demo');
require('./main');


module.config(function($routeProvider) {
    $routeProvider
        .when('/basic', {
            templateUrl: 'basic'
        })
        .when('/accordion', {
            templateUrl: 'accordion'
        })
        .when('/alert', {
            templateUrl: 'alert'
        })
        .when('/buttons', {
            templateUrl: 'buttons'
        })
        .when('/carousel', {
            templateUrl: 'carousel'
        })
        .when('/collapse', {
            templateUrl: 'collapse'
        })
        .when('/modal', {
            templateUrl: 'modal'
        })
        .otherwise({
            redirectTo : '/basic'
        });
});

module.run(["$templateCache", function($templateCache) {
    $templateCache.put('basic', require('../src/basic/docs/demo.html'));
    $templateCache.put('accordion', require('../src/accordion/docs/demo.html'));
    $templateCache.put('alert', require('../src/alert/docs/demo.html'));
    $templateCache.put('buttons', require('../src/buttons/docs/demo.html'));
    $templateCache.put('carousel', require('../src/carousel/docs/demo.html'));
    $templateCache.put('collapse', require('../src/collapse/docs/demo.html'));
    $templateCache.put('modal', require('../src/modal/docs/demo.html'));
}]);
