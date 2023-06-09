/* off */

import { ui } from './globals.js';
export default () => ui;

ui.off = function (that, e) {

    const callFnc = (e) => {

        let passiveEvent = false;
        const eName = e.split('.')[0]; // split for event naming

        if (ui.globals.passiveEvents.indexOf(eName) > -1) { // control passive event listeners
            passiveEvent = true;
        }

        const handlerFnc = function (pt, pe) {

            if (ui.handlers[pt] !== undefined) {
                if (ui.handlers[pt][pe] !== undefined) {

                    for (let i = 0; i < ui.handlers[pt][pe].length; i++) {

                        pt.removeEventListener(pe.split('.')[0], ui.handlers[pt][pe][i], passiveEvent ? { passive: true } : true); // split for event naming

                        ui.handlers[pt][pe].splice(ui.handlers[pt][pe][i], 1); // remove event from eventHandlers array

                    }

                }
            }

        };

        const nodeList = ui.find(that);

        if (nodeList.length === 0) { // detect window event listeners
            handlerFnc(nodeList, e);

        } else Array.prototype.forEach.call(nodeList, el => { handlerFnc(el, e); });

    };

    // for multiple event listeners ex: 'click touchend'
    const arr = e.split(' ');
    for (let j = 0; j < arr.length; j++) callFnc(arr[j]);

}