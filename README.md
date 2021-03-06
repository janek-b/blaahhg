# blaahhg

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd blaahhg`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

* authentication implemented by following this guide https://www.danielgynn.com/third-party-auth-in-ember-with-firebase/

* firebase config settings should be located inside .env file. use the below example as a guide.
```
exports.firebaseConfig = {
  apiKey: 'YOUR-FIREBASE-API-KEY',
  authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com',
  databaseURL: 'https://YOUR-FIREBASE-APP.firebaseapp.com',
  storageBucket: 'YOUR-FIREBASE-APP.appspot.com'
}
```
* firebase database rules should be set to
```
{
  "rules": {
    ".read": true,
    ".write": "auth != null",
    "users": {
      ".indexOn": "userID"
    }
  }
}
```

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
