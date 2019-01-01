'use strict';
require('jquery');
var angular = require('angular');
require('angular-animate');
require('angular-route');
require('../stylesheets/_bootstrap.scss');
var ACCORDION = require('../src/accordion');
var ALERT = require('../src/alert');
var BUTTONS = require('../src/buttons');
var CAROUSEL = require('../src/carousel');
var COLLAPSE = require('../src/collapse');
var DATEPICKER = require('../src/datepicker');
var DATEPARSER = require('../src/dateparser');
var DATEPICKERPOPUP = require('../src/datepickerPopup');
var DROPDOWN = require('../src/dropdown');
var MODAL = require('../src/modal');
var PAGER = require('../src/pager');
var PAGINATION = require('../src/pagination');
var POPOVER = require('../src/popover');
var POSITION = require('../src/position');
var PROGRESSBAR = require('../src/progressbar');

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
    DROPDOWN,
    MODAL,
    PAGER,
    PAGINATION,
    POPOVER,
    POSITION,
    PROGRESSBAR
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
require('../src/dropdown/docs/demo');
require('../src/modal/docs/demo');
require('../src/pager/docs/demo');
require('../src/pagination/docs/demo');
require('../src/popover/docs/demo');
require('../src/position/docs/demo');
require('../src/progressbar/docs/demo');
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
        .when('/dropdown', {
            templateUrl: 'dropdown'
        })
        .when('/modal', {
            templateUrl: 'modal'
        })
        .when('/pager', {
            templateUrl: 'pager'
        })
        .when('/pagination', {
            templateUrl: 'pagination'
        })
        .when('/popover', {
            templateUrl: 'popover'
        })
        .when('/position', {
            templateUrl: 'position'
        })
        .when('/progressbar', {
            templateUrl: 'progressbar'
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
    $templateCache.put('datepickerpopup', require('../src/datepickerPopup/docs/demo.html'));
    $templateCache.put('dropdown', require('../src/dropdown/docs/demo.html'));
    $templateCache.put('modal', require('../src/modal/docs/demo.html'));
    $templateCache.put('pager', require('../src/pager/docs/demo.html'));
    $templateCache.put('pagination', require('../src/pagination/docs/demo.html'));
    $templateCache.put('popover', require('../src/popover/docs/demo.html'));
    $templateCache.put('position', require('../src/position/docs/demo.html'));
    $templateCache.put('progressbar', require('../src/progressbar/docs/demo.html'));
}]);
