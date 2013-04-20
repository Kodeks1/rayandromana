'use strict';

var AppController = ['$scope', 'localize', function($scope, localize) {

    $scope.selectedLang = 'en';

    /**
     * Set language to English
     */
    $scope.setEnglishLanguage = function() {
        localize.setLanguage('en-US');
        $scope.selectedLang = 'en';
    };

    /**
     * Set language to Czech
     */
    $scope.setCzechLanguage = function() {
        localize.setLanguage('cs-CZ');
        $scope.selectedLang = 'cz';
    };

    /**
     * Is lang param the selected language
     */
    $scope.isActiveLang = function(lang) {
        if ($scope.selectedLang === lang) {
            return 'active';
        } else {
            return '';
        }
    };

}];
