'use strict';

angular.module('rr.directives', [])

    /**
     * Window resize
     */
    .directive('resizeBanner', ["$window", function ($window) {
        return function (scope) {
            scope.width = $window.innerWidth;
            scope.height = $window.innerHeight;
            angular.element($window).bind('resize', function () {
                scope.$apply(function () {
                    scope.width = $window.innerWidth;
                    scope.height = $window.innerHeight;
                });
            });
        };
    }])

    /**
     * Animate to horizontal scroll position
     */
    .directive('horizontalScrollTo', [function() {
        return function(scope, elem, attrs) {
            scope.$watch("scrollPos", function () {
                if (typeof scope.scrollPos !== 'undefined') {
                    $(elem).animate({scrollLeft: scope.scrollPos}, 600);
                }
            }, true);
        };
    }])

    /**
     *
     */
    .directive('parallaxBanner', ["$window", function ($window) {
        return function($scope) {
            angular.element($window).bind('scroll', function() {
                $scope.$apply(function () {
                    var scrollTop = $(document).scrollTop(),
                        opacity = 1 - (scrollTop / 550),
                        offset = -(30 - (opacity * 50));

                    $scope.bannerStyle = {opacity: Math.max(opacity, 0), backgroundPositionY: offset};

                });
            });
        };
    }]);
