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
var DATEPICKER = require('../src/datepicker');
var DATEPARSER = require('../src/dateparser');
var DATEPICKERPOPUP = require('../src/datepickerPopup');
var MODAL = require('../src/modal');

var module = angular.module('ui.bootstrap.demo', [ 
    'ngAnimate',
    'ngRoute',
    ACCORDION,
    ALERT,
    BUTTONS,
    CAROUSEL,
    COLLAPSE,
    DATEPICKER,
    DATEPARSER,
    DATEPICKERPOPUP,
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
require('../src/dateparser/docs/demo');
require('../src/datepicker/docs/demo');
require('../src/datepickerPopup/docs/demo');
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
        .when('/dateparser', {
            templateUrl: 'dateparser'
        })
        .when('/datepicker', {
            templateUrl: 'datepicker'
        })
        .when('/datepickerpopup', {
            templateUrl: 'datepickerpopup'
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
    $templateCache.put('dateparser', require('../src/dateparser/docs/demo.html'));
    $templateCache.put('datepicker', require('../src/datepicker/docs/demo.html'));
    $templateCache.put('datepickerpopup', require('../src/datepickerPopup/docs/demo.html'))
    $templateCache.put('modal', require('../src/modal/docs/demo.html'));
}]);
