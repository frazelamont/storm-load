(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _stormLoad = require('./libs/storm-load');

var _stormLoad2 = _interopRequireDefault(_stormLoad);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
    (0, _stormLoad2.default)('//d3js.org/d3.v3.min.js').then(function () {
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
 * @version 1.0.3: Fri, 29 Jun 2018 12:47:49 GMT
 * @author stormid
 * @license MIT
 */
var create = function create(url) {
	var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	return new Promise(function (resolve, reject) {
		var s = document.createElement('script');
		s.src = url;
		s.async = async;
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
			create(urls.shift(), false).then(next).catch(reject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUEsYUFBQSxRQUFBLG1CQUFBLENBQUE7Ozs7Ozs7O0FBRUEsSUFBTSwwQkFBMEIsQ0FBQyxZQUFNO0FBQ25DLEtBQUEsR0FBQSxZQUFBLE9BQUEsRUFBQSx5QkFBQSxFQUFBLElBQUEsQ0FDVSxZQUFLO0FBQ1AsWUFBSSxPQUFPLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBWCxFQUFXLENBQVg7O0FBRUEsWUFBSSxJQUFJLEdBQUEsS0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLENBQ0ksQ0FBQSxDQUFBLEVBQUksR0FBQSxHQUFBLENBRFIsSUFDUSxDQUFKLENBREosRUFBQSxLQUFBLENBRUcsQ0FBQSxDQUFBLEVBRlgsR0FFVyxDQUZILENBQVI7O0FBSUEsV0FBQSxNQUFBLENBQUEsUUFBQSxFQUFBLFNBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLEdBQUEsTUFBQSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsT0FBQSxFQUlvQixVQUFBLENBQUEsRUFBWTtBQUFFLG1CQUFPLEVBQUEsQ0FBQSxJQUFQLElBQUE7QUFKbEMsU0FBQSxFQUFBLElBQUEsQ0FLVSxVQUFBLENBQUEsRUFBWTtBQUFFLG1CQUFBLENBQUE7QUFMeEIsU0FBQTtBQVJSLEtBQUEsRUFBQSxLQUFBLENBZVcsVUFBQSxDQUFBLEVBQUs7QUFDUixnQkFBQSxHQUFBLENBQUEsQ0FBQTtBQWhCUixLQUFBOztBQW1CSSxLQUFBLEdBQUEsWUFBQSxPQUFBLEVBQUssQ0FBQSx5QkFBQSxFQUFMLDZEQUFLLENBQUwsRUFBQSxLQUFBLEVBQUEsSUFBQSxDQUNVLFlBQUs7QUFDUDtBQUNBLFdBQUEsS0FBQSxDQUFBLGFBQUEsRUFBd0I7O0FBRXhCLHdCQUFZLFNBQUEsVUFBQSxHQUFXO0FBQ25CO0FBQ0E7QUFDQSxxQkFBQSxLQUFBLENBQUEsU0FBQSxFQUFzQixLQUFBLElBQUEsQ0FBQSxNQUFBLENBQXRCLEdBQXNCLENBQXRCLEVBQTZDOztBQUU3QztBQUNBO0FBQ0EsOEJBQVUsU0FBQSxRQUFBLENBQUEsSUFBQSxFQUFlO0FBQ3JCLCtCQUFPLEtBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxJQUFBLENBQVAsSUFBTyxDQUFQO0FBTHlDLHFCQUFBOztBQVM3QztBQUNBLDRCQUFRLFNBQUEsTUFBQSxHQUFXO0FBQ2YsK0JBQU8sS0FBQSxNQUFBLENBQVAsUUFBTyxDQUFQO0FBWHlDLHFCQUFBOztBQWM3QztBQUNBLDRCQUFROztBQUVKO0FBQ0E7QUFDQSxpQ0FBUyxTQUFBLEtBQUEsR0FBVztBQUNwQixpQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFnQixVQUFBLENBQUEsRUFBWTtBQUN4Qix1Q0FBTyxJQUFQLEVBQUE7QUFESiw2QkFBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLElBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsS0FBQTtBQUxJLHlCQUFBO0FBWUo7QUFDQTtBQUNBLDRDQUFvQixTQUFBLGVBQUEsR0FBVztBQUMvQixnQ0FBSSxRQUFRLEtBQVosS0FBWSxFQUFaO0FBQ0EsaUNBQUEsS0FBQSxDQUFBLEdBQUEsRUFBQSxJQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLENBQUEsTUFBQSxFQUVtQixNQUZuQixLQUVtQixFQUZuQjtBQUdDO0FBbkJHO0FBZnFDLGlCQUE3QztBQUxvQixhQUFBOztBQTRDeEI7QUFDQTtBQUNBLG1CQUFPLFNBQUEsS0FBQSxDQUFBLFFBQUEsRUFBbUI7QUFDdEIsb0JBQUksVUFBQSxNQUFBLEtBQUosQ0FBQSxFQUE0QjtBQUM1QiwyQkFBTyxLQUFQLE1BQUE7QUFDQztBQUNELHFCQUFBLE1BQUEsR0FBQSxRQUFBO0FBQ0EsdUJBQUEsSUFBQTtBQUNIO0FBcER1QixTQUF4Qjs7QUF1REE7QUFDQSxZQUFJLFFBQVEsR0FBQSxNQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsRUFBQSxFQUFBLEVBQUEsSUFBQSxDQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxDQUFBLGFBQUEsRUFBQSxLQUFBLENBQVosUUFBWSxDQUFaOztBQU9BO0FBQ0EsY0FBQSxJQUFBLENBQVcsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBWCxFQUFXLENBQVg7QUFuRVIsS0FBQSxFQUFBLEtBQUEsQ0FxRVcsVUFBQSxDQUFBLEVBQUs7QUFDUixnQkFBQSxHQUFBLENBQUEsQ0FBQTtBQXRFUixLQUFBO0FBcEJSLENBQWdDLENBQWhDOztBQThGQSxJQUFHLHNCQUFILE1BQUEsRUFBaUMsT0FBQSxnQkFBQSxDQUFBLGtCQUFBLEVBQTRDLFlBQU07QUFBRSw0QkFBQSxPQUFBLENBQWdDLFVBQUEsRUFBQSxFQUFBO0FBQUEsZUFBQSxJQUFBO0FBQWhDLEtBQUE7QUFBcEQsQ0FBQTs7Ozs7Ozs7QUNoR2pDOzs7Ozs7QUFNQSxJQUFNLFNBQVMsU0FBVCxNQUFTLENBQUEsR0FBQSxFQUF1QjtBQUFBLEtBQWpCLFFBQWlCLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBVCxJQUFTOztBQUNyQyxRQUFPLElBQUEsT0FBQSxDQUFZLFVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBcUI7QUFDdkMsTUFBSSxJQUFJLFNBQUEsYUFBQSxDQUFSLFFBQVEsQ0FBUjtBQUNBLElBQUEsR0FBQSxHQUFBLEdBQUE7QUFDQSxJQUFBLEtBQUEsR0FBQSxLQUFBO0FBQ0EsSUFBQSxNQUFBLEdBQVcsRUFBQSxrQkFBQSxHQUF1QixZQUFXO0FBQzVDLE9BQUksQ0FBQyxLQUFELFVBQUEsSUFBb0IsS0FBQSxVQUFBLEtBQXhCLFVBQUEsRUFBd0Q7QUFEekQsR0FBQTtBQUdBLElBQUEsT0FBQSxHQUFZLEVBQUEsT0FBQSxHQUFaLE1BQUE7QUFDQSxXQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQTtBQVJELEVBQU8sQ0FBUDtBQURELENBQUE7O0FBYU8sSUFBTSxjQUFBLFFBQUEsV0FBQSxHQUFjLFNBQWQsV0FBYyxDQUFBLElBQUEsRUFBUTtBQUNsQyxRQUFPLElBQUEsT0FBQSxDQUFZLFVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBcUI7QUFDdkMsTUFBSSxPQUFPLFNBQVAsSUFBTyxHQUFNO0FBQ2hCLE9BQUksQ0FBQyxLQUFMLE1BQUEsRUFBa0IsT0FBQSxTQUFBO0FBQ2xCLFVBQU8sS0FBUCxLQUFPLEVBQVAsRUFBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLENBQUEsTUFBQTtBQUZELEdBQUE7QUFJQTtBQUxELEVBQU8sQ0FBUDtBQURNLENBQUE7O2tCQVVRLFVBQUEsSUFBQSxFQUF3QjtBQUFBLEtBQWpCLFFBQWlCLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBVCxJQUFTOztBQUN0QyxRQUFPLEdBQUEsTUFBQSxDQUFQLElBQU8sQ0FBUDtBQUNBLEtBQUksQ0FBSixLQUFBLEVBQVksT0FBTyxZQUFQLElBQU8sQ0FBUDs7QUFFWixRQUFPLFFBQUEsR0FBQSxDQUFZLEtBQUEsR0FBQSxDQUFTLFVBQUEsR0FBQSxFQUFBO0FBQUEsU0FBTyxPQUFQLEdBQU8sQ0FBUDtBQUE1QixFQUFtQixDQUFaLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgTG9hZCBmcm9tICcuL2xpYnMvc3Rvcm0tbG9hZCc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHtcbiAgICBMb2FkKCcvL2QzanMub3JnL2QzLnYzLm1pbi5qcycpXG4gICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBbNCwgOCwgMTUsIDE2LCAyMywgNDJdO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEpXSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDQyMF0pO1xuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkKSArIFwicHhcIjsgfSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIExvYWQoWycvL2QzanMub3JnL2QzLnYzLm1pbi5qcycsICcvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kMy5jaGFydC8wLjIuMC9kMy5jaGFydC5qcyddLCBmYWxzZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgIC8vIGRlZmluZSBhIG5ldyBjaGFydCB0eXBlOiBhIGNpcmNsZSBjaGFydFxuICAgICAgICAgICAgICAgIGQzLmNoYXJ0KFwiQ2lyY2xlQ2hhcnRcIiwge1xuXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGxheWVyIG9mIGNpcmNsZXMgdGhhdCB3aWxsIGdvIGludG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYSBuZXcgZ3JvdXAgZWxlbWVudCBvbiB0aGUgYmFzZSBvZiB0aGUgY2hhcnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllcihcImNpcmNsZXNcIiwgdGhpcy5iYXNlLmFwcGVuZChcImdcIiksIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIGVsZW1lbnRzIHdlIHdpc2ggdG8gYmluZCB0byBhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgZGF0YSB0byB0aGVtLlxuICAgICAgICAgICAgICAgICAgICBkYXRhQmluZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgYWN0dWFsIGNpcmNsZXNcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZChcImNpcmNsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZpbmUgbGlmZWN5Y2xlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFpbnQgbmV3IGVsZW1lbnRzLCBidXQgc2V0IHRoZWlyIHJhZGl1cyB0byAwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbWFrZSB0aGVtIHJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZCAqIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJyZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB0cmFuc2l0aW9uIHRoZW0gdG8gYSByYWRpdXMgb2YgNSBhbmQgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVpciBmaWxsIHRvIGJsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXI6dHJhbnNpdGlvblwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGFydCA9IHRoaXMuY2hhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkoNTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgY2hhcnQuY29sb3IoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIHNldC9nZXQgdGhlIGNvbG9yIHRvIHVzZSBmb3IgdGhlIGNpcmNsZXMgYXMgdGhleSBhcmVcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJlZC5cbiAgICAgICAgICAgICAgICBjb2xvcjogZnVuY3Rpb24obmV3Q29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gbmV3Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2hhcnQgb24gYSBkMyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgY2hhcnQgPSBkMy5zZWxlY3QoJy5jaGFydC0yJylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMzApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCA0MDApXG4gICAgICAgICAgICAgICAgLmNoYXJ0KFwiQ2lyY2xlQ2hhcnRcIilcbiAgICAgICAgICAgICAgICAuY29sb3IoXCJvcmFuZ2VcIik7XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgaXQgd2l0aCBzb21lIGRhdGFcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KFsxLDQsNiw5LDEyLDEzLDMwXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfSk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tbG9hZDogTGlnaHR3ZWlnaHQgcHJvbWlzZS1iYXNlZCBzY3JpcHQgbG9hZGVyXG4gKiBAdmVyc2lvbiAxLjAuMzogRnJpLCAyOSBKdW4gMjAxOCAxMjo0Nzo0OSBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGNyZWF0ZSA9ICh1cmwsIGFzeW5jID0gdHJ1ZSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0cy5zcmMgPSB1cmw7XG5cdFx0cy5hc3luYyA9IGFzeW5jO1xuXHRcdHMub25sb2FkID0gcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghdGhpcy5yZWFkeVN0YXRlIHx8IHRoaXMucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykgcmVzb2x2ZSgpO1xuXHRcdH07XG5cdFx0cy5vbmVycm9yID0gcy5vbmFib3J0ID0gcmVqZWN0O1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN5bmNocm9ub3VzID0gdXJscyA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IG5leHQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoIXVybHMubGVuZ3RoKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0Y3JlYXRlKHVybHMuc2hpZnQoKSwgZmFsc2UpLnRoZW4obmV4dCkuY2F0Y2gocmVqZWN0KTtcblx0XHR9O1xuXHRcdG5leHQoKTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAodXJscywgYXN5bmMgPSB0cnVlKSA9PiB7XG5cdHVybHMgPSBbXS5jb25jYXQodXJscyk7XG5cdGlmICghYXN5bmMpIHJldHVybiBzeW5jaHJvbm91cyh1cmxzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwodXJscy5tYXAodXJsID0+IGNyZWF0ZSh1cmwpKSk7XG59OyJdfQ==
