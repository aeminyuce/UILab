// trigger
import { ui } from './globals.js';
export default () => ui;

ui.trigger = function (t, e) {

    var arr, fnc, event, l, i, j;

    fnc = function (e) {

        try {
            event = new Event(e);

        } catch (err) { // ie

            event = document.createEvent('HTMLEvents');
            event.initEvent(e, true, false);

        }

        l = ui.find(t);
        for (i = 0; i < l.length; i++) { l[i].dispatchEvent(event); }

    };

    // for multiple event listeners ex: 'click touchend'
    arr = e.split(' ');

    for (j = 0; j < arr.length; j++) {
        fnc(arr[j]);
    }

}