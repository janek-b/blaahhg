import Ember from 'ember';
// var userID = require('../routes/application.js').userID;
import { userID } from '../routes/application'

export default Ember.Component.extend({
  getUser: Ember.inject.service('get-user'),
  actions: {
    savePost() {
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          title: this.get('title'),
          imgURL: this.get('imgURL'),
          body: this.get('body'),
          userID: this.get('userid'),
          timestamp: "temporary timestamp",
          user: result
        }
        console.log(params);
        this.sendAction('savePost', params)
      })
      // var params = {
      //   title: this.get('title'),
      //   imgURL: this.get('imgURL'),
      //   body: this.get('body'),
      //   userID: this.get('userid'),
      //   timestamp: "temporary timestamp",
      //   user: this.get('getUser').getUser(this.get('userid'))
      // }
      // console.log(this.get('session').fetch());
      // this.get('getUser').getUser('SE6AsW12YXPHEKoxe5DMS151sf33').then(result => console.log(result));
      // console.log(this.get('userid'));
      // console.log(this.get('getUser').getCurrentUser());
      // this.sendAction('savePost', params);
    }
  }
});
