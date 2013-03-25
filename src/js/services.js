'use strict';

angular.module('rrServices', ['ngResource'])
    .factory('Photo', ['$resource', function($resource) {
        return $resource('content/:photoId.json', {}, {
            query: {method:'GET', params:{photoId:'photos'}, isArray:true}
        });
    }]);