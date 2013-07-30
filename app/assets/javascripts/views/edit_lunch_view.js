Lunchtime.EditLunchView = Ember.TextField.extend({
    classNames: ['edit'],

    insertNewline: function () {
        console.log('insertNewline');
        this.get('controller').acceptChanges();
    },

    focusOut: function () {
        console.log('focusOut');
        this.get('controller').acceptChanges();
    },

    didInsertElement: function () {
        console.log('didInsertElement');
        this.$().focus();
    }
});
