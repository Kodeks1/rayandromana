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
     * Set the properties for the banner as the body scrolls
     */
    .directive('parallaxBanner', ["$window", function ($window) {
        return function($scope) {

            if (Modernizr.touch) {
                return; //don't bother for mobiles
            }

            angular.element($window).bind('scroll', function() {
                $scope.$apply(function () {

                    var scrollTop = $(document).scrollTop(),
                        opacity = 1 - (scrollTop / 450),
                        offset = -(30 - (opacity * 70));

                    $scope.bannerStyle = {opacity: Math.max(opacity, 0), backgroundPositionY: offset};

                });
            });
        };
    }]);