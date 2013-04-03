'use strict';

var AppController = ['$scope', 'localize', function($scope, localize) {

    $scope.setEnglishLanguage = function() {
        localize.setLanguage('en-US');
    };

    $scope.setCzechLanguage = function() {
        localize.setLanguage('cs-CZ');
    };

}];
