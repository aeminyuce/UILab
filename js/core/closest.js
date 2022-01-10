/* closest */

import { ui } from './globals.js';
export default () => ui;

ui.closest = function (that, outer) {

    let outerEl;
    let parentEl;

    if (outer instanceof Object) {
        outerEl = [outer];

    } else {
        outerEl = ui.find(outer);
    }

    let elems = [];
    const nodeList = ui.find(that);

    nodeList.forEach(el => {

        parentEl = el.parentNode;
        while (parentEl) {

            for (let i = 0; i < outerEl.length; i++) { // has return for parent loop

                if (parentEl === outerEl[i]) {

                    elems = ui.find(parentEl);
                    return;

                }

            }

            parentEl = parentEl.parentNode;

        }

    });

    return elems;

}