define(function() {
    // model and collection definitions are here
    ContactCollection = Backbone.Collection.extend({
        comparator: "lastName"
    });
    return new ContactCollection([
        { id: 1, firstName: "Bob", lastName: "Brigham",
         phoneNumber: "555-0163" },
        { id: 2, firstName: "Alice", lastName: "Arten",
         phoneNumber: "555-0184" },
        { id: 3, firstName: "Charlie", lastName: "Campbell",
         phoneNumber: "555-0129" }
    ]);
});