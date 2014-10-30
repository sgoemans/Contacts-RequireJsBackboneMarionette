define(['app', 'contactsModel', 'contactsDetail'], function(Contacts, collection, ContactsDetail) {
    var ctrl = {
        showContact: function(id){
            contactsDetail = new ContactsDetail({ model: collection.get({id: id}) });
            Contacts.mainRegion.show(contactsDetail);
        }
    };
    return ctrl;
});