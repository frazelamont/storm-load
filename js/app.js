(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
 * @version 0.5.1: Fri, 10 Mar 2017 17:30:13 GMT
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLFlBQU0sQUFDbkM7NkJBQUEsQUFBSywyQkFBTCxBQUNLLEtBQUssWUFBSyxBQUNQO1lBQUksT0FBTyxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxJQUFQLEFBQVcsSUFBWCxBQUFlLElBQTFCLEFBQVcsQUFBbUIsQUFFOUI7O1lBQUksSUFBSSxHQUFBLEFBQUcsTUFBSCxBQUFTLFNBQVQsQUFDSCxPQUFPLENBQUEsQUFBQyxHQUFHLEdBQUEsQUFBRyxJQURYLEFBQ0ksQUFBSSxBQUFPLFFBRGYsQUFFSCxNQUFNLENBQUEsQUFBQyxHQUZaLEFBQVEsQUFFRyxBQUFJLEFBRWY7O1dBQUEsQUFBRyxPQUFILEFBQVUsVUFBVixBQUNDLFVBREQsQUFDVyxPQURYLEFBRUssS0FGTCxBQUVVLE1BRlYsQUFHQyxRQUhELEFBR1MsT0FIVCxBQUdnQixPQUhoQixBQUlLLE1BSkwsQUFJVyxTQUFTLFVBQUEsQUFBUyxHQUFHLEFBQUU7bUJBQU8sRUFBQSxBQUFFLEtBQVQsQUFBYyxBQUFPO0FBSnZELFdBQUEsQUFLSyxLQUFLLFVBQUEsQUFBUyxHQUFHLEFBQUU7bUJBQUEsQUFBTyxBQUFJO0FBTG5DLEFBTUg7QUFkTCxPQUFBLEFBZUssTUFBTSxhQUFLLEFBQ1I7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQWpCTCxBQW1CSTs7NkJBQUssQ0FBQSxBQUFDLDJCQUFOLEFBQUssQUFBNEIsZ0VBQWpDLEFBQWlHLE9BQWpHLEFBQ0ssS0FBSyxZQUFLLEFBQ1A7QUFDQTtXQUFBLEFBQUcsTUFBSCxBQUFTOzt3QkFFRyxzQkFBVyxBQUNuQjtBQUNBO0FBQ0E7cUJBQUEsQUFBSyxNQUFMLEFB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LEFBQ2xDO1lBQU8sQUFBSSxRQUFRLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUN2QztNQUFJLE9BQU8sU0FBUCxBQUFPLE9BQU0sQUFDaEI7T0FBSSxDQUFDLEtBQUwsQUFBVSxRQUFRLE9BQUEsQUFBTyxBQUN6QjtVQUFPLEtBQVAsQUFBTyxBQUFLLFNBQVosQUFBcUIsT0FBckIsQUFBNEIsS0FBNUIsQUFBaUMsTUFBakMsQUFBdUMsTUFBdkMsQUFBNkMsQUFDN0M7QUFIRCxBQUlBO0FBQ0E7QUFORCxBQUFPLEFBT1AsRUFQTztBQUREOztrQkFVUSxVQUFBLEFBQUMsTUFBdUI7S0FBakIsQUFBaUIsNEVBQVQsQUFBUyxBQUN0Qzs7UUFBTyxHQUFBLEFBQUcsT0FBVixBQUFPLEFBQVUsQUFDakI7S0FBSSxDQUFKLEFBQUssT0FBTyxPQUFPLFlBQVAsQUFBTyxBQUFZLEFBRS9COztnQkFBTyxBQUFRLFNBQUksQUFBSyxJQUFJLGVBQUE7U0FBTyxPQUFQLEFBQU8sQUFBTztBQUExQyxBQUFPLEFBQVksQUFDbkIsRUFEbUIsQ0FBWjtBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBMb2FkIGZyb20gJy4vbGlicy9zdG9ybS1sb2FkJztcblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkVGFza3MgPSBbKCkgPT4ge1xuICAgIExvYWQoJy8vZDNqcy5vcmcvZDMudjMubWluLmpzJylcbiAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICBsZXQgZGF0YSA9IFs0LCA4LCAxNSwgMTYsIDIzLCA0Ml07XG5cbiAgICAgICAgICAgIGxldCB4ID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSldKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgNDIwXSk7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcImRpdlwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4KGQpICsgXCJweFwiOyB9KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9hZChbJy8vZDNqcy5vcmcvZDMudjMubWluLmpzJywgJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2QzLmNoYXJ0LzAuMi4wL2QzLmNoYXJ0LmpzJ10sIGZhbHNlKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgLy8gZGVmaW5lIGEgbmV3IGNoYXJ0IHR5cGU6IGEgY2lyY2xlIGNoYXJ0XG4gICAgICAgICAgICAgICAgZDMuY2hhcnQoXCJDaXJjbGVDaGFydFwiLCB7XG5cbiAgICAgICAgICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbGF5ZXIgb2YgY2lyY2xlcyB0aGF0IHdpbGwgZ28gaW50b1xuICAgICAgICAgICAgICAgICAgICAvLyBhIG5ldyBncm91cCBlbGVtZW50IG9uIHRoZSBiYXNlIG9mIHRoZSBjaGFydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyKFwiY2lyY2xlc1wiLCB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKSwge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdCB0aGUgZWxlbWVudHMgd2Ugd2lzaCB0byBiaW5kIHRvIGFuZFxuICAgICAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBkYXRhIHRvIHRoZW0uXG4gICAgICAgICAgICAgICAgICAgIGRhdGFCaW5kOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGluc2VydCBhY3R1YWwgY2lyY2xlc1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kKFwiY2lyY2xlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlZmluZSBsaWZlY3ljbGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWludCBuZXcgZWxlbWVudHMsIGJ1dCBzZXQgdGhlaXIgcmFkaXVzIHRvIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtYWtlIHRoZW0gcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkICogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIHRyYW5zaXRpb24gdGhlbSB0byBhIHJhZGl1cyBvZiA1IGFuZCBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZWlyIGZpbGwgdG8gYmx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlcjp0cmFuc2l0aW9uXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJ0ID0gdGhpcy5jaGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheSg1MDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBjaGFydC5jb2xvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gc2V0L2dldCB0aGUgY29sb3IgdG8gdXNlIGZvciB0aGUgY2lyY2xlcyBhcyB0aGV5IGFyZVxuICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVkLlxuICAgICAgICAgICAgICAgIGNvbG9yOiBmdW5jdGlvbihuZXdDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3IgPSBuZXdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBjaGFydCBvbiBhIGQzIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHZhciBjaGFydCA9IGQzLnNlbGVjdCgnLmNoYXJ0LTInKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAzMClcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIDQwMClcbiAgICAgICAgICAgICAgICAuY2hhcnQoXCJDaXJjbGVDaGFydFwiKVxuICAgICAgICAgICAgICAgIC5jb2xvcihcIm9yYW5nZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBpdCB3aXRoIHNvbWUgZGF0YVxuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoWzEsNCw2LDksMTIsMTMsMzBdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9KTtcbn1dO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goKGZuKSA9PiBmbigpKTsgfSk7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1sb2FkOiBMaWdodHdlaWdodCBwcm9taXNlLWJhc2VkIHNjcmlwdCBsb2FkZXJcbiAqIEB2ZXJzaW9uIDAuNS4xOiBGcmksIDEwIE1hciAyMDE3IDE3OjMwOjEzIEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuY29uc3QgY3JlYXRlID0gKHVybCwgYXN5bmMgPSB0cnVlKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzLnNyYyA9IHVybDtcblx0XHRzLmFzeW5jID0gYXN5bmM7XG5cdFx0cy5vbmxvYWQgPSBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCF0aGlzLnJlYWR5U3RhdGUgfHwgdGhpcy5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSByZXNvbHZlKCk7XG5cdFx0fTtcblx0XHRzLm9uZXJyb3IgPSBzLm9uYWJvcnQgPSByZWplY3Q7XG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3luY2hyb25vdXMgPSB1cmxzID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsZXQgbmV4dCA9ICgpID0+IHtcblx0XHRcdGlmICghdXJscy5sZW5ndGgpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0XHRjcmVhdGUodXJscy5zaGlmdCgpLCBmYWxzZSkudGhlbihuZXh0KS5jYXRjaChyZWplY3QpO1xuXHRcdH07XG5cdFx0bmV4dCgpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh1cmxzLCBhc3luYyA9IHRydWUpID0+IHtcblx0dXJscyA9IFtdLmNvbmNhdCh1cmxzKTtcblx0aWYgKCFhc3luYykgcmV0dXJuIHN5bmNocm9ub3VzKHVybHMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbCh1cmxzLm1hcCh1cmwgPT4gY3JlYXRlKHVybCkpKTtcbn07Il19
