'use strict';

angular.module('rcpics', ['rcpicsFilters', 'rcpicsServices'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('', {templateUrl: 'templates/photo-stream.html',   controller: PhotoStreamCtrl})
            .when('/pics', {templateUrl: 'templates/photo-stream.html',   controller: PhotoStreamCtrl})
            .when('/pics/:photoId', {templateUrl: 'templates/photo-detail.html', controller: PhotoDetailCtrl});
            //.otherwise({redirectTo: '/pics'});
    }]);
