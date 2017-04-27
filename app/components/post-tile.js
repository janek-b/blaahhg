import Ember from 'ember';

export default Ember.Component.extend({
  getUser: Ember.inject.service('get-user'),
  makeComment: false,
  actions: {
    toggleComment: function() {
      this.toggleProperty('makeComment');
    },
    saveComment: function() {
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          text: this.get('text'),
          timestamp: "temporary timestamp",
          post: this.get('post'),
          user: result
        };
        this.sendAction('saveComment', params);
      });
    }
  }


});
