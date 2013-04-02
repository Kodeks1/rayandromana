'use strict';

angular.module('rrDirectives', [])

    /**
     * Window resize
     */
    .directive('resize', ["$window", function ($window) {
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
    }]);
