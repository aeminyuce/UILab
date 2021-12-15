// off
import { ui } from './globals.js';
export default () => ui;

ui.off = function (t, e) {

    var arr, fnc, handlerFnc, l, i, j, k;

    fnc = function (e) {

        handlerFnc = function (pt, pe) {

            if (ui.handlers[pt] !== undefined) {
                if (ui.handlers[pt][pe] !== undefined) {

                    for (j = 0; j < ui.handlers[pt][pe].length; j++) {

                        pt.removeEventListener(pe.split('.')[0], ui.handlers[pt][pe][j], true); // split for event naming
                        ui.handlers[pt][pe].splice(ui.handlers[pt][pe][j], 1); // remove event from eventHandlers array

                    }

                }
            }

        };

        l = ui.find(t);

        if (l.length === 0) { // detect window event listeners
            handlerFnc(l, e);

        } else {

            for (i = 0; i < l.length; i++) {
                handlerFnc(l[i], e);
            }

        }

    };

    // for multiple event listeners ex: 'click touchend'
    arr = e.split(' ');

    for (k = 0; k < arr.length; k++) {
        fnc(arr[k]);
    }

}