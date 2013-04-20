'use strict';

var CzechOutController = ['$scope', function($scope) {

    /**
     * Scroll to selected anchor
     */
    $scope.setSelected = function(section) {

        switch(section) {
            case 'beer':
                $scope.scrollPos = 0;
                break;
            case 'slivo':
                $scope.scrollPos = 1110;
                break;
            case 'folk':
                $scope.scrollPos = 1940;
                break;
            case 'famous':
                $scope.scrollPos = 2780;
                break;
            case 'castles':
                $scope.scrollPos = 3300;
                break;
            case 'lang':
                $scope.scrollPos = 3800;
                break;
            default:
                $scope.scrollPos = 0;
                break;
        }

    }

}];
