import Ember from 'ember';
import Song from '../../../models/song';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  actions: {
    createSong() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var title = controller.get('title');

      var song = Song.create({title: title, band: band});
      band.get('songs').pushObject(song);
      controller.set('title', '');
    },

    didTransition() {
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    }
  },

  resetController(controller) {
    controller.set('songCreationStarted', false);
  }
});
