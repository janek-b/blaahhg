import Ember from 'ember';

export default Ember.Route.extend({
  saveComment: Ember.inject.service('save-comment'),
  model() {
    return this.store.findAll('post', {reload: true}).then(posts => posts.sortBy('timestamp').reverse());
  },
  actions: {
    saveComment(params) {
      this.get('saveComment').saveComment(params);
    },
    addFavorite(params) {
      this.get('saveComment').addFavorite(params);
    },
    removeFavorite(params) {
      this.get('saveComment').removeFavorite(params);
    },
  },
});
