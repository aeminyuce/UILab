/* removeclass */

import { ui } from './globals.js';
export default () => ui;

ui.removeClass = function (t, name) {

    var l = ui.find(t), i, j, rex = new RegExp('^\\s+|\\s+$'), re;

    name = name.split(' ');

    for (i = 0; i < l.length; i++) {
        for (j = 0; j < name.length; j++) {

            re = new RegExp('(\\s|^)' + name[j] + '(\\s|$)');

            if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
                l[i].className.baseVal = l[i].className.baseVal.replace(re, ' ').replace(rex, '');

            } else {

                l[i].className = l[i].className.replace(re, ' ').replace(rex, '');

                if (l[i].className === '') {
                    l[i].removeAttribute('class');
                }

            }

        }
    }

}