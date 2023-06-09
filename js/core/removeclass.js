/* removeclass */

import { ui } from './globals.js';
export default () => ui;

ui.removeClass = function (that, name) {

    const rex = new RegExp('^\\s+|\\s+$');
    name = name.split(' ');

    Array.prototype.forEach.call(ui.find(that),

        el => {

            for (let i = 0; i < name.length; i++) {

                const re = new RegExp('(\\s|^)' + name[i] + '(\\s|$)');

                if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements

                    el.className.baseVal = el.className.baseVal.replace(re, ' ').replace(rex, '');
                    if (el.className.baseVal === '') el.removeAttribute('class');

                } else {

                    el.className = el.className.replace(re, ' ').replace(rex, '');
                    if (el.className === '') el.removeAttribute('class');

                }

            }

        });

}