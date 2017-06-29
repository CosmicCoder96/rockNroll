import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('band');
  },

  actions: {
    createBand() {
      var name = this.get('controller').get('name');
      var band = Band.create({name: name});
      this.modelFor('bands').pushObject(band);
      this.get('controller').set('name', '');
      this.transitionTo('bands.band.songs', band);
    },

    didTransition() {
      document.title = 'Bands - Rock & Roll';
    },

  }
});
