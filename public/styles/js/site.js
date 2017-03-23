(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const metadata = {
  site_title: "Schlumberger Design Language System",
  production_hostname: "blue-dls.appspot.com",
  components_path: "/assets/components",
  data_path: "/assets/data",
  scripts_path: "/assets/scripts",
  styles_path: "/assets/styles",
  colorModes: [
    { id: "light", name: "Light", isDefault: true, isEnabled: true }, 
    { id: "dark", name: "Dark", isDefault: false, isEnabled: true },
    { id: "highcontrast", name: "High Contrast", isDefault: false, isEnabled: false },
  ],
  colorModeDefault: "light",
};

module.exports = metadata;

},{}],2:[function(require,module,exports){
var dropDowns = document.querySelectorAll(".slb-dropdown");
var _loop_1 = function (elem) {
    if (!elem.dataset["processed"]) {
        elem.dataset["processed"] = true;
        var select_1 = elem.querySelector("select");
        var options_1 = select_1.querySelectorAll("option");
        var optionsLength = options_1.length;
        var selectedOption = select_1.options[select_1.selectedIndex];
        var selectedOptionText = selectedOption.textContent;
        var fauxDropdown = document.createDocumentFragment();
        var fauxSelect_1 = document.createElement("button");
        fauxSelect_1.classList.add("select");
        fauxSelect_1.textContent = selectedOptionText;
        fauxDropdown.appendChild(fauxSelect_1);
        var fauxOptionBlock_1 = document.createElement("div");
        fauxOptionBlock_1.classList.add("dropdown");
        var fauxOptionItems = document.createDocumentFragment();
        var _loop_2 = function (i) {
            var option = options_1[i];
            var fauxOptionItem = document.createElement("button");
            fauxOptionItem.classList.add("option");
            fauxOptionItem.value = option.value;
            fauxOptionItem.dataset["index"] = i.toString();
            fauxOptionItem.textContent = option.textContent;
            fauxOptionItem.disabled = option.disabled;
            fauxOptionItem.addEventListener("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
                var optionValue = fauxOptionItem.textContent;
                var optionIndex = fauxOptionItem.dataset["index"];
                fauxSelect_1.textContent = optionValue;
                select_1.selectedIndex = optionIndex;
                var changeEvent;
                try {
                    changeEvent = new Event("change");
                }
                catch (e) {
                    changeEvent = document.createEvent("Event");
                    changeEvent.initEvent("change", true, true);
                }
                select_1.dispatchEvent(changeEvent);
                fauxSelect_1.focus();
                closeFauxDropdown_1();
            });
            fauxOptionItems.appendChild(fauxOptionItem);
        };
        for (var i = 0; i < optionsLength; i++) {
            _loop_2(i);
        }
        fauxOptionBlock_1.appendChild(fauxOptionItems);
        fauxDropdown.appendChild(fauxOptionBlock_1);
        elem.appendChild(fauxDropdown);
        var currentPosition_1 = -1;
        var selectedOptionItem_1 = null;
        var navigateDropdown_1 = function (increment) {
            var newPosition = currentPosition_1 + increment;
            var lastPosition = options_1.length - 1;
            if (newPosition >= options_1.length) {
                newPosition = lastPosition;
            }
            if (newPosition < 0) {
                newPosition = 0;
            }
            var optionNthChild = newPosition + 1;
            selectedOptionItem_1 = fauxOptionBlock_1.querySelector("button.option:nth-child(" + optionNthChild + ")");
            if (selectedOptionItem_1.disabled) {
                if (newPosition !== lastPosition && newPosition !== 0) {
                    currentPosition_1 = newPosition;
                    return navigateDropdown_1(increment);
                }
            }
            else {
                currentPosition_1 = newPosition;
                selectedOptionItem_1.focus();
            }
            return false;
        };
        var keyboardNavigation_1 = function (event) {
            if (event.keyCode === 38) {
                event.preventDefault();
                return navigateDropdown_1(-1);
            }
            if (event.keyCode === 40) {
                event.preventDefault();
                return navigateDropdown_1(1);
            }
            if ([37, 39, 9].indexOf(event.keyCode) > -1) {
                event.preventDefault();
                return navigateDropdown_1(0);
            }
            if (event.keyCode === 27) {
                closeFauxDropdown_1();
                fauxSelect_1.focus();
                fauxSelect_1.addEventListener("keydown", openWithKeyboard_1);
            }
        };
        var openFauxDropdown_1 = function () {
            window.addEventListener("click", clickAwayClose_1);
            window.addEventListener("keydown", keyboardNavigation_1);
            fauxSelect_1.removeEventListener("keydown", openWithKeyboard_1);
            elem.classList.add("open");
            currentPosition_1 = select_1.selectedIndex;
            var optionNthChild = currentPosition_1 + 1;
            selectedOptionItem_1 = fauxOptionBlock_1.querySelector("button.option:nth-child(" + optionNthChild + ")");
            selectedOptionItem_1.focus();
        };
        var closeFauxDropdown_1 = function () {
            window.removeEventListener("click", clickAwayClose_1);
            window.removeEventListener("keydown", keyboardNavigation_1);
            fauxSelect_1.addEventListener("keydown", openWithKeyboard_1);
            elem.classList.remove("open");
            currentPosition_1 = -1;
        };
        var clickAwayClose_1 = function () {
            closeFauxDropdown_1();
        };
        var openWithKeyboard_1 = function (event) {
            if ([38, 40].indexOf(event.keyCode) > -1) {
                event.stopPropagation();
                event.preventDefault();
                openFauxDropdown_1();
            }
        };
        fauxSelect_1.addEventListener("click", function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (elem.classList.contains("open")) {
                closeFauxDropdown_1();
            }
            else {
                openFauxDropdown_1();
            }
        });
        fauxSelect_1.addEventListener("keydown", openWithKeyboard_1);
    }
};
for (var _i = 0, dropDowns_1 = dropDowns; _i < dropDowns_1.length; _i++) {
    var elem = dropDowns_1[_i];
    _loop_1(elem);
}

},{}],3:[function(require,module,exports){
"use strict";
var Status;
(function (Status) {
    Status[Status["Positive"] = 0] = "Positive";
    Status[Status["Normal"] = 1] = "Normal";
    Status[Status["Caution"] = 2] = "Caution";
    Status[Status["Warning"] = 3] = "Warning";
})(Status = exports.Status || (exports.Status = {}));

},{}],4:[function(require,module,exports){
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

},{"./enums":3}],5:[function(require,module,exports){
"use strict";
var styles_1 = require("../../lib/styles");
require("../../components/dropdown/dropdown");
var metadata = require("../../../config/site-metadata.js");
window.addEventListener("load", function () {
    loadStyles();
});
var radioButtonGroup = document.querySelectorAll("input[type=radio][name='color-modes']");
if (radioButtonGroup !== null) {
    var _loop_1 = function (radioButton) {
        radioButton.addEventListener("change", function (e) {
            setColorMode(radioButton.value);
        });
    };
    for (var _i = 0, radioButtonGroup_1 = radioButtonGroup; _i < radioButtonGroup_1.length; _i++) {
        var radioButton = radioButtonGroup_1[_i];
        _loop_1(radioButton);
    }
}
var variantSelectors = document.querySelectorAll(".variant-selector select");
var _loop_2 = function (node) {
    node.addEventListener("change", function () {
        var views = document.querySelectorAll(".component-content");
        for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
            var view = views_1[_i];
            view.style.display = "none";
        }
        document.getElementById("content-" + node.value).style.display = "block";
    }, false);
};
for (var _a = 0, variantSelectors_1 = variantSelectors; _a < variantSelectors_1.length; _a++) {
    var node = variantSelectors_1[_a];
    _loop_2(node);
}
function loadStyles() {
    loadColorMode(metadata.colorModeDefault);
}
function loadColorMode(colorMode) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", metadata.data_path + "/colors-mode-" + colorMode + ".json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
            return;
        }
        var colors = JSON.parse(xhr.response);
        for (var color in colors) {
            styles_1.Styles.Colors[color] = colors[color];
        }
        window.dispatchEvent(styles_1.Styles.LoadedEvent);
    };
    xhr.send();
}
function setColorMode(colorMode) {
    var loadingCover = document.createElement("div");
    var loadingCoverStyle = {
        position: "absolute",
        left: 0,
        top: 0,
        width: document.body.scrollWidth + "px",
        height: document.body.scrollHeight + "px",
        zIndex: 9999,
        pointerEvents: "none",
        backgroundColor: "#000",
        opacity: 1,
        transition: "opacity 750ms ease-out",
    };
    for (var style in loadingCoverStyle) {
        loadingCover.style[style] = loadingCoverStyle[style];
    }
    document.body.appendChild(loadingCover);
    setTimeout(function () {
        loadingCover.style.opacity = "0";
    }, 500);
    setTimeout(function () {
        loadingCover.parentNode.removeChild(loadingCover);
    }, 2000);
    var links = document.querySelectorAll("link[rel=stylesheet]");
    for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
        var link = links_1[_i];
        try {
            var href = link.getAttribute("href");
            var matches = /.*mode-([^.]*)\.(.*)?css.*/gi.exec(href);
            if (matches !== null) {
                link.setAttribute("href", href.replace(matches[1], colorMode));
            }
        }
        catch (e) { }
    }
    loadColorMode(colorMode);
}

},{"../../../config/site-metadata.js":1,"../../components/dropdown/dropdown":2,"../../lib/styles":4}]},{},[5]);
