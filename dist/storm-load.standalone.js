/**
 * @name storm-load: Lightweight promise-based script loader
 * @version 0.1.0: Thu, 20 Oct 2016 12:55:45 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormLoad = mod.exports.default
   }

}(this, function(exports) {
   "use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var create = function create(url) {
    return new Promise(function (resolve) {
        if (!/js$/.test(url)) {
            console.log(url + " is not a js file");
            return resolve();
        }
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
        script.onload = script.onerror = resolve;
    });
};

var synchronous = exports.synchronous = function synchronous(urls) {
    return new Promise(function (resolve, reject) {
        var next = function next() {
            if (!urls.length) return resolve();
            var url = urls.shift();
            create(url).then(next);
        };
        next();
    });
};

exports.default = function (urls) {
    var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (!async) return synchronous(urls);

    return new Promise(function (resolve, reject) {
        if (!!!Array.isArray(urls)) return reject();

        return Promise.all(urls.map(function (url) {
            return create(url);
        })).then(resolve, reject);
    });
};;
}));
