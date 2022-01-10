/* addclass */

import { ui } from './globals.js';
export default () => ui;

ui.addClass = function (that, name) {

    let arr;
    const re = new RegExp('^\\s+|\\s+$');

    ui.find(that).forEach(el => {

        name.split(' ').forEach(item => {

            if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements

                arr = el.className.baseVal.split(' ');
                if (arr.indexOf(item) === -1) {

                    el.className.baseVal += ' ' + item;
                    el.className.baseVal = el.className.baseVal.replace(re, '');

                }

            } else {

                arr = el.className.split(' ');
                if (arr.indexOf(item) === -1) {

                    el.className += ' ' + item;
                    el.className = el.className.replace(re, '');

                }

            }

        });

    });

}