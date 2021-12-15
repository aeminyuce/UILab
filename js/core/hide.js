/* hide */

import { ui } from './globals.js';
export default () => ui;

ui.hide = function (t) {

    var l = ui.find(t), i;
    for (i = 0; i < l.length; i++) { l[i].style.display = 'none'; }

}