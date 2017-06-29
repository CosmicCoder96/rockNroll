import Ember from 'ember';
import Song from '../../../models/song';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  actions: {
    createSong() {
      let controller = this.get('controller');
      let band = this.modelFor('bands.band');

      let song = this.store.createRecord('song', {
        title: controller.get('title'),
        band
      });
      song.save().then(function() {
        controller.set('title', '');
      });
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
