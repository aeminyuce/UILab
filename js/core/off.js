/* off */

import { ui } from './globals.js';
export default () => ui;

ui.off = function (that, e) {

    const callFnc = (e) => {

        const handlerFnc = function (pt, pe) {

            if (ui.handlers[pt] !== undefined) {
                if (ui.handlers[pt][pe] !== undefined) {

                    ui.handlers[pt][pe].forEach(name => {

                        pt.removeEventListener(pe.split('.')[0], name, true); // split for event naming
                        ui.handlers[pt][pe].splice(name, 1); // remove event from eventHandlers array

                    });

                }
            }

        };

        const nodeList = ui.find(that);

        if (nodeList.length === 0) { // detect window event listeners
            handlerFnc(nodeList, e);

        } else {
            nodeList.forEach(el => { handlerFnc(el, e); });
        }

    };

    // for multiple event listeners ex: 'click touchend'
    e.split(' ').forEach(name => { callFnc(name); });

}