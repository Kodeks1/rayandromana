'use strict';

angular.module('rrDirectives', [])

    /**
     * Window resize
     */
    .directive('resizeBanner', ["$window", function ($window) {
        return function (scope) {
            scope.width = $window.innerWidth;
            scope.height = $window.innerHeight;
            scope.heightStyle = 'height:' + ($window.innerHeight - 125) + 'px';
            angular.element($window).bind('resize', function () {
                scope.$apply(function () {
                    scope.width = $window.innerWidth;
                    scope.height = $window.innerHeight;
                    scope.heightStyle = 'height:' + ($window.innerHeight - 125) + 'px';
                });
            });
        };
    }])

    .directive('ajaxPost', [function() {
        return function(scope, elem, attrs) {
            $('#' + attrs.id).submit(function() {
                $('#' + attrs.id).ajaxSubmit({dataType: 'jsonp'});
                return false;
            });
        };
    }]);
