define(['marionette'], function(Marionette) {
    ContactItemView = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#contact-list-item",

        triggers: {
            "click button.js-delete": "delete:clicked"
        },

        events: {
            "click": "highlightItem",
            "click td a.js-show": "showClicked"
        },
        highlightItem: function (e) {
            e.preventDefault();
            this.$el.toggleClass("warning");
        },
        showClicked: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("contact:show", this.model);
        }
    });
    ContactsListView = Marionette.CompositeView.extend({
        tagName: "table",
        template: "#contact-list",
        className: "table table-hover",
        itemView: ContactItemView,
        itemViewContainer: "tbody",
        onItemviewDeleteClicked: function(){
            this.$el.fadeOut(1000, function(){
                $(this).fadeIn(1000);
            });
        }

    });
    return ContactsListView;
});
