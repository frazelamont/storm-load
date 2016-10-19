(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormLoad = require('./libs/storm-load');

var _stormLoad2 = _interopRequireDefault(_stormLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onDOMContentLoadedTasks = [function () {
    (0, _stormLoad2.default)(['//d3js.org/d3.v3.min.js']).then(function () {
        var data = [4, 8, 15, 16, 23, 42];

        var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);

        d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function (d) {
            return x(d) + "px";
        }).text(function (d) {
            return d;
        });
    });
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
    onDOMContentLoadedTasks.forEach(function (fn) {
        return fn();
    });
});

},{"./libs/storm-load":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name storm-load: Lightweight promise-based script loader
 * @version 0.1.0: Wed, 19 Oct 2016 20:54:04 GMT
 * @author stormid
 * @license MIT
 */
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
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNLDBCQUEwQixDQUFDLFlBQU07QUFDbkMsNkJBQUssQ0FBQyx5QkFBRCxDQUFMLEVBQ0ssSUFETCxDQUNVLFlBQUs7QUFDUCxZQUFJLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQUFYOztBQUVBLFlBQUksSUFBSSxHQUFHLEtBQUgsQ0FBUyxNQUFULEdBQ0gsTUFERyxDQUNJLENBQUMsQ0FBRCxFQUFJLEdBQUcsR0FBSCxDQUFPLElBQVAsQ0FBSixDQURKLEVBRUgsS0FGRyxDQUVHLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FGSCxDQUFSOztBQUlBLFdBQUcsTUFBSCxDQUFVLFFBQVYsRUFDQyxTQURELENBQ1csS0FEWCxFQUVLLElBRkwsQ0FFVSxJQUZWLEVBR0MsS0FIRCxHQUdTLE1BSFQsQ0FHZ0IsS0FIaEIsRUFJSyxLQUpMLENBSVcsT0FKWCxFQUlvQixVQUFTLENBQVQsRUFBWTtBQUFFLG1CQUFPLEVBQUUsQ0FBRixJQUFPLElBQWQ7QUFBcUIsU0FKdkQsRUFLSyxJQUxMLENBS1UsVUFBUyxDQUFULEVBQVk7QUFBRSxtQkFBTyxDQUFQO0FBQVcsU0FMbkM7QUFNSCxLQWRMO0FBZUgsQ0FoQitCLENBQWhDOztBQWtCQSxJQUFHLHNCQUFzQixNQUF6QixFQUFpQyxPQUFPLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQUUsNEJBQXdCLE9BQXhCLENBQWdDLFVBQUMsRUFBRDtBQUFBLGVBQVEsSUFBUjtBQUFBLEtBQWhDO0FBQWdELENBQXBHOzs7Ozs7OztBQ3BCakM7Ozs7OztBQU1BLElBQU0sZUFBZSxTQUFmLFlBQWUsTUFBTztBQUN4QixXQUFPLElBQUksT0FBSixDQUFZLFVBQVMsT0FBVCxFQUFrQjtBQUNqQyxZQUFJLENBQUUsTUFBTSxJQUFOLENBQVcsR0FBWCxDQUFOLEVBQXVCO0FBQ25CLG9CQUFRLEdBQVIsQ0FBWSxNQUFNLG1CQUFsQjtBQUNBLG1CQUFPLFNBQVA7QUFDSDtBQUNELFlBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLGVBQU8sR0FBUCxHQUFhLEdBQWI7QUFDQSxpQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixNQUExQjtBQUNBLGVBQU8sTUFBUCxHQUFnQixPQUFPLE9BQVAsR0FBaUIsT0FBakM7QUFDSCxLQVRNLENBQVA7QUFVSCxDQVhEOztrQkFhZSxnQkFBUTtBQUNuQixXQUFPLElBQUksT0FBSixDQUFZLFVBQVMsT0FBVCxFQUFrQjtBQUNqQyxpQkFBUyxJQUFULEdBQWdCO0FBQ1osZ0JBQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0IsT0FBTyxTQUFQO0FBQ2xCLGdCQUFJLE1BQU0sS0FBSyxLQUFMLEVBQVY7QUFDQTtBQUNBLHlCQUFhLEdBQWIsRUFBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFDSDtBQUNEO0FBQ0gsS0FSTSxDQUFQO0FBU0gsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgTG9hZCBmcm9tICcuL2xpYnMvc3Rvcm0tbG9hZCc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHtcbiAgICBMb2FkKFsnLy9kM2pzLm9yZy9kMy52My5taW4uanMnXSlcbiAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICBsZXQgZGF0YSA9IFs0LCA4LCAxNSwgMTYsIDIzLCA0Ml07XG5cbiAgICAgICAgICAgIGxldCB4ID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSldKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgNDIwXSk7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcImRpdlwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4KGQpICsgXCJweFwiOyB9KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pO1xuICAgICAgICB9KTtcbn1dO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goKGZuKSA9PiBmbigpKTsgfSk7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1sb2FkOiBMaWdodHdlaWdodCBwcm9taXNlLWJhc2VkIHNjcmlwdCBsb2FkZXJcbiAqIEB2ZXJzaW9uIDAuMS4wOiBXZWQsIDE5IE9jdCAyMDE2IDIwOjU0OjA0IEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuY29uc3QgY3JlYXRlU2NyaXB0ID0gdXJsID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBpZiAoISgvanMkLy50ZXN0KHVybCkpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCArIFwiIGlzIG5vdCBhIGpzIGZpbGVcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9uZXJyb3IgPSByZXNvbHZlO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cmxzID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKCF1cmxzLmxlbmd0aCkgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSB1cmxzLnNoaWZ0KCk7XG4gICAgICAgICAgICAvL3dlJ3JlIGNyZWF0aW5nIHRoZXNlIHNlcXVlbnRpYWxseSwgc28gdGhleSBsb2FkIGluIHRoZSBvcmRlciB0aGV5J3JlIHBhc3NlZCBpblxuICAgICAgICAgICAgY3JlYXRlU2NyaXB0KHVybCkudGhlbihuZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfSk7XG59OyJdfQ==
