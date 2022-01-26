/* addclass */

import { ui } from './globals.js';
export default () => ui;

ui.addClass = function (that, name) {

    let arr;
    const re = new RegExp('^\\s+|\\s+$');

    name = name.split(' ');

    Array.prototype.forEach.call(ui.find(that),

        el => {

            for (let i = 0; i < name.length; i++) {

                if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements

                    arr = el.className.baseVal.split(' ');
                    if (arr.indexOf(name[i]) === -1) {

                        el.className.baseVal += ' ' + name[i];
                        el.className.baseVal = el.className.baseVal.replace(re, '');

                    }

                } else {

                    arr = el.className.split(' ');
                    if (arr.indexOf(name[i]) === -1) {

                        el.className += ' ' + name[i];
                        el.className = el.className.replace(re, '');

                    }

                }

            }

        });

}