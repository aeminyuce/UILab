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

        ui.find(that).forEach(el => { el.dispatchEvent(event); });

    };

    // for multiple event listeners ex: 'click touchend'
    e.split(' ').forEach(name => { callFnc(name); });

}