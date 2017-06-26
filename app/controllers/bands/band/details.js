import Ember from 'ember';

const { Controller } = Ember;
export default Controller.extend({
  isEditing : false,
  actions   : {
    edit() {
      this.set('isEditing', true);
    },
    save() {
      this.set('isEditing', false);
    }
  }
});
