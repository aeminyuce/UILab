/* toggleclass */

import { ui } from './globals.js';
export default () => ui;

ui.toggleClass = function (that, name) {

    let arr, newArr, index, isSvgElements;

    const re = new RegExp('^\\s+|\\s+$');
    name = name.split(' ');

    Array.prototype.forEach.call(ui.find(that),

        el => {

            isSvgElements = ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1; // check SVG and own elements

            if (isSvgElements) arr = el.className.baseVal.split(' ');
            else arr = el.className.split(' ');

            for (let i = 0; i < name.length; i++) {

                newArr = arr;
                index = newArr.indexOf(name[i]);

                if (index >= 0) newArr.splice(index, 1);
                else newArr.push(name[i]);

                if (isSvgElements) {
                    el.className.baseVal = arr.join(' ');

                } else {

                    newArr = newArr.join(' ').replace(re, '');

                    if (newArr.length === 0) el.removeAttribute('class');
                    else el.className = newArr;

                }

            }

        });

}