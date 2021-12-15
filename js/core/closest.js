// closest
import { ui } from './globals.js';
export default () => ui;

ui.closest = function (t, outer) {

    var l, o, i, j, p;

    if (outer instanceof Object) { o = [outer]; } else { o = ui.find(outer); }
    l = ui.find(t);

    for (i = 0; i < l.length; i++) {
        p = l[i].parentNode;
        while (p) {

            for (j = 0; j < o.length; j++) { if (p === o[j]) { return ui.find(p); } }
            p = p.parentNode;

        }
    }

    return [];

}