/*
 Selector JS
*/

/*globals window, document, NodeList */
var selector = function (item, outer) {

    'use strict';
    var objName, call, outerEl, outerElIndex, foundEl = [], i = 0;

    if (typeof item === 'object') {

        if (NodeList.prototype.isPrototypeOf(item)) { return item; } // if item property has selector(item) nodelist

        objName = Object.prototype.toString.call(item);
        if (objName === '[object HTMLDocument]' || objName === '[object Document]') { // detect document

            if (selector.document === undefined) {
                selector.document = document.querySelectorAll('html');
            }

            call = selector.document;
            return call;

        }

        if (objName === '[object Window]') {  return window; } // window object
        if (objName === '[object Array]') {  return item; } // array object

        return [item]; // "this" object, [] converting object for event loops

    }

    if (outer !== undefined) { // find items in outer elements

        if (typeof outer !== 'object') {
            outerEl = document.querySelectorAll(outer); // convert to array

        } else { outerEl = outer; }

        // discard "this" object && form object (form element not returns "this", it returns all form elements)
        if (outerEl.length !== undefined && Array.prototype.slice.call(outerEl).length === 1) {

            for (i = 0; i < outerEl.length; i += 1) {

                outerElIndex = outerEl[i].querySelectorAll(item);

                if (outerEl.length === 1) {
                    foundEl = outerElIndex[0];

                } else {
                    foundEl = foundEl.concat(outerElIndex); // merge arrays
                }

            }

        } else { // "this" object
            foundEl = outerEl.querySelectorAll(item);
        }

        return foundEl;

    }

    return document.querySelectorAll(item);

};
