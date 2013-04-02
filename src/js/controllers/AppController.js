'use strict';

function AppController($scope, localize) {

    $scope.setEnglishLanguage = function() {
        localize.setLanguage('en-US');
    };

    $scope.setCzechLanguage = function() {
        localize.setLanguage('cs-CZ');
    };
}
