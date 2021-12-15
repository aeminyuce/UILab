// addclass
import { ui } from './globals.js';
export default () => ui;

ui.addClass = function (t, name) {

    var arr, l = ui.find(t), i, j, re = new RegExp('^\\s+|\\s+$');

    name = name.split(' ');

    for (i = 0; i < l.length; i++) {
        for (j = 0; j < name.length; j++) {

            if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements

                arr = l[i].className.baseVal.split(' ');
                if (arr.indexOf(name[j]) === -1) {

                    l[i].className.baseVal += ' ' + name[j];
                    l[i].className.baseVal = l[i].className.baseVal.replace(re, '');

                }

            } else {

                arr = l[i].className.split(' ');
                if (arr.indexOf(name[j]) === -1) {

                    l[i].className += ' ' + name[j];
                    l[i].className = l[i].className.replace(re, '');

                }

            }

        }
    }

}