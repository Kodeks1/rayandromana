
angular.module('myModule', [])

    .directive('myComponent', function() {

        var Directive = {
            scope: {
                username: '@'
            },
            controller: function($scope) {
                //$scope.username = 'blah';
                //console.log('a');
            },
            link: function($scope, $element) {
            }
        };
        return Directive;

    });