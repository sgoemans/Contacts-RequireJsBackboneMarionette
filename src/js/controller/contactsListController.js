define(function() {
    var ctrl = {
        listContacts: function(){
            require(['app', 'contactsList', 'contactsModel'], function(Contacts, ContactsListView, collection) {
                var contactsListView = new ContactsListView({ collection: collection });
                contactsListView.on("itemview:contact:show", function(childView, model) {
                    Contacts.trigger("show:contact", model.get("id"));
                });
                contactsListView.on("itemview:delete:clicked", function(args) {
                    collection.remove(args.model);
                });
                Contacts.mainRegion.show(contactsListView);
            });
        }
    };
    return ctrl;
});

