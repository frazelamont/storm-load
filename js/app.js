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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name storm-load: Lightweight promise-based script loader
 * @version 0.1.0: Thu, 20 Oct 2016 12:47:28 GMT
 * @author stormid
 * @license MIT
 */
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
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNLDBCQUEwQixDQUFDLFlBQU07QUFDbkMsNkJBQUssQ0FBQyx5QkFBRCxDQUFMLEVBQ0ssSUFETCxDQUNVLFlBQUs7QUFDUCxZQUFJLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQUFYOztBQUVBLFlBQUksSUFBSSxHQUFHLEtBQUgsQ0FBUyxNQUFULEdBQ0gsTUFERyxDQUNJLENBQUMsQ0FBRCxFQUFJLEdBQUcsR0FBSCxDQUFPLElBQVAsQ0FBSixDQURKLEVBRUgsS0FGRyxDQUVHLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FGSCxDQUFSOztBQUlBLFdBQUcsTUFBSCxDQUFVLFFBQVYsRUFDQyxTQURELENBQ1csS0FEWCxFQUVLLElBRkwsQ0FFVSxJQUZWLEVBR0MsS0FIRCxHQUdTLE1BSFQsQ0FHZ0IsS0FIaEIsRUFJSyxLQUpMLENBSVcsT0FKWCxFQUlvQixVQUFTLENBQVQsRUFBWTtBQUFFLG1CQUFPLEVBQUUsQ0FBRixJQUFPLElBQWQ7QUFBcUIsU0FKdkQsRUFLSyxJQUxMLENBS1UsVUFBUyxDQUFULEVBQVk7QUFBRSxtQkFBTyxDQUFQO0FBQVcsU0FMbkM7QUFNSCxLQWRMLEVBZUssS0FmTCxDQWVXLGFBQUs7QUFDUixnQkFBUSxHQUFSLENBQVksQ0FBWjtBQUNILEtBakJMOztBQW1CSSw2QkFBSyxDQUFDLHlCQUFELEVBQTRCLDZEQUE1QixDQUFMLEVBQWlHLEtBQWpHLEVBQ0ssSUFETCxDQUNVLFlBQUs7QUFDUDtBQUNBLFdBQUcsS0FBSCxDQUFTLGFBQVQsRUFBd0I7O0FBRXhCLHdCQUFZLHNCQUFXO0FBQ25CO0FB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LFlBQUksT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNiLGdCQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCLE9BQU8sU0FBUDtBQUNsQixnQkFBSSxNQUFNLEtBQUssS0FBTCxFQUFWO0FBQ0EsbUJBQU8sR0FBUCxFQUFZLElBQVosQ0FBaUIsSUFBakI7QUFDSCxTQUpEO0FBS0E7QUFDSCxLQVBNLENBQVA7QUFRSCxDQVRNOztrQkFXUSxVQUFDLElBQUQsRUFBd0I7QUFBQSxRQUFqQixLQUFpQix1RUFBVCxJQUFTOztBQUNuQyxRQUFJLENBQUMsS0FBTCxFQUFZLE9BQU8sWUFBWSxJQUFaLENBQVA7O0FBRVosV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3BDLFlBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFOLENBQWMsSUFBZCxDQUFOLEVBQTJCLE9BQU8sUUFBUDs7QUFFM0IsZUFBTyxRQUFRLEdBQVIsQ0FBWSxLQUFLLEdBQUwsQ0FBUyxlQUFPO0FBQ3ZCLG1CQUFPLE9BQU8sR0FBUCxDQUFQO0FBQ0gsU0FGVSxDQUFaLEVBR0UsSUFIRixDQUdPLE9BSFAsRUFHZ0IsTUFIaEIsQ0FBUDtBQUlILEtBUE0sQ0FBUDtBQVFILEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IExvYWQgZnJvbSAnLi9saWJzL3N0b3JtLWxvYWQnO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiB7XG4gICAgTG9hZChbJy8vZDNqcy5vcmcvZDMudjMubWluLmpzJ10pXG4gICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBbNCwgOCwgMTUsIDE2LCAyMywgNDJdO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEpXSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDQyMF0pO1xuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkKSArIFwicHhcIjsgfSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIExvYWQoWycvL2QzanMub3JnL2QzLnYzLm1pbi5qcycsICcvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kMy5jaGFydC8wLjIuMC9kMy5jaGFydC5qcyddLCBmYWxzZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgIC8vIGRlZmluZSBhIG5ldyBjaGFydCB0eXBlOiBhIGNpcmNsZSBjaGFydFxuICAgICAgICAgICAgICAgIGQzLmNoYXJ0KFwiQ2lyY2xlQ2hhcnRcIiwge1xuXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGxheWVyIG9mIGNpcmNsZXMgdGhhdCB3aWxsIGdvIGludG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYSBuZXcgZ3JvdXAgZWxlbWVudCBvbiB0aGUgYmFzZSBvZiB0aGUgY2hhcnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllcihcImNpcmNsZXNcIiwgdGhpcy5iYXNlLmFwcGVuZChcImdcIiksIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIGVsZW1lbnRzIHdlIHdpc2ggdG8gYmluZCB0byBhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgZGF0YSB0byB0aGVtLlxuICAgICAgICAgICAgICAgICAgICBkYXRhQmluZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgYWN0dWFsIGNpcmNsZXNcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZChcImNpcmNsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZpbmUgbGlmZWN5Y2xlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFpbnQgbmV3IGVsZW1lbnRzLCBidXQgc2V0IHRoZWlyIHJhZGl1cyB0byAwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbWFrZSB0aGVtIHJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZCAqIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJyZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB0cmFuc2l0aW9uIHRoZW0gdG8gYSByYWRpdXMgb2YgNSBhbmQgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVpciBmaWxsIHRvIGJsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXI6dHJhbnNpdGlvblwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGFydCA9IHRoaXMuY2hhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkoNTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgY2hhcnQuY29sb3IoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIHNldC9nZXQgdGhlIGNvbG9yIHRvIHVzZSBmb3IgdGhlIGNpcmNsZXMgYXMgdGhleSBhcmVcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJlZC5cbiAgICAgICAgICAgICAgICBjb2xvcjogZnVuY3Rpb24obmV3Q29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gbmV3Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2hhcnQgb24gYSBkMyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgY2hhcnQgPSBkMy5zZWxlY3QoJy5jaGFydC0yJylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMzApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCA0MDApXG4gICAgICAgICAgICAgICAgLmNoYXJ0KFwiQ2lyY2xlQ2hhcnRcIilcbiAgICAgICAgICAgICAgICAuY29sb3IoXCJvcmFuZ2VcIik7XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgaXQgd2l0aCBzb21lIGRhdGFcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KFsxLDQsNiw5LDEyLDEzLDMwXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfSk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tbG9hZDogTGlnaHR3ZWlnaHQgcHJvbWlzZS1iYXNlZCBzY3JpcHQgbG9hZGVyXG4gKiBAdmVyc2lvbiAwLjEuMDogVGh1LCAyMCBPY3QgMjAxNiAxMjo0NzoyOCBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGNyZWF0ZSA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKCEoL2pzJC8udGVzdCh1cmwpKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwgKyBcIiBpcyBub3QgYSBqcyBmaWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbmVycm9yID0gcmVzb2x2ZTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHN5bmNocm9ub3VzID0gdXJscyA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IG5leHQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXVybHMubGVuZ3RoKSByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgbGV0IHVybCA9IHVybHMuc2hpZnQoKTtcbiAgICAgICAgICAgIGNyZWF0ZSh1cmwpLnRoZW4obmV4dCk7XG4gICAgICAgIH07XG4gICAgICAgIG5leHQoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh1cmxzLCBhc3luYyA9IHRydWUpID0+IHtcbiAgICBpZiAoIWFzeW5jKSByZXR1cm4gc3luY2hyb25vdXModXJscyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZighISFBcnJheS5pc0FycmF5KHVybHMpKSByZXR1cm4gcmVqZWN0KCk7IFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHVybHMubWFwKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGUodXJsKTsgXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbn07Il19
