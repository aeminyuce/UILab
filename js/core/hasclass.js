/* hasclass */

import { ui } from './globals.js';
export default () => ui;

ui.hasClass = (that, name) => {

    let re;

    const nodeList = ui.find(that);
    nodeList.forEach(el => {

        if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements
            re = new RegExp('(^| )' + name + '( |$)', 'gi').test(el.className.baseVal);

        } else {
            re =new RegExp('(^| )' + name + '( |$)', 'gi').test(el.className);
        }

    });

    return re;

}