import Ember from 'ember';

export default Ember.Route.extend({
  saveComment: Ember.inject.service('save-comment'),
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    saveComment(params) {
      this.get('saveComment').saveComment(params);
    }
  }
});
