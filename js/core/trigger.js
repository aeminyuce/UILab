/* trigger */

import { ui } from './globals.js';
export default () => ui;

ui.trigger = function (that, e) {

    const callFnc = (e) => {

        let event;

        try {
            event = new Event(e);

        } catch (err) { // ie

            event = document.createEvent('HTMLEvents');
            event.initEvent(e, true, false);

        }

        Array.prototype.forEach.call(ui.find(that), el => { el.dispatchEvent(event); });

    };

    // for multiple event listeners ex: 'click touchend'
    const arr = e.split(' ');
    for (let i = 0; i < arr.length; i++) callFnc(arr[i]);

}