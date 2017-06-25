import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  isAddButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),
  noSongs: Ember.computed('model.songs.length', function () {
    return this.get('model.songs.length') === 0;
  }),
  actions: {
    updateRating: function(params) { var song = params.item,
      rating = params.rating;
      song.set('rating', rating);
    }
  }

});
