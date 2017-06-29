import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, attr, hasMany } = DS;

export default Model.extend(
  {
    name        : attr('string'),
    description : attr(),
    songs       : hasMany('song'),
    slug        : computed('name', function () {
      return this.get('name').dasherize();
    })
  });
