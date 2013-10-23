'use strict';

angular.module('rayandromana', ['rr.services', 'rr.directives', 'localization', 'ngSanitize']);

//jQuery Helpers

$('#myModal').on('show.bs.modal', function () {
    $(this).find('.modal-dialog').css({
        width:'auto',
        height:'auto',
        'max-height':'100%'
    });
});
