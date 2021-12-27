/* hasclass */

import { ui } from './globals.js';
export default () => ui;

ui.hasClass = (t, name) => {

    var re, l = ui.find(t), i;

    for (i = 0; i < l.length; i++) {

        if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
            re = new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className.baseVal);

        } else {
            re =new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className);
        }

    }
    return re;

}