# ES6+ in Cloud Functions for Firebase
Use ES6+ to develop Cloud Functions for Firebase today!

Here is the accompanying [Medium post](https://medium.com/@jthegedus/es6-in-cloud-functions-for-firebase-959b35e31cb0).

## TLDR;
Develop your Coud Functions in a different directory to the default `./functions` directory. I suggest `./functionsES6`. Then use `babel-cli`, `babel-preset-es2015` and `rimraf` with some npm scripts to transpile to ES2015 into the default `./functions` directory on deploy (`yarn deploy`).

Files of interest:
*   Root [package.json](https://github.com/jthegedus/firebase-functions-es6-example/blob/master/package.json)
*   Cloud Functions [package.json](https://github.com/jthegedus/firebase-functions-es6-example/blob/master/functionsES6/package.json)
*   Cloud Functions [index.js](https://github.com/jthegedus/firebase-functions-es6-example/blob/master/functionsES6/index.js)

## Installation
```
git clone https://github.com/jthegedus/firebase-functions-es6-example
cd firebase-functions-es6-example
yarn install
```

## Deploy to Firebase
```
yarn deploy
```
N.B.: You will need to connect the project to your Firebase project. Edit the name in [.firebaserc](https://github.com/jthegedus/firebase-functions-es6-example/blob/master/.firebaserc)
