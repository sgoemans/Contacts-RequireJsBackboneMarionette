require.config({
    // scripts aliases
    paths: {
        jquery: 'lib/jquery-1.10.2',
        underscore: 'lib/underscore-1.5.2',
        handlebars: 'lib/handlebars-v1.1.2',
        backbone: 'lib/backbone-1.1.0',
        marionette: 'lib/backbone.marionette',
        contactsList: 'views/contactsList',
        contactsModel: 'models/contactsModel',
        contactsListController: 'controller/contactsListController',
        contactsDetailController: 'controller/contactsDetailController',
        contactsDetail: 'views/contactsDetail'
    },
    // non-AMD scripts shims/exports
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});
require(['app'], function(app){
    app.start();
});

