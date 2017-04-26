import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  currentUser: null,

  // init() {
  //   this._super(...arguments);
  //   this.set('currentUser', {});
  // },
  getUser(userID) {
    return this.get('store').query('user', {
      orderBy: 'userID',
      equalTo: userID}).then(users => {
        console.log(users.get('firstObject'));
        return users.get('firstObject').id;
      }).then(result => {
        return this.get('store').findRecord('user', result);
      }).then(user => {
        console.log(user);
        this.set('currentUser', user);
        return user;
      })
  },
  getCurrentUser() {
    return this.get('currentUser');
  }
});
