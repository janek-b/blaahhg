import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var user = params.user;
      console.log(user.id);
      user.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return user.save();
      })
      this.transitionTo('index');
      // console.log(params);
      // console.log(this.get('session').fetch().then(result => result).catch(function() {}).then(result => result));
    }
  }
});
