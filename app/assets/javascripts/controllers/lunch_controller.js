Lunchtime.LunchController = Ember.ObjectController.extend({
    isEditing: false,

    editLunch: function () {
        this.set('isEditing', true);
    },

    acceptChanges: function () {
        this.set('isEditing', false);
        this.get('model').save();
    }
});
