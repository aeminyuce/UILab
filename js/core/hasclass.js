/* hasclass */

import { ui } from './globals.js';
export default () => ui;

ui.hasClass = (that, name) => {

    let re;
    const nodeList = ui.find(that);

    for (let i = 0; i < nodeList.length; i++) {

        if (ui.globals.svgElems.indexOf(nodeList[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
            re = new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className.baseVal);

        } else {
            re =new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className);
        }

    }

    return re;

}