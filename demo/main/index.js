'use strict';
var angular = require('angular');

angular.module('ui.bootstrap.demo').component('main', {
    template: require('./template.html'),
    controller: ['$route', function ($route) {
        this.options = [];
        for (const key in $route.routes) {
            if ($route.routes.hasOwnProperty(key)) {
                const element = $route.routes[key];
                if (element.templateUrl) {
                    this.options.push(element.templateUrl);
                }
            }
        }
    }]
});