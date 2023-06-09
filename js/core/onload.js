/* onload */

import { ui } from './globals.js';
export default () => ui;

ui.onload = (callback) => {

    const handlerFnc = function (pt, pe) {

        if (ui.handlers === undefined) { ui.handlers = {}; }
        if (ui.handlers[pt] === undefined) { ui.handlers[pt] = {}; }
        if (ui.handlers[pt][pe] === undefined) { ui.handlers[pt][pe] = []; }

        ui.handlers[pt][pe].push(callback);

        if (typeof pe !== 'function' && callback !== undefined) {

            // merge repeated event listeners
            if (ui.handlers[pt][pe].length === 1) {

                pt.addEventListener(pe.split('.')[0], function (ev) { // split for event naming

                    for (let i = 0; i < ui.handlers[pt][pe].length; i++) {
                        ui.handlers[pt][pe][i](ev);
                    }

                }, true);

            }

        } else return;

    };

    if (document.attachEvent) {

        if (document.readyState === 'complete') callback();
        else handlerFnc(document, 'DOMContentLoaded');

    } else {

        if (document.readyState !== 'loading') callback();
        else handlerFnc(document, 'DOMContentLoaded');

    }

}