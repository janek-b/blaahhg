import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  saveComment(params) {
    var newComment = this.get('store').createRecord('comment', params);
    var user = params.user;
    var post = params.post;
    user.get('comments').addObject(newComment);
    post.get('comments').addObject(newComment);
    newComment.save().then(function() {
      return user.save();
    }).then(function() {
      return post.save();
    })
  }
});
