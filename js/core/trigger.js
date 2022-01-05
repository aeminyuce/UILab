/* trigger */

import { ui } from './globals.js';
export default () => ui;

ui.trigger = function (that, e) {

    let event;

    const callFnc = (e) => {

        try {
            event = new Event(e);

        } catch (err) { // ie

            event = document.createEvent('HTMLEvents');
            event.initEvent(e, true, false);

        }

        const nodeList = ui.find(that);
        nodeList.forEach(el => { el.dispatchEvent(event); });

    };

    // for multiple event listeners ex: 'click touchend'
    const arr = e.split(' ');
    arr.forEach(name => { callFnc(name); });

}