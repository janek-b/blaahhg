import Ember from 'ember';

export default Ember.Route.extend({
  getUser: Ember.inject.service('get-user'),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {
    });
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: provider,
      }).then(data => {
        var userID = data.currentUser.uid;
        this.get('getUser').getUser(userID).catch(error => {
          var params = {
            name: data.currentUser.displayName,
            userID: userID,
            photoURL: data.currentUser.photoURL
          };
          var newUser = this.get('store').createRecord('user', params);
          newUser.save();
        });
      });
    },

    signOut: function() {
      this.get('session').close();
    }

  },
});
