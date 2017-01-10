(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormLoad = require('./libs/storm-load');

var _stormLoad2 = _interopRequireDefault(_stormLoad);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
    (0, _stormLoad2.default)(['//d3js.org/d3.v3.min.js']).then(function () {
        var data = [4, 8, 15, 16, 23, 42];

        var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);

        d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function (d) {
            return x(d) + "px";
        }).text(function (d) {
            return d;
        });
    }).catch(function (e) {
        console.log(e);
    });

    (0, _stormLoad2.default)(['//d3js.org/d3.v3.min.js', '//cdnjs.cloudflare.com/ajax/libs/d3.chart/0.2.0/d3.chart.js'], false).then(function () {
        // define a new chart type: a circle chart
        d3.chart("CircleChart", {

            initialize: function initialize() {
                // create a layer of circles that will go into
                // a new group element on the base of the chart
                this.layer("circles", this.base.append("g"), {

                    // select the elements we wish to bind to and
                    // bind the data to them.
                    dataBind: function dataBind(data) {
                        return this.selectAll("circle").data(data);
                    },

                    // insert actual circles
                    insert: function insert() {
                        return this.append("circle");
                    },

                    // define lifecycle events
                    events: {

                        // paint new elements, but set their radius to 0
                        // and make them red
                        "enter": function enter() {
                            this.attr("cx", function (d) {
                                return d * 10;
                            }).attr("cy", 10).attr("r", 0).style("fill", "red");
                        },
                        // then transition them to a radius of 5 and change
                        // their fill to blue
                        "enter:transition": function enterTransition() {
                            var chart = this.chart();
                            this.delay(500).attr("r", 5).style("fill", chart.color());
                        }
                    }
                });
            },

            // set/get the color to use for the circles as they are
            // rendered.
            color: function color(newColor) {
                if (arguments.length === 0) {
                    return this._color;
                }
                this._color = newColor;
                return this;
            }
        });

        // create an instance of the chart on a d3 selection
        var chart = d3.select('.chart-2').append("svg").attr("height", 30).attr("width", 400).chart("CircleChart").color("orange");

        // render it with some data
        chart.draw([1, 4, 6, 9, 12, 13, 30]);
    }).catch(function (e) {
        console.log(e);
    });
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
    onDOMContentLoadedTasks.forEach(function (fn) {
        return fn();
    });
});

},{"./libs/storm-load":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @name storm-load: Lightweight promise-based script loader
 * @version 0.2.6: Tue, 10 Jan 2017 10:30:27 GMT
 * @author stormid
 * @license MIT
 */
var create = function create(url) {
	return new Promise(function (resolve, reject) {
		var s = document.createElement('script');
		s.src = url;
		s.onload = s.onreadystatechange = function () {
			if (!this.readyState || this.readyState === 'complete') resolve();
		};
		s.onerror = s.onabort = reject;
		document.head.appendChild(s);
	});
};

var synchronous = exports.synchronous = function synchronous(urls) {
	if (!Array.isArray(urls)) throw new Error('Must be an array of URLs');

	return new Promise(function (resolve, reject) {
		var next = function next() {
			if (!urls.length) return resolve();
			create(urls.shift()).then(next).catch(reject);
		};
		next();
	});
};

exports.default = function (urls) {
	var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	if (!async) return synchronous(urls);

	if (!Array.isArray(urls)) throw new Error('Must be an array of URLs');

	return Promise.all(urls.map(function (url) {
		return create(url);
	}));
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLFlBQU0sQUFDbkM7NkJBQUssQ0FBTCxBQUFLLEFBQUMsNEJBQU4sQUFDSyxLQUFLLFlBQUssQUFDUDtZQUFJLE9BQU8sQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKLEFBQU8sSUFBUCxBQUFXLElBQVgsQUFBZSxJQUExQixBQUFXLEFBQW1CLEFBRTlCOztZQUFJLElBQUksR0FBQSxBQUFHLE1BQUgsQUFBUyxTQUFULEFBQ0gsT0FBTyxDQUFBLEFBQUMsR0FBRyxHQUFBLEFBQUcsSUFEWCxBQUNJLEFBQUksQUFBTyxRQURmLEFBRUgsTUFBTSxDQUFBLEFBQUMsR0FGWixBQUFRLEFBRUcsQUFBSSxBQUVmOztXQUFBLEFBQUcsT0FBSCxBQUFVLFVBQVYsQUFDQyxVQURELEFBQ1csT0FEWCxBQUVLLEtBRkwsQUFFVSxNQUZWLEFBR0MsUUFIRCxBQUdTLE9BSFQsQUFHZ0IsT0FIaEIsQUFJSyxNQUpMLEFBSVcsU0FBUyxVQUFBLEFBQVMsR0FBRyxBQUFFO21CQUFPLEVBQUEsQUFBRSxLQUFULEFBQWMsQUFBTztBQUp2RCxXQUFBLEFBS0ssS0FBSyxVQUFBLEFBQVMsR0FBRyxBQUFFO21CQUFBLEFBQU8sQUFBSTtBQUxuQyxBQU1IO0FBZEwsT0FBQSxBQWVLLE1BQU0sYUFBSyxBQUNSO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QUFqQkwsQUFtQkk7OzZCQUFLLENBQUEsQUFBQywyQkFBTixBQUFLLEFBQTRCLGdFQUFqQyxBQUFpRyxPQUFqRyxBQUNLLEtBQUssWUFBSyxBQUNQO0FBQ0E7V0FBQSxBQUFHLE1BQUgsQUFBUzs7d0JBRUcsc0JBQVcsQUFDbkI7QUFDQTtBQUNBO3FCQUFBLEFB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TSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFFekM7O1lBQU8sQUFBSSxRQUFRLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUN2QztNQUFJLE9BQU8sU0FBUCxBQUFPLE9BQU0sQUFDaEI7T0FBSSxDQUFDLEtBQUwsQUFBVSxRQUFRLE9BQUEsQUFBTyxBQUN6QjtVQUFPLEtBQVAsQUFBTyxBQUFLLFNBQVosQUFBcUIsS0FBckIsQUFBMEIsTUFBMUIsQUFBZ0MsTUFBaEMsQUFBc0MsQUFDdEM7QUFIRCxBQUlBO0FBQ0E7QUFORCxBQUFPLEFBT1AsRUFQTztBQUhEOztrQkFZUSxVQUFBLEFBQUMsTUFBdUI7S0FBakIsQUFBaUIsNEVBQVQsQUFBUyxBQUN0Qzs7S0FBSSxDQUFKLEFBQUssT0FBTyxPQUFPLFlBQVAsQUFBTyxBQUFZLEFBRS9COztLQUFHLENBQUMsTUFBQSxBQUFNLFFBQVYsQUFBSSxBQUFjLE9BQU8sTUFBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFFekM7O2dCQUFPLEFBQVEsU0FBSSxBQUFLLElBQUksZUFBQTtTQUFPLE9BQVAsQUFBTyxBQUFPO0FBQTFDLEFBQU8sQUFBWSxBQUNuQixFQURtQixDQUFaO0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IExvYWQgZnJvbSAnLi9saWJzL3N0b3JtLWxvYWQnO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiB7XG4gICAgTG9hZChbJy8vZDNqcy5vcmcvZDMudjMubWluLmpzJ10pXG4gICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBbNCwgOCwgMTUsIDE2LCAyMywgNDJdO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEpXSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDQyMF0pO1xuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkKSArIFwicHhcIjsgfSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIExvYWQoWycvL2QzanMub3JnL2QzLnYzLm1pbi5qcycsICcvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kMy5jaGFydC8wLjIuMC9kMy5jaGFydC5qcyddLCBmYWxzZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgIC8vIGRlZmluZSBhIG5ldyBjaGFydCB0eXBlOiBhIGNpcmNsZSBjaGFydFxuICAgICAgICAgICAgICAgIGQzLmNoYXJ0KFwiQ2lyY2xlQ2hhcnRcIiwge1xuXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGxheWVyIG9mIGNpcmNsZXMgdGhhdCB3aWxsIGdvIGludG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYSBuZXcgZ3JvdXAgZWxlbWVudCBvbiB0aGUgYmFzZSBvZiB0aGUgY2hhcnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllcihcImNpcmNsZXNcIiwgdGhpcy5iYXNlLmFwcGVuZChcImdcIiksIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIGVsZW1lbnRzIHdlIHdpc2ggdG8gYmluZCB0byBhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgZGF0YSB0byB0aGVtLlxuICAgICAgICAgICAgICAgICAgICBkYXRhQmluZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgYWN0dWFsIGNpcmNsZXNcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZChcImNpcmNsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZpbmUgbGlmZWN5Y2xlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFpbnQgbmV3IGVsZW1lbnRzLCBidXQgc2V0IHRoZWlyIHJhZGl1cyB0byAwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbWFrZSB0aGVtIHJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZCAqIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJyZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB0cmFuc2l0aW9uIHRoZW0gdG8gYSByYWRpdXMgb2YgNSBhbmQgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVpciBmaWxsIHRvIGJsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXI6dHJhbnNpdGlvblwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGFydCA9IHRoaXMuY2hhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkoNTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgY2hhcnQuY29sb3IoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIHNldC9nZXQgdGhlIGNvbG9yIHRvIHVzZSBmb3IgdGhlIGNpcmNsZXMgYXMgdGhleSBhcmVcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJlZC5cbiAgICAgICAgICAgICAgICBjb2xvcjogZnVuY3Rpb24obmV3Q29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gbmV3Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2hhcnQgb24gYSBkMyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgY2hhcnQgPSBkMy5zZWxlY3QoJy5jaGFydC0yJylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMzApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCA0MDApXG4gICAgICAgICAgICAgICAgLmNoYXJ0KFwiQ2lyY2xlQ2hhcnRcIilcbiAgICAgICAgICAgICAgICAuY29sb3IoXCJvcmFuZ2VcIik7XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgaXQgd2l0aCBzb21lIGRhdGFcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KFsxLDQsNiw5LDEyLDEzLDMwXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfSk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tbG9hZDogTGlnaHR3ZWlnaHQgcHJvbWlzZS1iYXNlZCBzY3JpcHQgbG9hZGVyXG4gKiBAdmVyc2lvbiAwLjIuNjogVHVlLCAxMCBKYW4gMjAxNyAxMDozMDoyNyBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGNyZWF0ZSA9IHVybCA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzLnNyYyA9IHVybDtcblx0XHRzLm9ubG9hZCA9IHMub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMucmVhZHlTdGF0ZSB8fCB0aGlzLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHJlc29sdmUoKTtcblx0XHR9O1xuXHRcdHMub25lcnJvciA9IHMub25hYm9ydCA9IHJlamVjdDtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzeW5jaHJvbm91cyA9IHVybHMgPT4ge1xuXHRpZighQXJyYXkuaXNBcnJheSh1cmxzKSkgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGJlIGFuIGFycmF5IG9mIFVSTHMnKTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxldCBuZXh0ID0gKCkgPT4ge1xuXHRcdFx0aWYgKCF1cmxzLmxlbmd0aCkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdGNyZWF0ZSh1cmxzLnNoaWZ0KCkpLnRoZW4obmV4dCkuY2F0Y2gocmVqZWN0KTtcblx0XHR9O1xuXHRcdG5leHQoKTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAodXJscywgYXN5bmMgPSB0cnVlKSA9PiB7XG5cdGlmICghYXN5bmMpIHJldHVybiBzeW5jaHJvbm91cyh1cmxzKTtcblx0XG5cdGlmKCFBcnJheS5pc0FycmF5KHVybHMpKSB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYW4gYXJyYXkgb2YgVVJMcycpOyBcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwodXJscy5tYXAodXJsID0+IGNyZWF0ZSh1cmwpKSk7XG59OyJdfQ==
