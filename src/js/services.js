'use strict';

angular.module('rcpicsServices', ['ngResource'])
    .factory('Photo', function($resource){
        return $resource('photos/:photoId.json', {}, {
            query: {method:'GET', params:{photoId:'photos'}, isArray:true}
        });
    });
