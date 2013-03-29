'use strict';

/* Directives */
var app = angular.module('rayandromana', []);

app.directive('resize', function ($window) {
    return function (scope) {
        scope.width = $window.innerWidth;
        scope.height = $window.innerHeight;
        scope.heightStyle = 'height:' + ($window.innerHeight - 112) + 'px';
        angular.element($window).bind('resize', function () {
            scope.$apply(function () {
                scope.width = $window.innerWidth;
                scope.height = $window.innerHeight;
                scope.heightStyle = 'height:' + ($window.innerHeight - 112) + 'px';
            });
        });
    };
});