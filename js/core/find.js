/* find */

import { ui } from './globals.js';
export default () => ui;

ui.find = function (item, outer) {

    var i, objName, call, outerEl, outerElIndex, foundEl = [];

    if (item instanceof Object) {

        if (NodeList.prototype.isPrototypeOf(item)) { return item; } // if item property has ui.find(item) nodelist

        objName = Object.prototype.toString.call(item);
        if (objName === '[object HTMLDocument]' || objName === '[object Document]') { // detect document

            if (ui.find.document === undefined) {
                ui.find.document = document.querySelectorAll('html');
            }

            call = ui.find.document;
            return call;

        }

        if (objName === '[object Window]') { return window; } // window object
        if (objName === '[object Array]') { return item; } // array object

        return [item]; // "this" object, [] converting object for event loops

    }

    if (outer !== undefined) { // find items in outer elements

        if (outer instanceof Object) {
            outerEl = outer;

        } else {
            outerEl = document.querySelectorAll(outer); // convert to array
        }

        // discard "this" object && form object (form element not returns "this", it returns all form elements)
        if (outerEl.length !== undefined && Array.prototype.slice.call(outerEl).length === 1) {

            for (i = 0; i < outerEl.length; i++) {

                outerElIndex = outerEl[i].querySelectorAll(item);
                if (outerEl.length === 1) {

                    foundEl = outerElIndex[0];

                    if (foundEl === undefined) { // when founded item length is 1, foundEl returned undefined (select option elements)
                        foundEl = outerEl.querySelectorAll(item);
                    }

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

}