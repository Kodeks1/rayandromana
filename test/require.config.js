var require = {

    paths: {
        jquery: '../src/libs/jquery-1.9.1',
        underscore: '../src/libs/underscore',
        backbone: '../src/libs/backbone',
        text: '../src/libs/text',
        handlebars: '../src/libs/handlebars'
    },

    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }

};