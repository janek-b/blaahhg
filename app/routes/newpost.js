import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!(this.get('session').get('isAuthenticated'))) {
      this.transitionTo('index');
    }
  },
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var user = params.user;
      user.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return user.save();
      })
      this.transitionTo('index');
    }
  }
});
