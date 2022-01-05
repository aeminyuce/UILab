/* removeclass */

import { ui } from './globals.js';
export default () => ui;

ui.removeClass = function (that, name) {

    name = name.split(' ');

    const rex = new RegExp('^\\s+|\\s+$');
    const nodeList = ui.find(that);

    nodeList.forEach(el => {

        name.forEach(item => {

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