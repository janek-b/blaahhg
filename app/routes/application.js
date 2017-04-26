import Ember from 'ember';


export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {
    });
  },

  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: provider,
      }).then(data => {
        console.log(data.currentUser);
        var userID = data.currentUser.uid;
        // var storedUser = this.get('store').findRecord('user', 0).then(result => console.log(result.toJSON().name));
        var storedUser = this.get('store').query('user', {
          filter: {
            'userID': userID
          }}).then(users => {
            return users.get('firstObject');
          }).then(result => console.log(result.toJSON()));
        // console.log(storedUser);
        // console.log(this.get('session').get('currentUser'))
        // console.log(this);
      });
    },

    signOut: function() {
      this.get('session').close();
    },

  },
});
