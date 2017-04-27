import Ember from 'ember';

export default Ember.Route.extend({
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
