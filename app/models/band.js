import Ember from 'ember';

const { Object, computed, on } = Ember;
export default Object.extend(
  {
    name        : '',
    description : '',
    slug        : computed('name', function () {
      return this.get('name').dasherize();
    }),
    setupSongs: on('init', function () {
      if (!this.get('songs')) {
        this.set('songs', []);
      }
    })
  });
