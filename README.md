#Storm load

[![Build Status](https://travis-ci.org/mjbp/storm-load.svg?branch=master)](https://travis-ci.org/mjbp/storm-load)
[![codecov.io](http://codecov.io/github/mjbp/storm-load/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-load?branch=master)
[![npm version](https://badge.fury.io/js/storm-load.svg)](https://badge.fury.io/js/storm-load)

Lightweight promise-based script loader

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
Loads an array fo scripts, returning a promise

##Tests
```
npm run test
```

##License
MIT