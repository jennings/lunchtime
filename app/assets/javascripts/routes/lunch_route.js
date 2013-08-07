Lunchtime.LunchRoute = Ember.Route.extend({

    renderTemplate: function(data) {
        this.render('lunches', {
            outlet: 'sidebar'
        });
        this.render('lunch');
    },

    model: function() {
        return Lunchtime.Lunch.find();
    }

});

