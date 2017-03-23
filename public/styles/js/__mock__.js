(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
require("../modal/modal");

},{"../modal/modal":3}],2:[function(require,module,exports){
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
require("../dropdown/dropdown");
var modalOpeners = document.querySelectorAll(".slb-open-modal");
var _loop_1 = function (modalOpener) {
    var modalId = modalOpener.dataset["modalId"];
    var modal = document.getElementById(modalId);
    var openModal = function (event) {
        event.preventDefault();
        modal.classList.add("open");
        setTimeout(function () {
            modal.classList.add("in");
        }, 0);
        window.addEventListener("keydown", onkeydown_1, false);
    };
    var closeModal = function (event) {
        if (event) {
            event.preventDefault();
        }
        modal.classList.remove("in");
        setTimeout(function () {
            modal.classList.remove("open");
        }, 500);
    };
    var onkeydown_1 = function (event) {
        if (event.keyCode === 27) {
            closeModal(null);
        }
    };
    modalOpener.addEventListener("click", openModal, false);
    var modalClosers = modal.querySelectorAll(".slb-close-modal, .slb-button.close");
    for (var _i = 0, modalClosers_1 = modalClosers; _i < modalClosers_1.length; _i++) {
        var modalCloser = modalClosers_1[_i];
        modalCloser.addEventListener("click", closeModal, false);
    }
};
for (var _i = 0, modalOpeners_1 = modalOpeners; _i < modalOpeners_1.length; _i++) {
    var modalOpener = modalOpeners_1[_i];
    _loop_1(modalOpener);
}

},{"../dropdown/dropdown":2}]},{},[1]);
