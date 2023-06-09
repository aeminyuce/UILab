/* hasclass */

import { ui } from './globals.js';
export default () => ui;

ui.hasClass = (that, name) => {

    const nodeList = ui.find(that);

    for (let i = 0; i < nodeList.length; i++) {

        if (ui.globals.svgElems.indexOf(nodeList[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
            return new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className.baseVal);

        } else return new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className);

    }

}