(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
require("chart.js");
var styles_1 = require("../../lib/styles");
window.addEventListener(styles_1.Styles.Loaded, function () {
    window.Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
    window.Chart.defaults.global.defaultFontSize = 14;
    window.Chart.defaults.global.defaultFontColor = styles_1.Styles.Colors["DefaultText"];
});

},{"../../lib/styles":3,"chart.js":"chart.js"}],2:[function(require,module,exports){
"use strict";
var Status;
(function (Status) {
    Status[Status["Positive"] = 0] = "Positive";
    Status[Status["Normal"] = 1] = "Normal";
    Status[Status["Caution"] = 2] = "Caution";
    Status[Status["Warning"] = 3] = "Warning";
})(Status = exports.Status || (exports.Status = {}));

},{}],3:[function(require,module,exports){
"use strict";
var enums_1 = require("./enums");
var Styles = (function () {
    function Styles() {
    }
    Object.defineProperty(Styles, "Colors", {
        get: function () {
            var _window = window;
            if (_window.Styles.Colors == undefined) {
                _window.Styles.Colors = {};
            }
            return _window.Styles.Colors;
        },
        enumerable: true,
        configurable: true
    });
    Styles.getStatusColor = function (status) {
        var color = Styles.Colors["Neutral"];
        switch (enums_1.Status[status]) {
            case enums_1.Status.Positive:
                color = Styles.Colors["Positive"];
                break;
            case enums_1.Status.Normal:
                color = Styles.Colors["Neutral"];
                break;
            case enums_1.Status.Caution:
                color = Styles.Colors["Caution"];
                break;
            case enums_1.Status.Warning:
                color = Styles.Colors["Warning"];
                break;
            default:
                break;
        }
        return color;
    };
    return Styles;
}());
Styles.Loaded = "StylesLoaded";
Styles._constructor = (function () {
    try {
        Styles.LoadedEvent = new CustomEvent(Styles.Loaded);
    }
    catch (e) {
        Styles.LoadedEvent = document.createEvent("CustomEvent");
        Styles.LoadedEvent.initEvent(Styles.Loaded, true, true);
    }
    var _window = window;
    if (_window.Styles == undefined) {
        _window.Styles = {};
    }
})();
exports.Styles = Styles;

},{"./enums":2}]},{},[1]);
