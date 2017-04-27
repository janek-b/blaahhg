import Ember from 'ember';

export default Ember.Component.extend({
  getUser: Ember.inject.service('get-user'),
  actions: {
    savePost() {
      var timestamp = (new Date()).toJSON();
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          title: this.get('title'),
          imgURL: this.get('imgURL') ? this.get('imgURL') : "",
          body: this.get('body') ? this.get('body') : "",
          timestamp: (new Date()).toJSON(),
          user: result
        };
        this.sendAction('savePost', params);
      });
    }
  }
});
