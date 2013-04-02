'use strict';

var PhotosController = ['$scope', '$timeout', 'PhotoService', function($scope, $timeout, PhotoService) {
    $scope.photos = PhotoService.query();

    $timeout(function() {
        setTimeout(Grid.init(), 1000);   //hack
    });

}];
