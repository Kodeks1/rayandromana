'use strict';

var AppController = ['$scope', 'localize', function($scope, localize) {

    $scope.selectedLang = 'en';

    $scope.myThing = 'testa';

    /**
     * Set language to English
     */
    $scope.setEnglishLanguage = function($event) {
        localize.setLanguage('en-US');
        $scope.selectedLang = 'en';
        $event.preventDefault();
    };

    /**
     * Set language to Czech
     */
    $scope.setCzechLanguage = function($event) {
        localize.setLanguage('cs-CZ');
        $scope.selectedLang = 'cz';
        $event.preventDefault();
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

    $scope.openModal = function(modal, $event) {

        var ie = navigator.userAgent.indexOf("MSIE") > 0,
            useBlankAppModal = (modal === '#yourPhotosModal' && ie),
            frame;

        if (!Modernizr.touch && !useBlankAppModal) {
            $(modal).modal({
                keyboard: false,
                remote:'true'
            });

            if (modal === '#proPhotosModal') {
                frame = $('#proPhotosFrame');
                if (!frame.attr('src')) {
                    frame.attr('src', 'http://rayandromana.smugmug.com/Wedding-Photos');
                }
            } else if (modal === '#yourPhotosModal') {
                frame = $('#yourPhotosFrame');
                if (!frame.attr('src')) {
                    frame.attr('src', 'http://weddingpartyapp.com/e/4c4e7e991059574f05d876a0130b5420');
                }
            } else if (modal === '#guestPhotosModal') {
                frame = $('#guestPhotosFrame');
                frame.attr('src', 'http://rayandromana.smugmug.com/Guest-Photos');

            } else if (modal === '#uploadPhotosModal') {
                frame = $('#uploadPhotosFrame');
                if (!frame.attr('src')) {
                    frame.attr('src', 'http://www.smugmug.com/photos/guest/SFHLZ4/cashmore');
                }
            }

            $event.preventDefault();

        }

    };

}];
