(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
require("../navigation-framework/navigation-framework");

},{"../navigation-framework/navigation-framework":2}],2:[function(require,module,exports){
"use strict";
require("../search-field--expanding/search-field--expanding");
require("../toggle-switch--color-mode/toggle-switch--color-mode");
var resizer = document.getElementById("resizeView");
var contentView = document.querySelector(".framework-content-view");
var allNavDropdowns = document.querySelectorAll(".framework-sub-nav-dropdown");
var navDropdownOpeners = document.querySelectorAll(".open-nav-dropdown");
var openClass = "open";
var toggleMainNavigation = function (event) {
    event.preventDefault();
    contentView.classList.toggle(openClass);
};
resizer.addEventListener("click", toggleMainNavigation);
Array.prototype.forEach.call(navDropdownOpeners, function (elem) {
    var navDropdownId = elem.dataset["navDropdownId"];
    var navDropdown = document.getElementById(navDropdownId);
    var openNavDropdown = function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (navDropdown.classList.contains(openClass)) {
            closeNavDropdowns();
        }
        else {
            window.addEventListener("click", closeNavDropdowns);
            Array.prototype.forEach.call(allNavDropdowns, function (elem) {
                elem.classList.remove(openClass);
            });
            navDropdown.addEventListener("click", function (event) {
                event.stopPropagation();
            });
            navDropdown.classList.add(openClass);
        }
    };
    var closeNavDropdowns = function () {
        window.removeEventListener("click", closeNavDropdowns);
        Array.prototype.forEach.call(allNavDropdowns, function (elem) {
            elem.classList.remove(openClass);
        });
    };
    elem.addEventListener("click", openNavDropdown);
});

},{"../search-field--expanding/search-field--expanding":3,"../toggle-switch--color-mode/toggle-switch--color-mode":6}],3:[function(require,module,exports){
"use strict";
require("../search-field/search-field");
var expandingSearchFields = document.querySelectorAll(".slb-search-field.expanding input[type=search]");
var placeholderShownPolyfill = function (elem) {
    if (!elem.value) {
        elem.classList.add("placeholder-shown");
    }
    else {
        elem.classList.remove("placeholder-shown");
    }
};
Array.prototype.forEach.call(expandingSearchFields, function (elem) {
    placeholderShownPolyfill(elem);
    elem.addEventListener("blur", function () {
        placeholderShownPolyfill(elem);
    });
});

},{"../search-field/search-field":5}],4:[function(require,module,exports){
module.exports={
  "id": "search123",
  "name": "search-input",
  "placeholder": "Search",
  "pattern": "",
  "required": false,
  "results": [
    "button",
    "button--input",
    "card",
    "card--group",
    "check-box",
    "data-table",
    "dashboard-template",
    "data-visualization",
    "design language system",
    "dropdown",
    "geographic-map",
    "icon",
    "modal",
    "navigation-framework",
    "nested-list",
    "numeric-input-control",
    "overlay",
    "pagination-control",
    "progress-indicator",
    "project-detail",
    "project-detail template",
    "radio-button-group",
    "rating",
    "search-field",
    "search-test test",
    "Schlumberger",
    "signature template",
    "slider",
    "dashboard",
    "tab-control",
    "tag",
    "test",
    "testing",
    "testing multi-word matches",
    "testing search",
    "testing search input",
    "text-input",
    "text-input--multi-line",
    "text-input--search",
    "toggle-switch",
    "user-identity"
  ]
}

},{}],5:[function(require,module,exports){
var searchData = require("./__mock__.json");
var searchFields = document.querySelectorAll(".slb-search-field");
Array.prototype.forEach.call(searchFields, function (field) {
    var input = field.querySelector("input");
    var closeKeys = [9, 13, 27];
    var results = searchData.results;
    var listContainer = null;
    var currentPosition = -1;
    var isNavigating = false;
    var originalValue = "";
    var destroyList = function () {
        if (listContainer) {
            field.removeChild(listContainer);
            field.classList.remove("open");
            listContainer = null;
            currentPosition = -1;
            unbindKeyboardEvents();
        }
    };
    var createList = function (items) {
        if (listContainer) {
            while (listContainer.firstChild) {
                listContainer.removeChild(listContainer.firstChild);
            }
        }
        else {
            listContainer = document.createElement("ul");
        }
        var itemsLength = items.length;
        var listRows = document.createDocumentFragment();
        var _loop_1 = function (i) {
            var row = document.createElement("li");
            var button = document.createElement("button");
            button.innerHTML = items[i];
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                input.value = button.textContent;
                destroyList();
            });
            row.appendChild(button);
            listRows.appendChild(row);
        };
        for (var i = 0; i < itemsLength; i++) {
            _loop_1(i);
        }
        listContainer.appendChild(listRows);
        field.appendChild(listContainer);
        field.classList.add("open");
    };
    var displayOptions = function (value) {
        var compareValue = value.toLowerCase();
        var matches = results.filter(function (r) {
            return r.toLowerCase().indexOf(compareValue) > -1;
        }).map(function (r) {
            var regValue = new RegExp("(" + value + ")", "i");
            return r.replace(regValue, "<b>$1</b>");
        });
        if (matches.length) {
            bindKeyboardEvents();
            return createList(matches);
        }
        return destroyList();
    };
    var navigateList = function (increment) {
        if (listContainer) {
            var options = listContainer.querySelectorAll("button");
            currentPosition += increment;
            if (currentPosition === -1 || currentPosition >= options.length) {
                currentPosition = -1;
                input.value = originalValue;
                return input.focus();
            }
            if (currentPosition < -1) {
                currentPosition = options.length - 1;
            }
            var currentOption = options[currentPosition];
            currentOption.focus();
            input.value = currentOption.textContent;
        }
        return false;
    };
    var onKeydownWindow = function (event) {
        if (event.keyCode === 38) {
            event.preventDefault();
            return navigateList(-1);
        }
        if (event.keyCode === 40) {
            event.preventDefault();
            return navigateList(1);
        }
        if ([37, 39].indexOf(event.keyCode) > -1) {
            event.preventDefault();
            return navigateList(0);
        }
        if (closeKeys.indexOf(event.keyCode) > -1) {
            destroyList();
        }
    };
    var clickAwayClose = function () {
        destroyList();
    };
    var unbindKeyboardEvents = function () {
        isNavigating = false;
        window.removeEventListener("click", clickAwayClose);
        window.removeEventListener("keydown", onKeydownWindow, false);
    };
    var bindKeyboardEvents = function () {
        isNavigating = true;
        window.addEventListener("click", clickAwayClose);
        window.addEventListener("keydown", onKeydownWindow, false);
    };
    input.addEventListener("keyup", function (event) {
        if (input.value.length > 2) {
            originalValue = input.value;
            displayOptions(input.value);
        }
        if (closeKeys.indexOf(event.keyCode) > -1 || !input.value.length) {
            destroyList();
        }
    }, false);
    input.addEventListener("blur", function () {
        if (!isNavigating) {
            destroyList();
        }
    }, false);
});

},{"./__mock__.json":4}],6:[function(require,module,exports){

},{}]},{},[1]);
