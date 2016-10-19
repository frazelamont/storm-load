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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNLDBCQUEwQixDQUFDLFlBQU07QUFDbkMsNkJBQUssQ0FBQyx5QkFBRCxDQUFMLEVBQ0ssSUFETCxDQUNVLFlBQUs7QUFDUCxZQUFJLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQUFYOztBQUVaLFlBQUksSUFBSSxHQUFHLEtBQUgsQ0FBUyxNQUFULEdBQ0gsTUFERyxDQUNJLENBQUMsQ0FBRCxFQUFJLEdBQUcsR0FBSCxDQUFPLElBQVAsQ0FBSixDQURKLEVBRUgsS0FGRyxDQUVHLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FGSCxDQUFSOztBQUlBLFdBQUcsTUFBSCxDQUFVLFFBQVYsRUFDRyxTQURILENBQ2EsS0FEYixFQUVLLElBRkwsQ0FFVSxJQUZWLEVBR0csS0FISCxHQUdXLE1BSFgsQ0FHa0IsS0FIbEIsRUFJSyxLQUpMLENBSVcsT0FKWCxFQUlvQixVQUFTLENBQVQsRUFBWTtBQUFFLG1CQUFPLEVBQUUsQ0FBRixJQUFPLElBQWQ7QUFBcUIsU0FKdkQsRUFLSyxJQUxMLENBS1UsVUFBUyxDQUFULEVBQVk7QUFBRSxtQkFBTyxDQUFQO0FBQVcsU0FMbkM7QUFNUyxLQWRMO0FBZUgsQ0FoQitCLENBQWhDOztBQWtCQSxJQUFHLHNCQUFzQixNQUF6QixFQUFpQyxPQUFPLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQUUsNEJBQXdCLE9BQXhCLENBQWdDLFVBQUMsRUFBRDtBQUFBLGVBQVEsSUFBUjtBQUFBLEtBQWhDO0FBQWdELENBQXBHOzs7Ozs7OztBQ3BCakM7Ozs7OztBQU1BLElBQU0sZUFBZSxTQUFmLFlBQWUsTUFBTztBQUN4QixXQUFPLElBQUksT0FBSixDQUFZLFVBQVMsT0FBVCxFQUFrQjtBQUNqQyxZQUFJLENBQUUsTUFBTSxJQUFOLENBQVcsR0FBWCxDQUFOLEVBQXVCO0FBQ25CLG9CQUFRLEdBQVIsQ0FBWSxNQUFNLG1CQUFsQjtBQUNBLG1CQUFPLFNBQVA7QUFDSDtBQUNELFlBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLGVBQU8sR0FBUCxHQUFhLEdBQWI7QUFDQSxpQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixNQUExQjtBQUNBLGVBQU8sTUFBUCxHQUFnQixPQUFPLE9BQVAsR0FBaUIsT0FBakM7QUFDSCxLQVRNLENBQVA7QUFVSCxDQVhEOztrQkFhZSxnQkFBUTtBQUNuQixXQUFPLElBQUksT0FBSixDQUFZLFVBQVMsT0FBVCxFQUFrQjtBQUNqQyxpQkFBUyxJQUFULEdBQWdCO0FBQ1osZ0JBQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0IsT0FBTyxTQUFQO0FBQ2xCLGdCQUFJLE1BQU0sS0FBSyxLQUFMLEVBQVY7QUFDQTtBQUNBLHlCQUFhLEdBQWIsRUFBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFDSDtBQUNEO0FBQ0gsS0FSTSxDQUFQO0FBU0gsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgTG9hZCBmcm9tICcuL2xpYnMvc3Rvcm0tbG9hZCc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHtcbiAgICBMb2FkKFsnLy9kM2pzLm9yZy9kMy52My5taW4uanMnXSlcbiAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFs0LCA4LCAxNSwgMTYsIDIzLCA0Ml07XG5cbnZhciB4ID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSldKVxuICAgIC5yYW5nZShbMCwgNDIwXSk7XG5cbmQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAuc2VsZWN0QWxsKFwiZGl2XCIpXG4gICAgLmRhdGEoZGF0YSlcbiAgLmVudGVyKCkuYXBwZW5kKFwiZGl2XCIpXG4gICAgLnN0eWxlKFwid2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkKSArIFwicHhcIjsgfSlcbiAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KTtcbiAgICAgICAgfSk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tbG9hZDogTGlnaHR3ZWlnaHQgcHJvbWlzZS1iYXNlZCBzY3JpcHQgbG9hZGVyXG4gKiBAdmVyc2lvbiAwLjEuMDogV2VkLCAxOSBPY3QgMjAxNiAyMDo1NDowNCBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGNyZWF0ZVNjcmlwdCA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKCEoL2pzJC8udGVzdCh1cmwpKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwgKyBcIiBpcyBub3QgYSBqcyBmaWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbmVycm9yID0gcmVzb2x2ZTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXJscyA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmICghdXJscy5sZW5ndGgpIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICBsZXQgdXJsID0gdXJscy5zaGlmdCgpO1xuICAgICAgICAgICAgLy93ZSdyZSBjcmVhdGluZyB0aGVzZSBzZXF1ZW50aWFsbHksIHNvIHRoZXkgbG9hZCBpbiB0aGUgb3JkZXIgdGhleSdyZSBwYXNzZWQgaW5cbiAgICAgICAgICAgIGNyZWF0ZVNjcmlwdCh1cmwpLnRoZW4obmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpO1xuICAgIH0pO1xufTsiXX0=
