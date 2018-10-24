/*
 Selector JS
*/

/*globals window, document, NodeList */
var selector = function (item, outer) {

    'use strict';
    var objName, call, outerEl, outerElLength, outerElIndex, foundEl = [], i = 0;

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

        outerElLength = outerEl.length;
        if (outerEl.length !== undefined) { // "this" object

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

    }

    return document.querySelectorAll(item);

};
