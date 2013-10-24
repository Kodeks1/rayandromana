'use strict';

angular.module('rayandromana', ['rr.services', 'rr.directives', 'localization', 'ngSanitize']);

//jQuery Helpers

$('.full-window-modal').on('show.bs.modal', function () {
    $(this).find('.modal-dialog').css({
        width:'auto',
        height:'auto',
        'max-height':'100%'
    });
});
