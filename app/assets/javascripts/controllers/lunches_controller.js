Lunchtime.LunchesController = Ember.ArrayController.extend({

    createLunch: function () {
        var name = this.get('newName');
        if (!name.trim()) return;
        var lunch = Lunchtime.Lunch.createRecord({
            name: name,
            active: true
        });
        this.set('newName', '');
        lunch.save();
    }

});
