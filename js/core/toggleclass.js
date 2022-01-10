/* toggleclass */

import { ui } from './globals.js';
export default () => ui;

ui.toggleClass = function (that, name) {

    let arr, newArr, index, isSvgElements;

    const re = new RegExp('^\\s+|\\s+$');

    ui.find(that).forEach(el => {

        isSvgElements = ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1; // check SVG and own elements

        if (isSvgElements) {
            arr = el.className.baseVal.split(' ');

        } else {
            arr = el.className.split(' ');
        }

        name.split(' ').forEach(item => {

            newArr = arr;
            index = newArr.indexOf(item);

            if (index >= 0) {
                newArr.splice(index, 1);

            } else {
                newArr.push(item);
            }

            if (isSvgElements) {
                el.className.baseVal = arr.join(' ');

            } else {

                newArr = newArr.join(' ').replace(re, '');

                if (newArr.length === 0) {
                    el.removeAttribute('class');

                } else {
                    el.className = newArr;
                }

            }

        });

    });

}