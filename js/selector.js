/*
 Selector JS
*/

/*globals window, document, NodeList */
var selector = function (item, outer) {

    'use strict';
    var objName, call, outerEl, outerElLength, outerElIndex, foundEl = [], i = 0;

    if (typeof item === 'object') {

        if (NodeList.prototype.isPrototypeOf(item)) { // if item property has selector(item) nodelist
            return item;

        } else {

            objName = Object.prototype.toString.call(item);
            if (objName === '[object HTMLDocument]' || objName === '[object Document]') {

                if (selector.document === undefined) { selector.document = document.querySelectorAll('html'); }
                call = selector.document;
                return call;

            } else if (objName === '[object Window]') { // window object
                return window;

            } else if (objName === '[object Array]') { // array object
                return item;

            } else { // "this" object
                return [item]; // converting object for event loops
            }

        }

    } else {

        if (typeof outer !== 'undefined') { // find items in outer elements

            if (typeof outer !== 'object') {
                outerEl = document.querySelectorAll(outer); // convert to array
            } else { outerEl = outer; }

            if (outerEl.length !== undefined) { // "this" object

                outerElLength = outerEl.length;
                for (i = 0; i < outerElLength; i += 1) {

                    outerElIndex = outerEl[i].querySelectorAll(item);
                    if (outerElLength === 1) {
                        foundEl = outerElIndex[0];
                    } else {
                        foundEl = foundEl.concat(outerElIndex); // merge arrays
                    }

                }

            } else { foundEl = outerEl.querySelectorAll(item); }

            return foundEl;

        } else { return document.querySelectorAll(item); }

    }

};
