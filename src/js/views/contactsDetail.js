define(['marionette'], function(Marionette) {
    ContactsDetail = Marionette.ItemView.extend({
        template: "#contact-view"
    });
    return ContactsDetail;
});