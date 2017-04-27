import Ember from 'ember';

export function commentCounter([params]/*, hash*/) {
  var topComments = params.filter((comment, index) => {
    return index < 5;
  });
  return topComments;
}

export default Ember.Helper.helper(commentCounter);
