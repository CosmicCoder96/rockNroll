import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    this.set('params', params);
    var bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug);
  }
})
