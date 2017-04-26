import Ember from 'ember';

var userID

export default Ember.Route.extend({
  getUser: Ember.inject.service('get-user'),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {
    });
  },
  // getUser: function(userID) {
  //   return this.get('store').query('user', {
  //     orderBy: 'userID',
  //     equalTo: userID}).then(users => {
  //       return users.get('firstObject');
  //     }).then(result => {
  //       return result.toJSON();
  //     })
  // },

  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: provider,
      }).then(data => {
        userID = data.currentUser.uid;
        this.get('getUser').getUser(userID).catch(error => {
          var params = {
            name: data.currentUser.displayName,
            userID: userID,
            photoURL: data.currentUser.photoURL
          };
          var newUser = this.get('store').createRecord('user', params);
          newUser.save();
        });
        // var storedUser = this.get('store').query('user', {
        //   orderBy: 'userID',
        //   equalTo: userID}).then(users => {
        //     return users.get('firstObject');
        //   }).then(result => {
        //     return result.toJSON();
        //   }).catch(error => {
        //     var params = {
        //       name: data.currentUser.displayName,
        //       userID: userID,
        //       photoURL: data.currentUser.photoURL
        //     };
        //     var newUser = this.get('store').createRecord('user', params);
        //     newUser.save();
        //   });
      });
    },

    signOut: function() {
      this.get('session').close();
    },

  },
});

export {userID}
