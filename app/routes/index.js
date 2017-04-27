import Ember from 'ember';

export default Ember.Route.extend({
  saveComment: Ember.inject.service('save-comment'),
  model() {
    return this.store.findAll('post');
  },
  actions: {
    saveComment(params) {
      this.get('saveComment').saveComment(params);
    }
  }
});
