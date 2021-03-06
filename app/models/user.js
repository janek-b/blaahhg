import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  userID: DS.attr(),
  photoURL: DS.attr(),
  posts: DS.hasMany('post', {async: true, inverse: 'user'}),
  comments: DS.hasMany('comment', {async: true})
});
