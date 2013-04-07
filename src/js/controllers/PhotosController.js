'use strict';

var PhotosController = ['$scope', '$timeout', 'PhotoService', function($scope, $timeout, PhotoService) {
    $scope.photos = PhotoService.query();
}];
