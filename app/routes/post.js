import Ember from 'ember';

export default Ember.Route.extend({
  saveComment: Ember.inject.service('save-comment'),
  model(params) {
    return this.store.findRecord('post', params.post_id)
  },
  actions: {
    saveComment(params) {
      this.get('saveComment').saveComment(params);
    }
  }
});
