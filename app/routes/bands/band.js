import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    this.set('params', params);
    var bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug);
  }
});
