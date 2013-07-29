Lunchtime.Lunch = DS.Model.extend({
    name: DS.attr('string'),
    active: DS.attr('boolean')
});

Lunchtime.Lunch.FIXTURES = [
    {
        id: 1,
        name: 'Going to The Habit',
        active: true
    },
    {
        id: 2,
        name: 'Going to Wahoos',
        active: false
    },
    {
        id: 3,
        name: 'Going to Frame Broyer',
        active: true
    }
];
