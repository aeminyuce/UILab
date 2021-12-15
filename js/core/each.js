// each
import { ui } from './globals.js';
export default () => ui;

ui.each = function (t, callback) {

    var l = ui.find(t), i;
    for (i = 0; i < l.length; i++) { callback.call(l[i], i); }

}