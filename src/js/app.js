define(['marionette'], function(Marionette) {
    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: "#main-region"
    });

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            "contacts": "listContacts",
            "contacts/:id": "showContact"
        }
    });

    var Controller = Marionette.Controller.extend({
        listContacts: function() {
            require(['contactsListController'], function (ctrl) {
                app.router.navigate("contacts");
                ctrl.listContacts();
            });
        },
        showContact: function(id) {
            require(['contactsDetailController'], function (ctrl) {
                app.router.navigate("contacts/" + id);
                ctrl.showContact(id);
            });
        }
    });

    app.controller = new Controller();
    app.router = new Router({controller: app.controller});

    app.on("show:contact", function(id) {
       app.controller.showContact(id);
    });

    app.on('initialize:after', function(){
        if(Backbone.history) {
            Backbone.history.start();

            app.controller.listContacts();
        };
    });
    return app;
});