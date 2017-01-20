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
 * @version 0.4.0: Fri, 20 Jan 2017 16:37:53 GMT
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

	urls = [].concat(urls);
	if (!async) return synchronous(urls);

	return Promise.all(urls.map(function (url) {
		return create(url);
	}));
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLFlBQU0sQUFDbkM7NkJBQUssQ0FBTCxBQUFLLEFBQUMsNEJBQU4sQUFDSyxLQUFLLFlBQUssQUFDUDtZQUFJLE9BQU8sQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKLEFBQU8sSUFBUCxBQUFXLElBQVgsQUFBZSxJQUExQixBQUFXLEFBQW1CLEFBRTlCOztZQUFJLElBQUksR0FBQSxBQUFHLE1BQUgsQUFBUyxTQUFULEFBQ0gsT0FBTyxDQUFBLEFBQUMsR0FBRyxHQUFBLEFBQUcsSUFEWCxBQUNJLEFBQUksQUFBTyxRQURmLEFBRUgsTUFBTSxDQUFBLEFBQUMsR0FGWixBQUFRLEFBRUcsQUFBSSxBQUVmOztXQUFBLEFBQUcsT0FBSCxBQUFVLFVBQVYsQUFDQyxVQURELEFBQ1csT0FEWCxBQUVLLEtBRkwsQUFFVSxNQUZWLEFBR0MsUUFIRCxBQUdTLE9BSFQsQUFHZ0IsT0FIaEIsQUFJSyxNQUpMLEFBSVcsU0FBUyxVQUFBLEFBQVMsR0FBRyxBQUFFO21CQUFPLEVBQUEsQUFBRSxLQUFULEFBQWMsQUFBTztBQUp2RCxXQUFBLEFBS0ssS0FBSyxVQUFBLEFBQVMsR0FBRyxBQUFFO21CQUFBLEFBQU8sQUFBSTtBQUxuQyxBQU1IO0FBZEwsT0FBQSxBQWVLLE1BQU0sYUFBSyxBQUNSO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QUFqQkwsQUFtQkk7OzZCQUFLLENBQUEsQUFBQywyQkFBTixBQUFLLEFBQTRCLGdFQUFqQyxBQUFpRyxPQUFqRyxBQUNLLEtBQUssWUFBSyxBQUNQO0FBQ0E7V0FBQSxBQUFHLE1BQUgsQUFBUzs7d0JBRUcsc0JBQVcsQUFDbkI7QUFDQTtBQUNBO3FCQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsS0FBQSxBQUFLLEtBQUwsQUFBVSxPQUFoQyxBQUFzQixBQUFpQjs7QUFHdkM7QUFDQTs4QkFBVSxrQkFBQSxBQUFTLE1BQU0sQUFDckI7K0JBQU8sS0FBQSxBQUFLLFVBQUwsQUFBZSxVQUFmLEFBQ04sS0FERCxBQUFPLEFBQ0QsQUFDVDtBQVA0QyxBQVM3Qzs7QUFDQTs0QkFBUSxrQkFBVyxBQUNmOytCQUFPLEtBQUEsQUFBSyxPQUFaLEFBQU8sQUFBWSxBQUN0QjtBQVo0QyxBQWM3Qzs7QUFDQTs7O0FBR0k7QUFDQTtpQ0FBUyxpQkFBVyxBQUNwQjtpQ0FBQSxBQUFLLEtBQUwsQUFBVSxNQUFNLFVBQUEsQUFBUyxHQUFHLEFBQ3hCO3VDQUFPLElBQVAsQUFBVyxBQUNkO0FBRkQsK0JBQUEsQUFHQyxLQUhELEFBR00sTUFITixBQUdZLElBSFosQUFJQyxLQUpELEFBSU0sS0FKTixBQUlXLEdBSlgsQUFLQyxNQUxELEFBS08sUUFMUCxBQUtlLEFBQ2Q7QUFYRyxBQVlKO0FBQ0E7QUFDQTs0Q0FBb0IsMkJBQVcsQUFDL0I7Z0NBQUksUUFBUSxLQUFaLEFBQVksQUFBSyxBQUNqQjtpQ0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQ0ssS0FETCxBQUNVLEtBRFYsQUFDZSxHQURmLEFBRUssTUFGTCxBQUVXLFFBQVEsTUFGbkIsQUFFbUIsQUFBTSxBQUN4QjtBQWxDTCxBQUE2QyxBQWVyQyxBQXNCWDtBQXRCVyxBQUVKO0FBakJ5QyxBQUU3QztBQVBvQixBQTRDeEI7O0FBQ0E7QUFDQTttQkFBTyxlQUFBLEFBQVMsVUFBVSxBQUN0QjtvQkFBSSxVQUFBLEFBQVUsV0FBZCxBQUF5QixHQUFHLEFBQzVCOzJCQUFPLEtBQVAsQUFBWSxBQUNYO0FBQ0Q7cUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZDt1QkFBQSxBQUFPLEFBQ1Y7QUFwREQsQUFBd0IsQUF1RHhCO0FBdkR3QixBQUV4Qjs7QUFzREE7WUFBSSxRQUFRLEdBQUEsQUFBRyxPQUFILEFBQVUsWUFBVixBQUNYLE9BRFcsQUFDSixPQURJLEFBRVgsS0FGVyxBQUVOLFVBRk0sQUFFSSxJQUZKLEFBR1gsS0FIVyxBQUdOLFNBSE0sQUFHRyxLQUhILEFBSVgsTUFKVyxBQUlMLGVBSkssQUFLWCxNQUxELEFBQVksQUFLTCxBQUVQOztBQUNBO2NBQUEsQUFBTSxLQUFLLENBQUEsQUFBQyxHQUFELEFBQUcsR0FBSCxBQUFLLEdBQUwsQUFBTyxHQUFQLEFBQVMsSUFBVCxBQUFZLElBQXZCLEFBQVcsQUFBZSxBQUM3QjtBQXBFTCxPQUFBLEFBcUVLLE1BQU0sYUFBSyxBQUNSO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QUF2RUwsQUF3RVA7QUE1RkQsQUFBZ0MsQ0FBQTs7QUE4RmhDLElBQUcsc0JBQUgsQUFBeUIsZUFBUSxBQUFPLGlCQUFQLEFBQXdCLG9CQUFvQixZQUFNLEFBQUU7NEJBQUEsQUFBd0IsUUFBUSxVQUFBLEFBQUMsSUFBRDtlQUFBLEFBQVE7QUFBeEMsQUFBZ0Q7QUFBcEcsQ0FBQTs7Ozs7Ozs7QUNoR2pDOzs7Ozs7QUFNQSxJQUFNLFNBQVMsU0FBVCxBQUFTLFlBQU8sQUFDckI7WUFBTyxBQUFJLFFBQVEsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQ3ZDO01BQUksSUFBSSxTQUFBLEFBQVMsY0FBakIsQUFBUSxBQUF1QixBQUMvQjtJQUFBLEFBQUUsTUFBRixBQUFRLEFBQ1I7SUFBQSxBQUFFLFNBQVMsRUFBQSxBQUFFLHFCQUFxQixZQUFXLEFBQzVDO09BQUksQ0FBQyxLQUFELEFBQU0sY0FBYyxLQUFBLEFBQUssZUFBN0IsQUFBNEMsWUFBWSxBQUN4RDtBQUZELEFBR0E7SUFBQSxBQUFFLFVBQVUsRUFBQSxBQUFFLFVBQWQsQUFBd0IsQUFDeEI7V0FBQSxBQUFTLEtBQVQsQUFBYyxZQUFkLEFBQTBCLEFBQzFCO0FBUkQsQUFBTyxBQVNQLEVBVE87QUFEUjs7QUFZTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxrQkFBUSxBQUNsQztZQUFPLEFBQUksUUFBUSxVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDdkM7TUFBSSxPQUFPLFNBQVAsQUFBTyxPQUFNLEFBQ2hCO09BQUksQ0FBQyxLQUFMLEFBQVUsUUFBUSxPQUFBLEFBQU8sQUFDekI7VUFBTyxLQUFQLEFBQU8sQUFBSyxTQUFaLEFBQXFCLEtBQXJCLEFBQTBCLE1BQTFCLEFBQWdDLE1BQWhDLEFBQXNDLEFBQ3RDO0FBSEQsQUFJQTtBQUNBO0FBTkQsQUFBTyxBQU9QLEVBUE87QUFERDs7a0JBVVEsVUFBQSxBQUFDLE1BQXVCO0tBQWpCLEFBQWlCLDRFQUFULEFBQVMsQUFDdEM7O1FBQU8sR0FBQSxBQUFHLE9BQVYsQUFBTyxBQUFVLEFBQ2pCO0tBQUksQ0FBSixBQUFLLE9BQU8sT0FBTyxZQUFQLEFBQU8sQUFBWSxBQUUvQjs7Z0JBQU8sQUFBUSxTQUFJLEFBQUssSUFBSSxlQUFBO1NBQU8sT0FBUCxBQUFPLEFBQU87QUFBMUMsQUFBTyxBQUFZLEFBQ25CLEVBRG1CLENBQVo7QSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgTG9hZCBmcm9tICcuL2xpYnMvc3Rvcm0tbG9hZCc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHtcbiAgICBMb2FkKFsnLy9kM2pzLm9yZy9kMy52My5taW4uanMnXSlcbiAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICBsZXQgZGF0YSA9IFs0LCA4LCAxNSwgMTYsIDIzLCA0Ml07XG5cbiAgICAgICAgICAgIGxldCB4ID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSldKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgNDIwXSk7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcImRpdlwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4KGQpICsgXCJweFwiOyB9KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9hZChbJy8vZDNqcy5vcmcvZDMudjMubWluLmpzJywgJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2QzLmNoYXJ0LzAuMi4wL2QzLmNoYXJ0LmpzJ10sIGZhbHNlKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgLy8gZGVmaW5lIGEgbmV3IGNoYXJ0IHR5cGU6IGEgY2lyY2xlIGNoYXJ0XG4gICAgICAgICAgICAgICAgZDMuY2hhcnQoXCJDaXJjbGVDaGFydFwiLCB7XG5cbiAgICAgICAgICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbGF5ZXIgb2YgY2lyY2xlcyB0aGF0IHdpbGwgZ28gaW50b1xuICAgICAgICAgICAgICAgICAgICAvLyBhIG5ldyBncm91cCBlbGVtZW50IG9uIHRoZSBiYXNlIG9mIHRoZSBjaGFydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyKFwiY2lyY2xlc1wiLCB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKSwge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdCB0aGUgZWxlbWVudHMgd2Ugd2lzaCB0byBiaW5kIHRvIGFuZFxuICAgICAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBkYXRhIHRvIHRoZW0uXG4gICAgICAgICAgICAgICAgICAgIGRhdGFCaW5kOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGluc2VydCBhY3R1YWwgY2lyY2xlc1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kKFwiY2lyY2xlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlZmluZSBsaWZlY3ljbGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWludCBuZXcgZWxlbWVudHMsIGJ1dCBzZXQgdGhlaXIgcmFkaXVzIHRvIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtYWtlIHRoZW0gcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkICogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIHRyYW5zaXRpb24gdGhlbSB0byBhIHJhZGl1cyBvZiA1IGFuZCBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZWlyIGZpbGwgdG8gYmx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlcjp0cmFuc2l0aW9uXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJ0ID0gdGhpcy5jaGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheSg1MDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBjaGFydC5jb2xvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gc2V0L2dldCB0aGUgY29sb3IgdG8gdXNlIGZvciB0aGUgY2lyY2xlcyBhcyB0aGV5IGFyZVxuICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVkLlxuICAgICAgICAgICAgICAgIGNvbG9yOiBmdW5jdGlvbihuZXdDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3IgPSBuZXdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBjaGFydCBvbiBhIGQzIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHZhciBjaGFydCA9IGQzLnNlbGVjdCgnLmNoYXJ0LTInKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAzMClcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIDQwMClcbiAgICAgICAgICAgICAgICAuY2hhcnQoXCJDaXJjbGVDaGFydFwiKVxuICAgICAgICAgICAgICAgIC5jb2xvcihcIm9yYW5nZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBpdCB3aXRoIHNvbWUgZGF0YVxuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoWzEsNCw2LDksMTIsMTMsMzBdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9KTtcbn1dO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goKGZuKSA9PiBmbigpKTsgfSk7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1sb2FkOiBMaWdodHdlaWdodCBwcm9taXNlLWJhc2VkIHNjcmlwdCBsb2FkZXJcbiAqIEB2ZXJzaW9uIDAuNC4wOiBGcmksIDIwIEphbiAyMDE3IDE2OjM3OjUzIEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuY29uc3QgY3JlYXRlID0gdXJsID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdHMuc3JjID0gdXJsO1xuXHRcdHMub25sb2FkID0gcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghdGhpcy5yZWFkeVN0YXRlIHx8IHRoaXMucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykgcmVzb2x2ZSgpO1xuXHRcdH07XG5cdFx0cy5vbmVycm9yID0gcy5vbmFib3J0ID0gcmVqZWN0O1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN5bmNocm9ub3VzID0gdXJscyA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IG5leHQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoIXVybHMubGVuZ3RoKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0Y3JlYXRlKHVybHMuc2hpZnQoKSkudGhlbihuZXh0KS5jYXRjaChyZWplY3QpO1xuXHRcdH07XG5cdFx0bmV4dCgpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh1cmxzLCBhc3luYyA9IHRydWUpID0+IHtcblx0dXJscyA9IFtdLmNvbmNhdCh1cmxzKTtcblx0aWYgKCFhc3luYykgcmV0dXJuIHN5bmNocm9ub3VzKHVybHMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbCh1cmxzLm1hcCh1cmwgPT4gY3JlYXRlKHVybCkpKTtcbn07Il19
