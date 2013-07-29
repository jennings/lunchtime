
Lunchtime.LunchesRoute = Ember.Route.extend({
    model: function() {
        return Lunchtime.Lunch.find();
    }
});
