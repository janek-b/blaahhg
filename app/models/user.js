import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  userID: DS.attr(),
  photoURL: DS.attr()
});
