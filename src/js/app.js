'use strict';

angular.module('rayandromana', ['rrFilters', 'rrServices', 'Scope.onReady'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            //.when('', {templateUrl: 'templates/photo-stream.html',   controller: PhotoStreamCtrl})
            //.when('/pics', {templateUrl: 'templates/photo-stream.html',   controller: PhotoStreamCtrl})
            //.when('/pics/:photoId', {templateUrl: 'templates/photo-detail.html', controller: PhotoDetailCtrl});
            //.otherwise({redirectTo: '/pics'});
    }]);
