Lunchtime.IndexRoute = Ember.Route.extend({

    redirect: function () {
        this.transitionToRoute('lunch.index');
    }

});
