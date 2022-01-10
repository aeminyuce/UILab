/* removeclass */

import { ui } from './globals.js';
export default () => ui;

ui.removeClass = function (that, name) {

    const rex = new RegExp('^\\s+|\\s+$');

    ui.find(that).forEach(el => {

        name.split(' ').forEach(item => {

            const re = new RegExp('(\\s|^)' + item + '(\\s|$)');

            if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements
                el.className.baseVal = el.className.baseVal.replace(re, ' ').replace(rex, '');

            } else {

                el.className = el.className.replace(re, ' ').replace(rex, '');

                if (el.className === '') {
                    el.removeAttribute('class');
                }

            }

        });

    });

}