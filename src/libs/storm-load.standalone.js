/**
 * @name storm-load: Lightweight promise-based script loader
 * @version 0.1.0: Wed, 19 Oct 2016 20:54:04 GMT
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
var createScript = function createScript(url) {
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

exports.default = function (urls) {
    return new Promise(function (resolve) {
        function next() {
            if (!urls.length) return resolve();
            var url = urls.shift();
            //we're creating these sequentially, so they load in the order they're passed in
            createScript(url).then(next);
        }
        next();
    });
};;
}));
