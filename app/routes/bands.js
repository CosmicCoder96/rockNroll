import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('band');
  },

  actions: {
    createBand() {
      let router = this;
      let controller = this.get('controller');
      let band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(function() {
        controller.set('name', '');
        router.transitionTo('bands.band.songs', band);
      });
    },

    didTransition() {
      document.title = 'Bands - Rock & Roll';
    },

  }
});
