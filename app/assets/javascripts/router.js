// For more information see: http://emberjs.com/guides/routing/

Lunchtime.Router.map(function() {

    this.resource('lunch', function () {
        this.resource('details', { path: ':post_id' }),
        this.resource('new')
    });

    this.resource('companies');

    this.resource('signin');

});
