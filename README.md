#Storm load

[![Build Status](https://travis-ci.org/mjbp/storm-load.svg?branch=master)](https://travis-ci.org/mjbp/storm-load)
[![codecov.io](http://codecov.io/github/mjbp/storm-load/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-load?branch=master)
[![npm version](https://badge.fury.io/js/storm-load.svg)](https://badge.fury.io/js/storm-load)

Lightweight promise-based script loader for asynchronous and synchronous JS loading

##Usage

JS
```
npm i -S storm-load
```
either using es6 import
```
import Load from 'storm-load;

Load('/content/js/async/storm-component-boilerplate.js')
    .then(() => {
        StormComponentBoilerplate.init('.js-component-boilerplate');
    });
```
or es5 commonjs (legacy)
```
var Load = require('storm-load');

Load('/content/js/async/storm-component-boilerplate.js')
    .then(() => {
        StormComponentBoilerplate.init('.js-component-boilerplate');
    });
```


##Example
[https://mjbp.github.io/storm-load](https://mjbp.github.io/storm-load)


##API
####`Load([url])`
Loads an array of scripts asynchronously, returning a promise

####`Load([url], false)`
Loads an array of scripts synchronously (in order), returning a promise

##Tests
```
npm run test
```

##Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

The es5 version depends upon Promises so all evergreen browsers are supported out of the box, ie9+ is supported with polyfills. ie8+ will work with even more polyfils for Array functions and eventListeners.

##Dependencies
None

##License
MIT