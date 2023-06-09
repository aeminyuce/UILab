/* addclass */

import { ui } from './globals.js';
export default () => ui;

ui.addClass = function (that, name) {

    const re = new RegExp('^\\s+|\\s+$');
    name = name.split(' ');

    Array.prototype.forEach.call(ui.find(that),

        el => {

            for (let i = 0; i < name.length; i++) {

                if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements

                    if ( el.className.baseVal.split(' ').indexOf(name[i]) === -1) {

                        el.className.baseVal += ' ' + name[i];
                        el.className.baseVal = el.className.baseVal.replace(re, '');

                    }

                } else {

                    if (el.className.split(' ').indexOf(name[i]) === -1) {

                        el.className += ' ' + name[i];
                        el.className = el.className.replace(re, '');

                    }

                }

            }

        });

}